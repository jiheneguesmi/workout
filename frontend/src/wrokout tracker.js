const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.0.181.176:5000', // Change this to match your backend URL
      changeOrigin: true,
    })
  );
};
