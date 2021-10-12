import zhLocale from 'element-ui/lib/locale/lang/zh-CN' //引入element语言包
let str = {
  "oo1": "中文内容"
}
let cn = {
  message: {
    'text': '好好学习，天天向上',
    ... str
  },
  ...zhLocale
}
console.log("cn", cn)
// cn.message.assign(str)
export default cn;