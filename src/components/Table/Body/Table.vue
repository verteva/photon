<template>
  <div :class="baseClassList">
    <PHeader
      :titles="titles"
      :class="headerClassList"
      :style="gridColWidths"
      :rounded="rounded"
      :border="border"
    >
    </PHeader>
    <slot />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import PHeader from "../Header";
export default Vue.extend({
  name: "Table",
  components: {
    PHeader,
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
.rounded-photon {
  border-radius: 16px 50px 16px 16px !important;
}
</style>
