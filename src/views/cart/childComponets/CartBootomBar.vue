<template>
  <div class="bootomBar">
    <div class="left" @click='checked'>
      <img src="~assets/img/gou.png" alt="" :class="{active:checkedAll}">
      <span>全选</span>
    </div>
    <div class="center">合计:<span>{{totlePrice}}</span></div>
    <div class="right" @click='calculate'>去计算({{getCartLength}})</div>
  </div>
</template>

<script>
  export default {
    name: "CartBootomBar",
    computed: {
      // 1. 计算勾选商品的总价格
      totlePrice() {
        return '￥' + this.cartList.filter(item => {
          return item.checked;
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2);
      },
      // 2. 计算购买商品的总数
      getCartLength() {
        return this.$store.getters.getCartLength;
      },
      // 3. 检测是否全部选中
      checkedAll() {
        if (this.cartList.length === 0) {
          //当购物车为空时默认不选中
          return false;
        }
        this.isChecked = true;
        for (let item of this.cartList) {
          // 检测是否购物车有未勾选的商品
          if (!item.checked) {
            this.isChecked = false;
            break;
          }
        }
        return this.isChecked;
      }
    },
    data() {
      return {
        isChecked: false,//全选按钮是够选中
        cartList: this.$store.state.cartList,//购物车数组
      }
    },
    methods: {
      checked() {
        // 1. 自身改变勾选状态
        this.isChecked = !this.isChecked;
        // console.log('sss');

        // 2. 改变购物车商品的勾选状态
        for (let item of this.cartList) {
          item.checked = this.isChecked
        }
      },
      calculate() {
        if (!this.isChecked) {
          this.$toast.show("您没有选择任何商品！！！")
        }
      }
    },
  }
</script>

<style scoped>
  .bootomBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #eee;
    padding: 0 5px;
  }

  .bootomBar .left {
    padding: 0 2px;
    height: inherit;
    line-height: 40px;
  }

  .bootomBar .left img {
    width: 20px;
    height: 20px;
    border: 1px solid sienna;
    border-radius: 999px;
    vertical-align: middle;
  }



  .bootomBar .center span {
    color: orangered;
  }

  .bootomBar .right {
    height: 40px;
    width: 120px;
    background-color: orange;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }

  .active {
    background-color: hotpink;
  }
</style>