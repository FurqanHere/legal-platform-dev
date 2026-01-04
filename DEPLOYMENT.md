# Digits Deployment Guide

This guide explains how to deploy the Digits project to your server using automated pipelines.

## 🚀 Quick Start

### 1. Server Setup
First, run the server setup script on your server:

```bash
# On your server (master.devicebee.com)
wget https://raw.githubusercontent.com/yourusername/digits/main/server-setup.sh
chmod +x server-setup.sh
sudo ./server-setup.sh
```

### 2. Configure GitHub Secrets
In your GitHub repository, go to Settings > Secrets and add:

- `SERVER_USERNAME`: Your server username (e.g., `root` or `deploy`)
- `SERVER_SSH_KEY`: Your private SSH key for server access

### 3. Deploy
Choose one of the deployment methods below:

## 📦 Deployment Methods

### Method 1: GitHub Actions (Recommended)
Automatically deploys when you push to `main` or `master` branch:

```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

### Method 2: Manual Deployment
Deploy manually using npm scripts:

```bash
# Deploy to production
npm run deploy:production

# Deploy to staging
npm run deploy:staging

# Simple deployment
npm run deploy
```

### Method 3: Direct Script Execution
Run deployment scripts directly:

```bash
# Make scripts executable
chmod +x deploy.sh deploy-advanced.sh

# Deploy to production
./deploy-advanced.sh production

# Deploy to staging
./deploy-advanced.sh staging

# Rollback if needed
./deploy-advanced.sh production rollback
```

## 🔧 Configuration

### Environment Variables
The deployment scripts support different environments:

- **Production**: `main` branch → `/var/www/html/digits`
- **Staging**: `develop` branch → `/var/www/html/digits-staging`

### Server Configuration
- **Host**: master.devicebee.com
- **Web Server**: Nginx
- **SSL**: Let's Encrypt (auto-configured)
- **Backup**: Automatic backups before each deployment

## 📁 Project Structure

```
/var/www/
├── digits/                 # Git repository
├── html/
│   ├── digits/            # Production build
│   └── digits-staging/    # Staging build
└── logs/                  # Application logs
```

## 🔄 Deployment Process

1. **Pre-deployment Checks**
   - Verify branch
   - Check for uncommitted changes
   - Run tests (if available)

2. **Build Process**
   - Install dependencies
   - Build React application
   - Create deployment package

3. **Server Deployment**
   - Create backup of current version
   - Upload new build
   - Extract and set permissions
   - Reload web server

4. **Post-deployment**
   - Verify deployment
   - Clean up temporary files
   - Send notifications (if configured)

## 🛠️ Troubleshooting

### Common Issues

**Build Fails**
```bash
# Check Node.js version
node --version

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Deployment Fails**
```bash
# Check server connectivity
ssh your-username@master.devicebee.com

# Verify server permissions
ls -la /var/www/html/digits

# Check Nginx status
sudo systemctl status nginx
```

**Rollback**
```bash
# Rollback to previous version
npm run rollback

# Or manually
./deploy-advanced.sh production rollback
```

### Logs
Check deployment logs:
```bash
# GitHub Actions logs
# Go to Actions tab in your GitHub repository

# Server logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## 🔐 Security

### SSH Key Setup
1. Generate SSH key pair:
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

2. Copy public key to server:
```bash
ssh-copy-id your-username@master.devicebee.com
```

3. Add private key to GitHub Secrets as `SERVER_SSH_KEY`

### Server Security
- Firewall configured
- SSL certificates auto-renewed
- Automatic security updates enabled
- Proper file permissions set

## 📊 Monitoring

### Health Checks
- **Production**: https://master.devicebee.com/digits
- **Staging**: https://master.devicebee.com/digits-staging

### Performance Monitoring
- Nginx access logs
- Error logs
- Server resource usage

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Check server logs
4. Verify server configuration

## 📝 Notes

- Always test on staging before production
- Keep your dependencies updated
- Monitor server resources
- Regular backups are automatically created
- SSL certificates are auto-renewed

---

**Happy Deploying! 🚀**
