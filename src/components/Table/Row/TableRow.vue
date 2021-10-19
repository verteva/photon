<template>
  <div
    :class="baseClassList"
    :style="gridColWidths"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  name: "TableRow",
  components: {},
  props: {
    cols: {
      type: Number as PropType<number>,
      default: 0,
    },
    colWidths: {
      type: Array,
      default: (): [] => [],
    },
    darkMode: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  data() {
    return {
      baseClassList: [
        "ph-grid",
        "ph-w-full",
        "ph-items-center",
        "photon-table-row",
        "ph-border-grey5",
        "ph-border-b",
        `ph-grid-cols-${(this as any).cols}`,
        `ph-col-span-${(this as any).cols}`,
        `tw-grid-cols-${(this as any).cols}`,
        `tw-col-span-${(this as any).cols}`,
      ],
    };
  },
  computed: {
    gridColWidths(): any {
      if ((this as any).colWidths.length > 0) {
        const widths = (this as any).colWidths.map((item) => `${item}fr`);
        return `grid-template-columns: ${widths.join(" ")} !important`;
      }
      return "";
    },
  },
  watch: {},
  methods: {},
});
</script>

<style lang="postcss" scoped>
.table-col:first-child {
  justify-content: flex-start !important;
}
.photon-table-row:last-child {
  border: none !important;
}
</style>
