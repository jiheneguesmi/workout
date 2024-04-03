const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.0.168.92:5000', // Change this to match your backend URL
      changeOrigin: true,
    })
  );
};
