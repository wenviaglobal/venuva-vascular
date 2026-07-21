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
      RECEIVER_MAIL: 'venuvavascular@gmail.com, growthpixelagency@gmail.com',
      VITE_SMTP_HOST: 'smtp.gmail.com',
      VITE_SMTP_PORT: '587',
      VITE_AUTH_USERNAME: 'venuvavascular@gmail.com',
      VITE_AUTH_PASSWOrD: 'pzhy vktr sici ypvq',
      VITE_RECEIVER_MAIL: 'venuvavascular@gmail.com',
      TELEGRAM_CHAT_ID: '8760927362',
      TELEGRAM_BOT_TOKEN: '8719120615:AAFSBcbuTe0EZ8fvOfYWxUW9KrlM0l52DIQ',
      DATABASE_URL: 'postgres://venuva:938d611db4b64a79a9af3b99e67e1e82@127.0.0.1:5434/venuva',
      JWT_SECRET: 'b88ae3b0b15b80765782e8fe3c44f9b5ca4e1e79073a4eeecc64aebcda97856d',
      ADMIN_EMAIL: 'admin@venuvavascular.com',
      ADMIN_PASSWORD: '8h1wdmJroa3OYQ',
      UPLOAD_DIR: 'public/uploads'
    }
  }]
};
