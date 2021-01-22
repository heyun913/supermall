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
    redirect:"/home",
    meta:{
      show:true
    }
  },
  {
    path:'/home',
    component:Home,
    meta:{
      show:true
    }
  },
  {
    path:'/category',
    component:CateGory,
    meta:{
      show:true
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      show:true
    }
  },
  {
    path:'/profile',
    component:ProFile,
    meta:{
      show:true
    }
  },
  {
    // 绑定参数
    path:'/detail/:iid',
    component:Detail,
    meta:{
      show:false
    }
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
