import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 1.安装插件
Vue.use(vuex)

const state = {
  // 1.存放商品的数组
  cartList:[]
}

// 2.创建Store对象
const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 3. 挂载
export default store