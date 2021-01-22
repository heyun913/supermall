<template>
  <div>
    <div class="tiltle">
      <span>评论</span>
      <span>更多</span>
    </div>
    <div class="comment">
      <div class="user">
        <img :src="rate.user.avatar" alt="">
        <span>{{rate.user.uname}}</span>
      </div>
      <div class="text">
        <span>{{rate.content}}</span>
        <span>{{rate.created | showDate}}{{" "+rate.style}}</span>
      </div>
      <div class="pic">
        <div v-for="(item, index) in rate.images" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from 'common/util'
  export default {
    name: "DetailRate",
    props: {
      rate: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        const date = new Date(value * 1000);

        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .tiltle {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    text-align: center;
    margin: 0 5px;
    /* padding: 10px 0px; */
    padding: 20px 0 10px;
    border-bottom: 1px solid rgba(219, 222, 243, 2.2);
  }

  .comment {
    padding: 10px 5px;
    box-shadow: 0 2px 4px 1px rgba(22, 22, 22, .2);
  }

  .comment .user img {
    height: 50px;
    width: 50px;
    border-radius: 999px;
    vertical-align: middle;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 5px;
    padding: 10px 0px;
  }

  .text span:last-child {
    margin-top: 10px;
  }

  .pic {
    display: flex;
    margin: 0 5px;
    padding: 10px 0px;
  }

  .pic img {
    flex: 1;
    height: 100px;
    width: 100px;
  }

  .pic img:last-child {
    margin: 0 5px;
  }
</style>