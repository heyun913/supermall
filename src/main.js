import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
//提示框
import toast from './components/common/toast/index'
//解决手机300ms的插件
import FastClick from 'fastclick'
//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false;

Vue.use(toast);//use 会去相应的被引用参数的文件中执行 obj.install 函数，并传入参数（vue）

Vue.prototype.$bus = new Vue();

Vue.use(VueLazyLoad,{
  loading: require('assets/img/loading.jpg')
});

FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
