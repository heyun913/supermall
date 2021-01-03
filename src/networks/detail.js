import {request} from './request'

//1. 请求数据
export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

// 封装一个包含多个数据的对象

export class Goods{
  constructor(itemInfo,colums,services){
    this.title = itemInfo.title,
    this.desc = itemInfo.desc,
    this.newPrice = itemInfo.price,
    this.oldPrice = itemInfo.oldPrice,
    this.discount = itemInfo.discountDesc,
    this.colums = colums,
    this.services = services,
    this.realPrice = itemInfo.lowNowPrice
  }
}