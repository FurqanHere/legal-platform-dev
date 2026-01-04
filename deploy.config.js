// Deployment configuration for Digits project
module.exports = {
  // Server configuration
  server: {
    host: 'master.devicebee.com',
    username: 'root', // Change to your server username
    port: 22,
    paths: {
      production: '/var/www/html/digits',
      staging: '/var/www/html/digits-staging'
    }
  },

  // Build configuration
  build: {
    command: 'npm run build',
    outputDir: 'build',
    includeFiles: [
      'build/**/*',
      'public/**/*'
    ]
  },

  // Deployment settings
  deployment: {
    createBackup: true,
    backupRetention: 5, // Keep 5 backups
    restartServices: ['nginx'],
    setPermissions: true,
    permissions: {
      owner: 'www-data',
      group: 'www-data',
      mode: '755'
    }
  },

  // Environment-specific settings
  environments: {
    production: {
      branch: 'main',
      url: 'https://master.devicebee.com/digits',
      autoDeploy: true
    },
    staging: {
      branch: 'develop',
      url: 'https://master.devicebee.com/digits-staging',
      autoDeploy: false
    }
  },

  // Notifications (optional)
  notifications: {
    enabled: false,
    webhook: '', // Add webhook URL for notifications
    channels: ['slack', 'email'] // Notification channels
  }
};
