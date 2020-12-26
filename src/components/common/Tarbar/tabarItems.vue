<template>

  <div class="tar-bar-items" @click='itemsClick'>
    <!-- 定义两个插槽，一个用来装图标，一个装文字说明，这样就可以动态添加或删除 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-txt"></slot>
    </div>

  </div>

</template>

<script>
  export default {
    name: "tabarItems",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? { color: this.activeColor } : {};
      }
    },
    methods: {
      itemsClick() {
        // console.log("items_click");
        //防止一直点击时报错
        if (this.$route.path != this.path) {
          this.$router.push(this.path);
        }

      }
    },
  }
</script>

<style scoped>
  .tar-bar-items {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tar-bar-items img {
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin: 2px 0;
  }


  .active {
    color: #de4632;
  }
</style>