<template>
  <div :class="baseClassList">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  name: "TableCol",
  props: {
    leftAlign: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      baseClassList: [
        "table-col",
        "ph-flex",
        "ph-w-full",
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
