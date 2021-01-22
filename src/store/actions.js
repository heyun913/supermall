import {
  ADD_COUNTER,
  ADD_TO_CART
}from './mutations-types'

export default {
  addCart(context,payload){
    //actions返回的是一个promise类型
    return new Promise((reslove,reject)=>{
      // 1. 需要判断加入的商品是否已经在购物车中
    let oldValue = null;
    for(let item of context.state.cartList){
      if(item.iid === payload.iid){
        oldValue = item;
      }
    }
    if(oldValue){
      // oldValue.count += 1;
      context.commit(ADD_COUNTER,oldValue);
      reslove('商品数量加一！！！')
    }else{
      payload.count = 1;
      // context.state.cartList.push(payload);
      context.commit(ADD_TO_CART,payload);
      reslove('添加商品成功！！！')
    }
    })
  }
}