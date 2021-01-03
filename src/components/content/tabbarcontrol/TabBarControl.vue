<template>
  <div id="TabBarControl">
    <div v-for="(item, index) in titles" :key="index" class="TabBarControl" :class="{active: index === curentIndex}"
      @click='btnClick(index)'>
      <span>{{item}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarControl",
    data() {
      return {
        curentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        defalut() {
          return []
        }
      }
    },
    methods: {
      btnClick(index) {
        this.curentIndex = index;
        // console.log(index);
        // 传出数据的方法
        this.$emit('tabClick', index);
      }
    },
  }
</script>

<style scoped>
  #TabBarControl {
    display: flex;
    justify-content: space-around;
    flex-shrink: 0;
    /* align-items: center; */
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #ffffff;
  }

  #TabBarControl .TabBarControl span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-tint);
  }
</style>