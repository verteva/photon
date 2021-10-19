<template>
  <div>
    <PHeader :titles="titles" />
    <div class="row ph-bg-white ph-items-center">
      <slot />
      <!-- <Row></Row>
      <Row></Row>
      <Row></Row> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import PHeader from "../Header";
// import Row from "../Row";
// import PTableCol from "../Col";
// import PTableRow from "../Row";
export default Vue.extend({
  name: "Table",
  components: {
    PHeader,
    // Row
  },
  props: {
    titles: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
  },
  computed: {},
  watch: {},
  methods: {},
});
</script>

<style lang="postcss" scoped>
.rounded {
  border-radius: 16px 50px 0 0;
}
</style>
