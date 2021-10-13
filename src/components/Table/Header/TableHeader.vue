<template>
  <div
    class="ph-flex rounded ph-p-6 ph-font-bold ph-text-white table-header ph-bg-brand2"
  >
    <div
      v-for="item in items"
      :key="item"
      class="ph-flex-grow"
    >
      {{ item }}
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "Header",
  components: {},
  props: {},
  data() {
    return {
      items: ["Bank / Account Name", "Balance / Credit Limit", "value"],
    };
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
