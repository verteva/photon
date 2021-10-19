<template>
  <div class="ph-flex ph-w-full ph-p-5 ph-items-center">
    <slot />
    <!-- <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col> -->
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
// import Col from "../Col";
export default Vue.extend({
  name: "TableRow",
  components: {
    // Col,
  },
  props: {},
  computed: {},
  watch: {},
  methods: {},
});
</script>

<style lang="postcss" scoped>
.table-col:first-child {
  justify-content: flex-start !important;
}
/* .table-col:not(:first-child) {
  background: red;
} */
</style>
