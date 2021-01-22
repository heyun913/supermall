// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视窗的宽度
      viewportHeight:667,//视窗的高度
      unitPrecision:5,//指定‘px’转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit:'vw',//指定转换的视窗单位，建议vw
      selectorBlackList:['ignore','tab-bar','tab-bar-items'],//指定不用转换的组件（可以直接在组件加类名--ignore）
      minPixelValue:1,//小于1px的元素不用转换
      mediaQuery:false, //允许在媒体查询中转换px
      exclude:[/TabBar/gi],
    }
  }
}
