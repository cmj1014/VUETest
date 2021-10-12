<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="d1">
      <div class="d2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.d1 {
  width: 300px;
  height: 300px;
  background: red;
  /* position: relative; */
  display: flex;
}
.d2 {
   /* position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0; */
            width: 200px;
            height: 200px;
            background-color: wheat;
            margin: auto;

}
</style>
