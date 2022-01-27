const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  
  app.use(
    '/company/getall',
    createProxyMiddleware({
      target: 'http://localhost:8765',
      changeOrigin: true,
    })
  );

  app.use(
    '/company/get/*',
    createProxyMiddleware({
      target: 'http://localhost:8765',
      changeOrigin: true,
    })
  );

  app.use(
    '/company/register',
    createProxyMiddleware({
      target: 'http://localhost:8765',
      changeOrigin: true,
    })
  );
  
  app.use(
    '/company/delete/*',
    createProxyMiddleware({
      target: 'http://localhost:8765',
      changeOrigin: true,
    })
  );
  

  app.use(
    '/company/update/*',
    createProxyMiddleware({
      target: 'http://localhost:8765',
      changeOrigin: true,
    })
  );

  app.use(
    '/stock/add',
    createProxyMiddleware({
      target: 'http://localhost:8765',
      changeOrigin: true,
    })
  );
 
  app.use(
    '/stock/getAll/*',
    createProxyMiddleware({
      target: 'http://localhost:8765',
      changeOrigin: true,
    })
  );

};