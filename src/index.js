import _ from 'lodash';
import Vue from 'vue';
import VueResource from 'vue-resource'
import axios from 'axios';
import VueRouter from 'vue-router';
import Routes from './routes';

import App from './components/App.vue'

// axios.defaults.transformResponse = [function (data) {
//   // Do whatever you want to transform the data
//   return JSON.parse(data).data || JSON.parse(data);
// }];

// Vue.prototype.$http = axios;


//filter
Vue.filter('to-uppercase',(value) => {
  return  value.toUpperCase()
});

Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + '...';
})

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});