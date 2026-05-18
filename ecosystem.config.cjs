module.exports = {
  apps: [{
    name: 'venuva-vascular',
    script: 'server.js',
    cwd: '/var/www/venuva-vascular',
    env: {
      NODE_ENV: 'production',
      PORT: 3002,
      VITE_DOCTOR_EMAIL: 'venuvavascular@gmail.com',
      VITE_SITE_URL: 'venuvavascular.com',
      AUTH_USERNAME: 'venuvavascular@gmail.com',
      AUTH_PASSWOrD: 'pzhy vktr sici ypvq',
      SMTP_PORT: '587',
      SMTP_HOST: 'smtp.gmail.com',
      RECEIVER_MAIL: 'venuvavascular@gmail.com',
      VITE_SMTP_HOST: 'smtp.gmail.com',
      VITE_SMTP_PORT: '587',
      VITE_AUTH_USERNAME: 'venuvavascular@gmail.com',
      VITE_AUTH_PASSWOrD: 'pzhy vktr sici ypvq',
      VITE_RECEIVER_MAIL: 'venuvavascular@gmail.com',
      TELEGRAM_CHAT_ID: '8760927362',
      TELEGRAM_BOT_TOKEN: '8719120615:AAFSBcbuTe0EZ8fvOfYWxUW9KrlM0l52DIQ'
    }
  }]
};
