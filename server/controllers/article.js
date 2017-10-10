/**
 * @ author zenghongcong
 * @ date 2017-9-27 20:33
 * @ desc 文章
 */

const articleModel = require('../models/article.js');

const getArticleList = async function(ctx){
	let result = await articleModel.getArticleList();
	ctx.body = {
		msg: 'success',
		total: result.count,
		list: result.rows
	};
}

const getArticle = async function(ctx){
	let id = ctx.params.id;
	let result = await articleModel.getArticleById(id);
	ctx.body = {
		msg: 'success',
		article: result.rows
	};
}

module.exports = {
	getArticleList
};
