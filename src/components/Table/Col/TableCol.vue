<template>
  <div class="table-col ph-flex ph-w-full ph-justify-end ph-px-5">
    <slot />
    <!-- <div>hello $ Westpac</div>
    <div>Tuesday</div> -->
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  name: "TableCol",
  props: {},
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
