import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
  // console.log('我被引用了！！！',Vue);
  // 1. 创建组件的构造器
  const toastConstructor = Vue.extend(Toast);

  // 2. new一个组件对象
  const toast = new toastConstructor();

  // 3. 将组件对象手动挂载到一个元素上
  toast.$mount(document.createElement('div'));

  // 4. toast.$el 对应的就是div
  document.body.appendChild(toast.$el);

  // 5. 加入vue原型
  Vue.prototype.$toast = toast;
}

export default obj