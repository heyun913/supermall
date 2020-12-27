import axios from 'axios';

export function request(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // axios的拦截器
  instance.interceptors.request.use(config =>{
    // console.log(config);
    //1.当config中的一些信息不符合服务器的要求

    //2.每次发送网络请求时，希望在界面显示一个图标

    // 3.某些网络请求（比如登录（token）），必须携带一些特殊的信息

    return config;
  },err=>{
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data
  },err =>{
    // console.log(err);
  })
  // 返回真正的网络请求
  //返回的是一个promise
  return instance(config);
};