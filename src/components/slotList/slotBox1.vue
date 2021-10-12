<template>
  <div class="dataIndex">
    下面是插槽
    <div>
      <slot name="a"></slot>
      Slot
      <slot name="b"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "transitionSlot",
  data() {
    return {};
  },

  mounted() {},
  methods: {},
};
</script>
<style scoped></style>
