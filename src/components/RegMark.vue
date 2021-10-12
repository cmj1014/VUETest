<template>
  <div class>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="mark" label="匹配符" width="180"></el-table-column>
      <el-table-column prop="name" label="描述"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "RegMark",
  data() {
    return {
      tableData: [
        {
          mark: ".",
          name:
            "代表匹配任意字符，换行除外。要包括换行内的任何字符，请使用像“(.|\n)”的模式。 例：str：book  reg：b..k",
          mark: "?",
          name:
            "匹配前面的子表达式零次或一次 。 例：str：book  reg：bo?k  o零次或一次",
          mark: "*",
          name:
            "匹配前面的子表达式零次或多次 。 例：str：book  reg：bo*k  o零次或多次",
          mark: "+",
          name:
            "匹配前面的子表达式零次或多次 。 例：str：book  reg：bo+k  o1次或多次",
          mark: "{m,n}",
          name:
            "至少出现m次，最多出现n次 。 例：str：booook  reg：bo{2,4}k  o至少2次最多4次",
          mark: "{m,}",
          name: "至少出现m次，。 例：str：book  reg：bo{2,}k  o至少2次最多4次",
          mark: "{m}",
          name: "正好出现m次，。 例：str：book  reg：bo{2}k  o正好2次",
          mark: "[^]",
          name: "限定不能出现内容，。 例：str：1ook  reg：/[^a-zA-Z]ook/  第一位不能是字母",
          mark: "\d",
          name: "匹配包括下划线的任何单词字符。等价于“[A-Za-z0-9_]。 例：str：1ook  reg：/\w/  ",
          mark: "\D",
          name: "	匹配任何非单词字符。等价于“[^A-Za-z0-9_]。 例：str：--  reg：/\W/  ",
          mark: "^",
          name: "	匹配开头。。 例：str：book_123  reg：/^book/  ",
          mark: "$",
          name: "	匹配结尾。。 例：str：123_book  reg：/book$/  ",
          mark: "^内容$",
          name: "	匹配内容开头到结尾。。 例：str：book  reg：/^book$/  ",
          mark: "\s",
          name: "	匹配空格。。 例：str：bo ok  reg：/bo\sok/  ",
           mark: "|",
          name: "	匹配或者。 例：str：book_html  reg：/jave|html|css/   匹配java或者html或者css",
          mark: "()",
          name: "	分组功能。 例：str：jsjsjs  reg：/(js){2,3}/   匹配js这一组词至少出现2到3次",
          mark: "(.*)\s(.*)",
          name: "	分组综合案例。 例：str：hello word  reg：/(.*)\s(.*)/   匹配任意多个字符+空+任意多个字符",
          mark: "替换匹配内容案例",
          name: "	例：str：hello word  reg：/(.*)\s(.*)/  str.replace(reg,'$2 $1')  $1,$2代表匹配第一个和第二个结果，输出结果是 word hello",
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped></style>
