import {debounce} from 'common/util'
// 1.home和detail的图片加载完成监听
export const itemImgListenerMixIn = {
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
     // 1.监听图片
     const refresh = debounce(this.$refs.scroll.refresh, 100);

     this.itemImgListener = () => {
       refresh();
     }
     // 3. 监听图片加载完成（系统总线）
     this.$bus.$on('itemImgLoad', this.itemImgListener)

    //  console.log('我是混入');
  },
}