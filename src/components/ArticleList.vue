<template>
  <div class="article-list fl">
    <ul class="list clear">
      <li v-for="it in list">
        <div class="item">
        	<h2><a :href="'#/article/' + it.id">{{it.title}}</a></h2>
	        <p class="intro">{{it.intro}}</p>
	      	<div class="tag">
	      		<span class="date"><i class="fa fa-calendar"></i>{{it.create_time | date}}</span>
	      		<a :href="'#/categories/' + it.cat_id"><i class="fa fa-bookmark"></i>{{it.category.name}}</a>
	      	</div>
        </div>
      </li>
    </ul>
    <paginate 
    	v-if="pageCount > 1"
		  :page-count="pageCount"
		  :click-handler="pageClick"
		  :prev-text="'上一页'"
		  :next-text="'下一页'"
		  :container-class="'clear paginate'">
		</paginate>
  </div>
</template>

<script>

export default {
  name: 'article-list',
  data () {
    return {
      list: [],
      pageCount: 1,
      form: {
      	page: 1,
      	size: 10,
      }
    }
  },
  created(){
  	this.getArticleList()
  },
  methods: {
  	getArticleList(){
  		this.$http.post('/api/article/list', this.form)
  		.then((res) => {
  			if(res.status == 200){
  				this.pageCount = Math.ceil(res.data.total / 10);
  				this.list = res.data.list || [];
  			}else{
  				alert('请求失败！')
  			}
  		}, (err) => {
  			console.log(err)
  		})
  	},
  	pageClick(page){
  		this.form.page = page;
  		this.getArticleList();
  	}
  }
}
</script>

<style lang="stylus" scoped>
  .article-list
    width: 800px
    text-align: center
    .list
      display: block
      text-align: left
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
