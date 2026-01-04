#!/bin/bash

# Advanced deployment script for Digits project
# Usage: ./deploy-advanced.sh [environment]
# Environments: staging, production

set -e

# Configuration
ENVIRONMENT=${1:-staging}
SERVER_HOST="master.devicebee.com"
SERVER_USER="root"

# Environment-specific configurations
case $ENVIRONMENT in
    "staging")
        SERVER_PATH="/var/www/digits-staging"
        WEB_PATH="/var/www/html/digits-staging"
        BRANCH="develop"
        ;;
    "production")
        SERVER_PATH="/var/www/digits"
        WEB_PATH="/var/www/html/digits"
        BRANCH="main"
        ;;
    *)
        echo "❌ Invalid environment. Use 'staging' or 'production'"
        exit 1
        ;;
esac

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}  Digits Deployment - $ENVIRONMENT${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Main deployment function
deploy() {
    print_header
    
    # Pre-deployment checks
    print_status "Running pre-deployment checks..."
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root directory."
        exit 1
    fi
    
    # Check if we're on the right branch
    CURRENT_BRANCH=$(git branch --show-current)
    if [ "$CURRENT_BRANCH" != "$BRANCH" ]; then
        print_warning "You're on branch '$CURRENT_BRANCH' but deploying to '$ENVIRONMENT' (expected: '$BRANCH')"
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_error "Deployment cancelled."
            exit 1
        fi
    fi
    
    # Check for uncommitted changes
    if ! git diff-index --quiet HEAD --; then
        print_warning "You have uncommitted changes."
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_error "Deployment cancelled."
            exit 1
        fi
    fi
    
    # Install dependencies
    print_status "Installing dependencies..."
    npm ci --legacy-peer-deps
    
    # Run tests (if available)
    if [ -f "package.json" ] && grep -q '"test"' package.json; then
        print_status "Running tests..."
        npm test -- --watchAll=false || print_warning "Tests failed, but continuing deployment..."
    fi
    
    # Build the project
    print_status "Building the project..."
    npm run build
    
    if [ $? -ne 0 ]; then
        print_error "Build failed!"
        exit 1
    fi
    
    print_status "Build completed successfully!"
    
    # Create deployment package
    print_status "Creating deployment package..."
    tar -czf digits-$ENVIRONMENT-$(date +%Y%m%d-%H%M%S).tar.gz -C build .
    
    # Deploy to server
    print_status "Deploying to $ENVIRONMENT environment..."
    
    # Create backup of current deployment
    ssh $SERVER_USER@$SERVER_HOST << EOF
        set -e
        echo "📦 Creating backup of current deployment..."
        if [ -d "$WEB_PATH" ]; then
            sudo cp -r $WEB_PATH $WEB_PATH.backup.$(date +%Y%m%d-%H%M%S)
        fi
EOF
    
    # Upload and extract
    scp digits-$ENVIRONMENT-*.tar.gz $SERVER_USER@$SERVER_HOST:/tmp/
    
    ssh $SERVER_USER@$SERVER_HOST << EOF
        set -e
        
        echo "📦 Extracting build files..."
        cd $WEB_PATH
        sudo rm -rf *
        sudo tar -xzf /tmp/digits-$ENVIRONMENT-*.tar.gz
        
        echo "🔧 Setting permissions..."
        sudo chown -R www-data:www-data $WEB_PATH
        sudo chmod -R 755 $WEB_PATH
        
        echo "🔄 Reloading web server..."
        sudo systemctl reload nginx
        
        echo "🧹 Cleaning up..."
        rm /tmp/digits-$ENVIRONMENT-*.tar.gz
        
        echo "✅ Deployment completed successfully!"
EOF
    
    # Clean up local files
    rm digits-$ENVIRONMENT-*.tar.gz
    
    print_status "🎉 Deployment to $ENVIRONMENT completed successfully!"
    print_status "Your site should be available at: https://master.devicebee.com/digits"
    
    # Show deployment info
    echo
    print_status "Deployment Summary:"
    echo "  Environment: $ENVIRONMENT"
    echo "  Branch: $CURRENT_BRANCH"
    echo "  Server: $SERVER_HOST"
    echo "  Path: $WEB_PATH"
    echo "  Time: $(date)"
}

# Rollback function
rollback() {
    print_status "Rolling back to previous deployment..."
    
    ssh $SERVER_USER@$SERVER_HOST << EOF
        set -e
        
        # Find the latest backup
        LATEST_BACKUP=\$(ls -t $WEB_PATH.backup.* | head -n1)
        
        if [ -z "\$LATEST_BACKUP" ]; then
            echo "❌ No backup found for rollback"
            exit 1
        fi
        
        echo "🔄 Rolling back to: \$LATEST_BACKUP"
        
        # Remove current deployment
        sudo rm -rf $WEB_PATH/*
        
        # Restore from backup
        sudo cp -r \$LATEST_BACKUP/* $WEB_PATH/
        
        # Set permissions
        sudo chown -R www-data:www-data $WEB_PATH
        sudo chmod -R 755 $WEB_PATH
        
        # Reload web server
        sudo systemctl reload nginx
        
        echo "✅ Rollback completed successfully!"
EOF
    
    print_status "🎉 Rollback completed successfully!"
}

# Main script logic
case "${2:-deploy}" in
    "rollback")
        rollback
        ;;
    "deploy"|*)
        deploy
        ;;
esac
