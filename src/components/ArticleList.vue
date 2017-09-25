<template>
  <div class="article-list">
    <ul class="clear">
      <li class="fl">
        <div class="item">
        	<h2>文章标题文章标题文章标题文章标题</h2>
	        <p class="date">2017-09-22 by Insect</p>
	        <div class="tags">
	        	<a href="">JS</a>
	        	<a href="">音乐</a>
	        </div>
	        <p class="intro ell3">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
	      	<div class="read">
	      		<router-link to="/article/1">阅读全文</router-link>
	      	</div>
        </div>
      </li>
      <li class="fl">
        <div class="item">
        	<h2>文章标题文章标题文章标题文章标题</h2>
	        <p class="date">2017-09-22 by Insect</p>
	        <div class="tags">
	        	<a href="">JS</a>
	        	<a href="">音乐</a>
	        </div>
	        <p class="intro ell3">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
	      	<div class="read">
	      		<router-link to="/article/2">阅读全文</router-link>
	      	</div>
        </div>
      </li>
      <li class="fl">
        <div class="item">
        	<h2>文章标题文章标题文章标题文章标题</h2>
	        <p class="date">2017-09-22 by Insect</p>
	        <div class="tags">
	        	<a href="">JS</a>
	        	<a href="">音乐</a>
	        </div>
	        <p class="intro ell3">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
	      	<div class="read">
	      		<router-link to="/article/3">阅读全文</router-link>
	      	</div>
        </div>
      </li>
      <li class="fl">
        <div class="item">
        	<h2>文章标题文章标题文章标题文章标题</h2>
	        <p class="date">2017-09-22 by Insect</p>
	        <div class="tags">
	        	<a href="">CSS</a>
	        	<a href="">音乐</a>
	        </div>
	        <p class="intro ell3">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
	      	<div class="read">
	      		<router-link to="/article/4">阅读全文</router-link>
	      	</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  .article-list
    padding: 10px 10px 0
    li
      width: 25%
      padding: 10px
      .item
        padding: 10px 0 0;
        background: #fff;
        box-shadow: 2px 2px 6px #ddd;
        border-radius: 4px
        h2
          margin: 0 15px
          color: #3f51b5
          &:hover
            color: #7986cb
            cursor: pointer
        p.date
          margin: 5px 15px
          color: #e91e63
        .tags
          margin: 5px 15px
        .tags a
          display: inline-block
          padding: 4px 10px;
          line-height: 1;
          font-size: 13px
          color: #fff;
          text-decoration: none
          border-radius: 16px
          background: #ec407a;
        .intro
          height: 66px
          margin: 5px 15px
        .read
          padding: 10px 15px
          border-top: 1px solid rgba(160,160,160,0.2)
        .read a
          color: #e91e63
          text-decoration: none
</style>
