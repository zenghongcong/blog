<template>
	<div class="sidebar fr">
		<h3>Search</h3>
		<div class="search">
			<input type="text" placeholder="Search" />
			<button><i class="fa fa-search"></i></button>
		</div>
		<h3>Blog & Plug</h3>
		<ul class="blog-plug">
			<li class="item">
				<a href="">
					<h4>title</h4>
					<p>intro</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<style lang="stylus" scoped>
  .sidebar
    width: 320px
    padding-top: 25px
    h3
      font-size: 21px
      font-weight: normal
      color: #4183c4
    .search
      height: 34px
      margin: 5px 0
      input
        box-sizing: border-box
        width: 250px
        height: 34px
        padding: 5px 10px
        border: 1px solid #ddd
        outline: none
        vertical-align: top
        border-radius: 3px
        &:focus
          border-color: #51a7e8
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.075), 0 0 5px rgba(81,167,232,0.5)
      button
        box-sizing: border-box
        height: 34px
        padding: 0 14px
        font-size: 16px
        color: #999
        outline: none
        background-color: #eee
        background-image: linear-gradient(#fcfcfc, #eee)
        border: 1px solid #d5d5d5
        vertical-align: top
        border-radius: 3px
        cursor: pointer
    .blog-plug
      padding-top: 8px
     .item
        width: 300px
        padding: 4px
        margin-bottom: 20px
        border: 1px solid rgba(0,0,0,0.075)
        border-bottom-color: rgba(0,0,0,0.125)
        border-radius: 4px
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 5px 10px rgba(0,0,0,0.05)
        transition: border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out
        opacity: .8
        overflow-x: hidden
        &:hover
          border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.15)
          box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 10px 18px rgba(0,0,0,0.1)
          opacity: 1
        a
          display: block
          color: #333
        h4
          padding: 40px 10px
          background: #609bd6
          font-size: 21px
          font-weight: normal
          color: #fff
          text-align: center
          border-radius: 4px
        p
          padding: 20px 0
          text-align: center
</style>