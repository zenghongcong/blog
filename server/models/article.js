/**
 * @ author  zenghongcong
 * @ date    2017-9-27 20:18
 * @ desc    文章
 */

const Blog = require('../config/db.js').Blog;
const articleSchema = Blog.import('../schema/article.js');
const categorySchema = Blog.import('../schema/category.js');

// article表关联模型
articleSchema.hasOne(categorySchema, {
    foreignKey: 'id',
    constraints: true
});

const getArticleById = async function(id){
	let result = await articleSchema.findOne({
		where: {
	      id: id
	   	}
	});
	
	return result;
};

const getArticleList = async function(){
	return await articleSchema.findAndCount({
		include: [categorySchema]
	});
}

module.exports = {
	getArticleById,
	getArticleList
};

