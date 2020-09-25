import Vue from 'vue'
import routers from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'
import Vuelazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import App from './App.vue'

// mock开关
const mock = false;
if(mock){
  require('./mock/api');
}
// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0) {
    return res.data ;
  } else if(res.status == 10) {
    if (path != '#/index'){
      window.location.href = '/#/login/';
    }
    return Promise.reject(res);
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
})

Vue.use(VueAxios,axios);
Vue.use(Vuelazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg',
  error:'/imgs/icon-no-data.png'
});
Vue.use(VueCookie);
Vue.config.productionTip = false; //生存环境提示

new Vue({
  store,
  router:routers,
  render: h => h(App),
}).$mount('#app');
