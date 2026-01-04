#!/bin/bash

# Server setup script for Digits project
# Run this on your server (master.devicebee.com) to prepare it for deployment

set -e

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
    echo -e "${BLUE}  Digits Server Setup${NC}"
    echo -e "${BLUE}================================${NC}"
}

print_header

# Update system
print_status "Updating system packages..."
apt update && apt upgrade -y

# Install required packages
print_status "Installing required packages..."
apt install -y nginx git nodejs npm

# Create project directories
print_status "Creating project directories..."
mkdir -p /var/www/digits
mkdir -p /var/www/html/digits
mkdir -p /var/www/digits-staging
mkdir -p /var/www/html/digits-staging

# Set up Git repository
print_status "Setting up Git repository..."
cd /var/www/digits
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/yourusername/digits.git  # Replace with your actual repo URL
fi

# Configure Nginx
print_status "Configuring Nginx..."
cat > /etc/nginx/sites-available/digits << EOF
server {
    listen 80;
    server_name master.devicebee.com;
    
    # Production site
    location /digits {
        alias /var/www/html/digits;
        index index.html;
        try_files \$uri \$uri/ /digits/index.html;
        
        # Security headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "no-referrer-when-downgrade" always;
        add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    }
    
    # Staging site
    location /digits-staging {
        alias /var/www/html/digits-staging;
        index index.html;
        try_files \$uri \$uri/ /digits-staging/index.html;
    }
    
    # Root redirect to production
    location / {
        return 301 /digits;
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/digits /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
print_status "Testing Nginx configuration..."
nginx -t

# Restart Nginx
print_status "Restarting Nginx..."
systemctl restart nginx
systemctl enable nginx

# Set up SSL (optional - you can use Let's Encrypt)
print_status "Setting up SSL certificate..."
apt install -y certbot python3-certbot-nginx
certbot --nginx -d master.devicebee.com --non-interactive --agree-tos --email your-email@example.com

# Set up automatic updates
print_status "Setting up automatic security updates..."
apt install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades

# Create deployment user (optional)
print_status "Creating deployment user..."
useradd -m -s /bin/bash deploy
usermod -aG www-data deploy
mkdir -p /home/deploy/.ssh
chmod 700 /home/deploy/.ssh

# Set up log rotation
print_status "Setting up log rotation..."
cat > /etc/logrotate.d/digits << EOF
/var/log/nginx/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data adm
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 \$(cat /var/run/nginx.pid)
        fi
    endscript
}
EOF

# Set proper permissions
print_status "Setting up permissions..."
chown -R www-data:www-data /var/www/html/digits*
chmod -R 755 /var/www/html/digits*

print_status "🎉 Server setup completed successfully!"
print_status ""
print_status "Next steps:"
print_status "1. Update the Git repository URL in this script"
print_status "2. Add your SSH public key to the server"
print_status "3. Configure GitHub Actions secrets:"
print_status "   - SERVER_USERNAME: your server username"
print_status "   - SERVER_SSH_KEY: your private SSH key"
print_status "4. Test deployment with: npm run deploy"
print_status ""
print_status "Your site will be available at:"
print_status "  Production: https://master.devicebee.com/digits"
print_status "  Staging: https://master.devicebee.com/digits-staging"
