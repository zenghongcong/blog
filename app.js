/**
 * @ author  zenghongcong
 * @ date    2017-9-26 10:10
 * @ desc    启动文件
 */

const app = new (require('koa'))(),
	  rout = require('koa-router')(),
	  json = require('koa-json')(),
	  logger = require('koa-logger'),
	  api = require('./server/routes/api.js'),
	  bodyparser = require('koa-bodyparser')();
	  
app.use(bodyparser);
app.use(json);
app.use(logger);

app.use(async (ctx, next) => {
	let start = new Date;
	await next();
	let ms = new Date - start;
	console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

app.on('error', (err, ctx) => {
	console.log('server error', err);
});

rout.use('/api', api.routes());
app.use(rout.routes());

app.listen(8889, () => {
	console.log('Koa is listening in 8889');
});

module.exports = app;
