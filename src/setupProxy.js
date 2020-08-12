const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/m-api', {
  target: 'http://47.98.159.95',
  secure: false,
  changeOrigin: true,
  pathRewrite: {
    '^/m-api': '/m-api',
  },
});

module.exports = function (app) {
  app.use(apiProxy);
};
