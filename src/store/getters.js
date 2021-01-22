export default {
  getCartLength(state){
    let count = 0;
    for(let item of state.cartList){
      count+=item.count;
    }
    return count;
  },
  getCartList(state){
    return state.cartList;
  }
}