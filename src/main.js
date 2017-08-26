import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import { routes } from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.component('basemap-status', Home)
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'green';
  }
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
