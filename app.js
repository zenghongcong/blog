const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
	ctx.body = 'TEST';
});

app.listen('8889');
