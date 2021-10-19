<template>
  <div
    class="ph-flex rounded ph-font-bold ph-text-white table-header ph-bg-brand2"
  >
    <div
      v-for="title in titles"
      :key="title"
      class="ph-w-full ph-p-5"
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
  },
  computed: {},
  watch: {},
  methods: {},
});
</script>

<style lang="postcss" scoped>
.rounded {
  border-radius: 16px 50px 0 0;
}
</style>
