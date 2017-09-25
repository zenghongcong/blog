<template>
  <div id="app">
  	<v-nav></v-nav>
  	<div class="content">
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Nav from './components/Nav'

Vue.component('v-nav', Nav);

export default {
  name: 'app'
}
</script>

<style lang="stylus">
  #app .content
  	  padding-top: 64px
</style>
