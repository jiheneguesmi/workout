const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '10.0.4.128:5000', // Change this to match your backend URL
      changeOrigin: true,
    })
  );
};
