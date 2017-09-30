<template>
	<div class="nav">
		<a href="/">blog</a>
		<nav class="fr">
			<router-link to="/article"><i class="fa fa-home"></i>首页</router-link>
			<router-link to="/archives"><i class="fa fa-archive"></i>归档</router-link>
			<router-link to="/categories"><i class="fa fa-bookmark"></i>分类</router-link>
			<router-link to="/about"><i class="fa fa-user"></i>关于我</router-link>
		</nav>
	</div>
</template>

<script>
	
</script>

<style lang="stylus" scoped>
  .nav
    display: table
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 64px
    padding: 0 20px
    margin: auto
    background: #4183c4
    a
      display: inline-block
      line-height: 64px
      color: #fff
    nav a
      position: relative
      margin-left: 15px
      .fa
        margin-right: 5px
      &:after
        display: block
        position: absolute
        bottom: 8px
        left: -8%
        right: 0
        width: 0%
        border-bottom: 2px solid #fff
        margin: auto
        content: ''
        transition: width .2s linear
      &.active:after, &:hover:after
        width: 116%
</style>

<script>
  
</script>