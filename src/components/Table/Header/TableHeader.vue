<template>
  <!-- class="ph-grid table-wrapper ph-font-bold ph-text-white table-header ph-bg-brand2"
    :class="rounded && 'rounded-photon'" -->
  <div :class="baseClassList">
    <div
      v-for="title in titles"
      :key="title"
      class="ph-w-full ph-p-5"
      :class="border && 'heading-title'"
    >
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "Header",
  components: {},
  props: {
    titles: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      baseClassList: [
        "ph-grid",
        "table-wrapper",
        "ph-font-bold",
        "ph-text-white",
        "table-header",
        "ph-bg-brand2",
        (this as any).rounded && "rounded-photon",
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
});
</script>

<style lang="postcss" scoped>
.rounded-photon {
  border-radius: 16px 50px 0 0;
}
.heading-title:not(:first-child) {
  border-left: 1px solid;
  border-color: rgba(255, 255, 255, 0.5);
}
</style>
