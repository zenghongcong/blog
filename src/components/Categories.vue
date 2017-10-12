<template>
  <div class="categories fl">
    <div v-for="it in list" class="item">
    	<h3>{{it.name}}</h3>
    	<ol>
    		<li v-for="it in it.articles">{{it.create_time | date('y-m-d')}} {{it.title}}</li>
    	</ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categories',
  data () {
    return {
      list: []
    }
  },
  created(){
  	if(this.$route.params.id != undefined){
  		this.getCategory()
  	}else{
  		this.getCategoryList()
  	}
  },
  methods: {
  	getCategoryList(){
  		this.$http.post('/api/category/list')
  		.then((res) => {
  			if(res.status == 200){
  				this.list = res.data.list || [];
  			}else{
  				alert('请求失败！')
  			}
  		}, (err) => {
  			console.log(err)
  		})
  	},
  	getCategory(){
  		this.$http.post('/api/category', {id: this.$route.params.id})
  		.then((res) => {
  			if(res.status == 200){
  				this.list = res.data.list || [];
  			}else{
  				alert('请求失败！')
  			}
  		}, (err) => {
  			console.log(err)
  		})
  	},
  }
}
</script>

<style lang="stylus" scoped>
  .categories
    width: 800px
    padding-top: 8px
	  h3
	    margin: 16px 0
	    font-size: 21px
	    font-weight: 400
	    color: #4183c4
	  ol
	    padding-left: 36px
	    li
	      list-style-type: disc
	      line-height: 2
	      border-bottom: 1px dashed #ccc
	      margin: 10px 0 
</style>
