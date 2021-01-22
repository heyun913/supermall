<template>
  <div>
    <nav-bar>
      <!-- 插槽左 后退图片 -->
      <div slot="left" class="back" @click='backClick'>
        <div>
          <img src="~assets/img/houtui.png" alt="">
        </div>
      </div>
      <!-- 插槽中 标题 -->
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="index" :class='{active: index === currentIndex}'
          @click='itemClick(index)'>
          {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    data() {
      return {
        // 标题数组
        titles: ['商品', '参数', '评论', '推荐'],
        // 记录点击并且高亮文字
        currentIndex: 0
      }
    },
    components: {
      NavBar,
    },
    methods: {
      // 标题点击高亮操作
      itemClick(index) {
        this.currentIndex = index

        //传出到detail
        this.$emit('itemClick', index);
      },
      // 回到上一级
      backClick() {
        this.$router.back()
      }
    },

  }
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: space-around;
  }

  .active {
    color: var(--color-high-text);
  }

  .back img {
    width: 30px;
    height: 30px;
    margin-top: 6px;
  }
</style>