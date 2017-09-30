import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList'
import Article from '@/components/Article'
import Archives from '@/components/Archives'
import Categories from '@/components/Categories'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  linkActiveClass: 'active'
})
