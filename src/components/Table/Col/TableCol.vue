<template>
  <div :class="baseClassList">
    <div class="tw-self-center">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  name: "TableCol",
  props: {
    colWidths: {
      type: Array,
      default: (): [] => [],
    },
  },
  data() {
    return {
      baseClassList: [
        "table-col",
        "ph-flex",
        "ph-w-full",
        "ph-h-full",
        "ph-justify-end",
        "ph-p-5",
      ],
    };
  },
  watch: {},
  methods: {},
});
</script>

<style lang="postcss" scoped>
.rounded {
  border-radius: 16px 50px 0 0;
}
</style>
