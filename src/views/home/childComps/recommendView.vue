<template>
  <div id="hy-recommend">
    <!-- //从其它vue文件传入参数时，两边的变量名要保持一致 -->
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="text">{{item.title}}</div>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: "recommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #hy-recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    border-bottom: 8px solid #eee;
    padding: 10px 0 25px;
  }

  #hy-recommend .recommend-item {
    flex: 1;
  }

  #hy-recommend img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>