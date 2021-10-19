<template>
  <!-- class="ph-grid table-wrapper ph-w-full ph-border-grey5 ph-border ph-rounded-b-2xl"
    :class="[rounded && 'rounded-photon', !darkMode && 'ph-bg-white']" -->

  <div :class="baseClassList">
    <!-- :class="`ph-col-span-${rows} tw-col-span-${rows}`" -->
    <PHeader
      :titles="titles"
      :class="headerClassList"
      :style="gridColWidths"
      :rounded="rounded"
      :border="border"
    >
    </PHeader>
    <!-- <div class="row ph-bg-white ph-items-center"> -->
    <slot />

    <!-- <Row
      :rows="rows"
      :col-widths="colWidths"
    ></Row>
    <Row
      :rows="rows"
      :col-widths="colWidths"
    ></Row>
    <Row
      :rows="rows"
      :col-widths="colWidths"
    ></Row> -->
    <!-- <Row class="tw-col-span-3"></Row>
    <Row class="tw-col-span-3"></Row>
   </div> -->
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
    // Row,
  },
  props: {
    titles: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
    rows: {
      type: Number as PropType<number>,
      default: 0,
    },
    colWidths: {
      type: Array,
      default: (): [] => [],
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
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
        "ph-rounded-b-2xl",
        (this as any).darkMode ? "ph-bg-grey6" : "ph-bg-white",
        (this as any).rounded && "rounded-top-right",
      ],
      headerClassList: [
        `ph-col-span-${(this as any).rows}`,
        `tw-col-span-${(this as any).rows}`,
        `ph-grid-cols-${(this as any).rows}`,
        `tw-grid-cols-${(this as any).rows}`,
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
  border-radius: 16px 50px 0 16px;
}
.rounded-top-right {
  border-top-right-radius: 50px;
}
</style>
