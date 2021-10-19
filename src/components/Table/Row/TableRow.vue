<template>
  <!-- class="ph-grid ph-w-full ph-items-center photon-table-row ph-border-grey5 ph-border-b"
    :class="` tw-col-span-${rows} tw-grid-cols-${rows}`" -->
  <div
    :class="baseClassList"
    :style="gridColWidths"
  >
    <slot />
    <!-- <Col></Col>
    <Col></Col>
    <Col></Col> -->
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
  props: {
    rows: {
      type: Number,
      default: 0,
    },
    colWidths: {
      type: Array,
      default: (): [] => [],
    },
    darkMode: {
      type: Boolean,
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
        `ph-grid-cols-${(this as any).rows}`,
        `ph-col-span-${(this as any).rows}`,
        `tw-grid-cols-${(this as any).rows}`,
        `tw-col-span-${(this as any).rows}`,
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
      // return this.colWidths.length ? `grid-template-columns: 42fr 33fr 25fr`
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
