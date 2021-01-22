import {
  ADD_COUNTER,
  ADD_TO_CART
}from './mutations-types'

export default {
  //mutations唯一目标是修改state中的状态
  //里面的每个方法尽可能完成的时间比较单一

  //1. 添加同样的商品时，商品数量加一
  [ADD_COUNTER](state,payload){
    payload.count++;
  },

  //2. 添加不同的商品时，数组中的商品加一
  [ADD_TO_CART](state,payload){
    payload.checked = true;
    state.cartList.push(payload);
  }
}