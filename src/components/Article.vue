<template>
  <div class="article fl">
    <div class="head">
    	<h2>{{article.title}}</h2>
    	<div class="tag">
	      <span class="date"><i class="fa fa-calendar"></i>{{article.create_time | date}}</span>
	      <a v-if="article.category" :href="'#/category/' + article.category.id"><i class="fa fa-bookmark"></i>{{article.category.name}}</a>
	      <span class="read"><i class="fa fa-flag"></i>阅读数 <i>6231</i></span>
	    </div>
    </div>
    <div class="content" v-html="toHtml(article.content)"></div>
  </div>
</template>

<script>
export default {
name: 'article',
data () {
    return {
      article: {}
    }
},
created(){
	this.getArticle()
},
methods: {
	getArticle(){
		this.$http.post('/api/article', {id: this.$route.params.id})
		.then((res) => {
			if(res.status == 200){
				this.article = res.data.article || {}
			}else{
				alert('请求失败！')
			}
		}, (err) => {
			console.log(err)
		})
	}
}
}
</script>

<style lang="stylus" scoped>
  .article
    width: 800px
    padding-top: 24px
    .head
      display: block
      h2
        color: #4183c4
        font-size: 21px
        font-weight: normal
      .tag
        margin: 5px 0 15px
        color: #999
        .date
          margin-right: 15px
        .read
          margin-left: 15px
          i
            font-style: normal
        .fa
          margin-right: 5px
        a
          color: #999
    .content
      padding-bottom: 48px
</style>
