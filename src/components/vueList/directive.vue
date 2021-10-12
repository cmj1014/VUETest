<template>
  <div class="dataIndex">
    自定义指令
    <div v-log> </div>
    <div v-color>
      333
    </div>
    <div v-color="'#666'">
      666
    </div>
    <div v-color="'red'">
      red
    </div>
  </div>
</template>

<script>
export default {
  name: "directiveIndex",
  data() {
    return {
       
    };
  },

  mounted() {
  },
  methods: {},
};
</script>
<style scoped></style>
