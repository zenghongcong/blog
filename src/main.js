// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.filter('date', value => {
	let time = new Date(value),
		y = time.getFullYear(),
		m = time.getMonth() + 1,
		d = time.getDate(),
		h = time.getHours(),
		mm = time.getMinutes(),
		s = time.getSeconds();
		
	return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');

router.push('article');
