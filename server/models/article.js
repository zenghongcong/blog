/**
 * @ author  zenghongcong
 * @ date    2017-9-27 20:18
 * @ desc    文章
 */

const db = require('../config/db.js');
const articlePath = '../schema/article.js';
const Blog = db.Blog;

const Article = Blog.import(articlePath);

const findArticle = async function(id){
	console.log(id)
	let result = await Article.findAll({
		where: {
	      id: id
	    }
	});
	return result;
};

module.exports = {
	findArticle
};

