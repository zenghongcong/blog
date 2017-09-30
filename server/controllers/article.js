/**
 * @ author zenghongcong
 * @ date 2017-9-27 20:33
 * @ desc 文章
 */

const article = require('../models/article.js');

const getArticleList = async function(ctx){
	let id = ctx.params.id;
	let result = await article.findArticle(id);
	this.body = result;
}

module.exports = {
	getArticleList
};
