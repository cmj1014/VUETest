import enLocale from 'element-ui/lib/locale/lang/en' //引入element语言包
let str = {
  "oo1": "英文内容"
}
let en = {
  message: {
    'text': 'Good good study, Day day up', ...str
  },
  ...enLocale, 
}

export default en;