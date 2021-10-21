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
    leftAlign: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
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
        "ph-border-grey5",
        "ph-border-b",
        "ph-h-full",
        !(this as any).leftAlign && "ph-justify-end",
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
