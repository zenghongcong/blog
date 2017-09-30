<template>
  <div id="app">
  	<v-nav></v-nav>
  	<div class="content clear">
  		<router-view></router-view>
  		<v-sidebar></v-sidebar>
  	</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'

Vue.component('v-nav', Nav);
Vue.component('v-sidebar', Sidebar);

export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
  .content
    width: 1160px
    padding-top: 64px
    margin: 0 auto
</style>
