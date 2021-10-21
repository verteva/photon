<template>
  <div
    :class="[baseClassList, headerClassList]"
    :style="gridColWidths"
  >
    <PHeader
      :titles="titles"
      :class="headerClassList"
      :style="gridColWidths"
      :rounded="rounded"
      :border="border"
    >
    </PHeader>
    <PTableRow
      :col-widths="colWidths"
      :class="headerClassList"
      :grid-col-num="gridColNum"
      :style="gridColWidths"
    >
      <template v-slot:TableRow="colWidths">
        <slot
          name="TableRow"
          :colWidths="colWidths"
        ></slot>
      </template>
    </PTableRow>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import PHeader from "../Header";
import PTableRow from "../Row";
export default Vue.extend({
  name: "Table",
  components: {
    PHeader,
    PTableRow,
  },
  props: {
    titles: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
    cols: {
      type: Number as PropType<number>,
      default: 0,
    },
    colWidths: {
      type: Array,
      default: (): [] => [],
    },
    rounded: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    border: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    darkMode: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  data() {
    return {
      numCols: (this as any).gridColNum,
      baseClassList: [
        "ph-grid",
        "table-wrapper",
        "ph-w-full",
        "ph-border-grey5",
        "ph-border",
        "ph-rounded-lg",
        (this as any).darkMode ? "ph-bg-grey6" : "ph-bg-white",
        (this as any).rounded && "rounded-photon",
      ],
      headerClassList: [
        `ph-col-span-${(this as any).cols}`,
        `tw-col-span-${(this as any).cols}`,
        `ph-grid-cols-${(this as any).cols}`,
        `tw-grid-cols-${(this as any).cols}`,
      ],
    };
  },
  computed: {
    gridColNum(): any {
      if ((this as any).colWidths.length > 0) {
        return (this as any).colWidths.length;
      } else {
        return (this as any).cols;
      }
    },
    gridColWidths(): any {
      if ((this as any).colWidths.length > 0) {
        const widths = (this as any).colWidths.map((item) => `${item}fr`);
        return `grid-template-columns: ${widths.join(" ")} !important`;
      }
      return "";
    },
  },
  mounted() {
    console.log((this as any).$slots.default);
  },
});
</script>

<style lang="postcss" scoped>
.rounded-photon {
  border-radius: 16px 50px 16px 16px !important;
}
</style>
