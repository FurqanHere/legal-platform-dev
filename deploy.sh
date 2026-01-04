#!/bin/bash

# Deployment script for Digits project
# Usage: ./deploy.sh

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Configuration
SERVER_HOST="master.devicebee.com"
SERVER_USER="root"  # Change this to your server username
SERVER_PATH="/var/www/digits"
WEB_PATH="/var/www/html/digits"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
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
tar -czf digits-build.tar.gz -C build .

# Deploy to server
print_status "Deploying to server..."
scp digits-build.tar.gz $SERVER_USER@$SERVER_HOST:/tmp/

# Execute deployment on server
ssh $SERVER_USER@$SERVER_HOST << EOF
    set -e
    
    echo "📦 Extracting build files..."
    cd $WEB_PATH
    sudo rm -rf *
    sudo tar -xzf /tmp/digits-build.tar.gz
    
    echo "🔧 Setting permissions..."
    sudo chown -R www-data:www-data $WEB_PATH
    sudo chmod -R 755 $WEB_PATH
    
    echo "🔄 Reloading web server..."
    sudo systemctl reload nginx
    
    echo "🧹 Cleaning up..."
    rm /tmp/digits-build.tar.gz
    
    echo "✅ Deployment completed successfully!"
EOF

# Clean up local files
rm digits-build.tar.gz

print_status "🎉 Deployment completed successfully!"
print_status "Your site should be available at: https://master.devicebee.com/digits"
