// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)
Vue.prototype.$http = Axios
Vue.prototype.toHtml = function(value){
	let temp = document.createElement("div");
	temp.innerHTML = value;
	let output = temp.innerText || temp.textContent;
	temp = null;
	return output;
}
Vue.config.productionTip = false
Vue.filter('date', (value, formatter) => {
	let time = new Date(value),
		y = time.getFullYear(),
		m = time.getMonth() + 1,
		d = time.getDate(),
		h = time.getHours(),
		mm = time.getMinutes(),
		s = time.getSeconds();
		
	return formatter === 'y-m-d' ? y + '-' + m + '-' + d : y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');

if(router.history.current.path === '/'){
	router.push('article');
}
