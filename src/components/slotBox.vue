<template>
  <div class="dataIndex">
    <div>测试vue插槽功能</div>
    <div>
      <SlotBox1>
        <template v-slot:a>
          <div>插槽a</div>
        </template>
        <template #b>
          <div>插槽b</div>
        </template>
      </SlotBox1>
      <br />
      <pre>
        <div class="dataIndex">
    下面是插槽
    <div>
      <slot name="a"></slot>
      child
      <slot name="b"></slot>
    </div>
  </div>
      </pre>
    </div>
  </div>
</template>

<script>
import SlotBox1 from "./slotList/slotBox1.vue";
export default {
  name: "slotBox",
  components: { SlotBox1 },
  data() {
    return {};
  },

  mounted() {},
  methods: {},
};
</script>
<style scoped></style>
