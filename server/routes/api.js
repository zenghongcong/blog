/**
 * @ 
 */
const api = require('../controllers/article.js'); 
const router = require('koa-router')();

router.get('/article/:id', api.getArticleList); // 定义url的参数是id,用user的auth方法引入router

module.exports = router; // 把router规则暴露出去