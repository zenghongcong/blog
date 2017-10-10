/**
 * @ author  zenghongcong
 * @ date    2017-9-26 10:10
 * @ desc    启动文件
 */

const path = require('path'),
	koa = new (require('koa'))(),
	koaRouter = require('koa-router')(),
	logger = require('koa-logger'),
  	article = require('./server/routes/api.js');

koa.use(require('koa-bodyparser')());
koa.use(logger());

koa.use(async (ctx, next) => {
	let start = new Date();
  	await next();
  	let ms = new Date - start;
  	console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

koa.on('error', function(err, ctx) {
  	console.log('server error: ', err);
});

// 挂载到 koa-router 上，同时会让所有的 article 的请求路径前面加上 '/api' 。
koaRouter.use('/api', article.routes());

koa.use(koaRouter.routes()); // 将路由规则挂载到Koa上。

koa.listen(8889, () => {
  console.log('Koa is listening on port 8889');
});

module.exports = koa;
