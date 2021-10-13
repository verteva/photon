<template>
  <div>
    <PHeader :titles="titles" />
    <div class="row ph-p-5 ph-bg-white ph-items-center">
      <div class="ph-inline-flex">
        <div class="ph-mr-4">
          <img
            src="https://bankstatements.com.au/images/institutions/bank_of_statements.png"
          />
        </div>
        <div class="ph-pl-4 ph-border-l">
          <div class="ph-font-bold">
            Transaction Account
          </div>
          <div class="ph-block">
            *6789 Mary Jones
          </div>
        </div>
      </div>
      <div class="ph-col-span-1">
        row1- bank value2
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import PHeader from "../Header";
export default Vue.extend({
  name: "Table",
  components: { PHeader },
  props: {
    titles: {
      type: Array,
      default: (): [] => [],
    },
  },
  data() {
    return {
      // titles: ["Bank / Account Name", "Balance / Credit Limit"],
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
