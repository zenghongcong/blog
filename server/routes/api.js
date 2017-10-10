/**
 * @ 
 */
const articleController = require('../controllers/article.js'); 
const router = require('koa-router')();

router.post('/article/list', articleController.getArticleList);

module.exports = router; // 把router规则暴露出去