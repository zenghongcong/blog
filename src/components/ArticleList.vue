<template>
  <div class="article-list fl">
    <ul class="clear">
      <li>
        <div class="item">
        	<h2><a href="#/article/1">文章标题文章标题文章标题文章标题</a></h2>
	        <p class="intro">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
	      	<div class="tag">
	      		<span class="date"><i class="fa fa-calendar"></i>2017-09-22</span>
	      		<a href="#/categories/2"><i class="fa fa-bookmark"></i>分类</a>
	      	</div>
        </div>
      </li>
      <li>
        <div class="item">
        	<h2><a href="#/article/1">文章标题文章标题文章标题文章标题</a></h2>
	        <p class="intro">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
	      	<div class="tag">
	      		<span class="date"><i class="fa fa-calendar"></i>2017-09-22</span>
	      		<a href="#/categories/2"><i class="fa fa-bookmark"></i>分类</a>
	      	</div>
        </div>
      </li>
      <li>
        <div class="item">
        	<h2><a href="#/article/1">文章标题文章标题文章标题文章标题</a></h2>
	        <p class="intro">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
	      	<div class="tag">
	      		<span class="date"><i class="fa fa-calendar"></i>2017-09-22</span>
	      		<a href="#/categories/2"><i class="fa fa-bookmark"></i>分类</a>
	      	</div>
        </div>
      </li>
      <li>
        <div class="item">
        	<h2><a href="#/article/1">文章标题文章标题文章标题文章标题</a></h2>
	        <p class="intro">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
	      	<div class="tag">
	      		<span class="date"><i class="fa fa-calendar"></i>2017-09-22</span>
	      		<a href="#/categories/2"><i class="fa fa-bookmark"></i>分类</a>
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
    width: 800px
    li
      padding: 25px 0
      border-bottom: 1px solid rgba(160,160,160,0.2)
      h2 a
        color: #4183c4
        font-size: 21px
        font-weight: normal
        &:hover
          color: #027ffb
      .intro
        margin: 5px 0
      .tag
        color: #999
        a
          color: #999
      .tag .date
        margin-right: 15px
      .tag .fa
        margin-right: 5px
</style>
