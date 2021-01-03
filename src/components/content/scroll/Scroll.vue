<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      // 1. scroll的初始创建
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      // 2. 监听滚动位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position);
      })
      // 3. 监听下拉加载更多
      this.scroll.on('pullingUp', () => {
        // console.log("上拉加载更多！！！");

        this.$emit('pullingUp')
      })
    },

    methods: {
      // 外部调用的方法

      // 1. 滚向某个位置
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      },
      // 2. 反复下拉加载更多
      finished() {
        this.scroll.finishPullUp();
      },

      // 3. 刷新，当图片加载完后更新高度
      refresh() {
        // console.log("---");//测试打印了几次
        this.scroll.refresh();
      },
    },
  }
</script>

<style scoped>

</style>