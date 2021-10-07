<template>
  <div :errors="errors">
    <div class="ph-grid ph-grid-cols-12 ph-gap-5 ph-radio-group">
      <div
        v-for="item in items"
        :key="`${item.label}-${id}`"
        class="ph-relative ph-col-span-12 sm:ph-col-span-6"
      >
        <PInputRadio
          :id="`${item.label}-${id}`"
          v-model="value"
          :radio-value="item.value"
          :label="item.label"
          :name="name"
        ></PInputRadio>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { v4 as uuidv4 } from "uuid";
import PInputRadio from "../InputRadio";

export default Vue.extend({
  name: "PRadioGroup",
  components: {
    PInputRadio,
  },
  props: {
    errors: {
      type: Array,
      default: (): [] => [],
    },
    items: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    name: {
      type: String as PropType<string>,
      default: "groupName",
    },
  },
  data() {
    return {
      id: uuidv4(),
      value: null,
    };
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
});
</script>
