<template>
  <div :class="baseClassList">
    <slot name="default"></slot>
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
    gridColNum: {
      type: Number as PropType<number>,
      default: 0,
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
  mounted() {
    const cols = (this as any).gridColNum;

    const options = (this as any).$slots.default.filter((node) => node.tag);
    options.forEach((element, index) => {
      index % cols === 0 &&
        element.componentInstance.$el.classList.add("table-col-shift");
    });

    const lastRow = options.slice(-cols);
    lastRow.forEach((element) => {
      element.componentInstance.$el.classList.remove("ph-border-b");
    });
  },
});
</script>

<style lang="postcss" scoped>
.table-col-shift {
  justify-content: flex-start !important;
}
.photon-table-row:last-child {
  border: none !important;
}
</style>
