const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/api', {
  // target: 'http://localhost:3000',
  target: 'http://47.98.159.95/m-api',
  secure: false,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
});

module.exports = function (app) {
  app.use(apiProxy);
};
