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

//5. 请求详情页面的推荐更多数据
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

//2. 封装一个包含多个数据的对象--商品信息
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

// 3. 封装店铺信息

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
    this.shopUrl = shopInfo.shopUrl
  }
}

// 4. 封装商品尺码数据

export class GoodsInfo{
  constructor(info,rule){
    this.set = info.set;
    this.tables = rule.tables;
  }
}


