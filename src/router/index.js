import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载模式
const Home= () =>import('views/home/Home')
const CateGory= () =>import('views/category/CateGory')
const Cart= () =>import('views/cart/Cart')
const ProFile= () =>import('views/profile/ProFile')
const Detail = () => import('views/detail/Detail')
Vue.use(VueRouter)


const routes = [
  {
    path:'',
    redirect:"/home"
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:CateGory
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:ProFile
  },
  {
    // 绑定参数
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router







// import Vue from 'vue'
// import Router from 'vue-router'


// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
