<template>
  <p-input :errors="errors">
    <div class="ph-flex ph-radio-group ph-flex-wrap ph-gap-5">
      <PInputRadio
        v-for="item in items"
        :id="`${item.label}-${id}`"
        :key="`${item.label}-${id}`"
        v-model="value"
        :radio-value="item.value"
        :label="item.label"
        :name="name"
        :rows="numRows"
      ></PInputRadio>
    </div>
  </p-input>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { v4 as uuidv4 } from "uuid";
import PInputRadio from "../InputRadio";
import PInput from "../Input";
export default Vue.extend({
  name: "PRadioGroup",
  components: {
    PInputRadio,
    PInput,
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
    rows: {
      type: Number as PropType<number>,
      default: 2,
    },
  },
  data() {
    return {
      id: uuidv4(),
      value: null,
    };
  },
  computed: {
    numRows(): string {
      let widthItem = Object.keys(this.items).length;
      let oddNum =
        (this.rows % 2 === 1 && this.rows !== 1 && this.rows !== widthItem) ||
        (widthItem % 2 === 1 && this.rows !== 1 && this.rows !== widthItem)
          ? true
          : false;
      widthItem = oddNum
        ? (Object.keys(this.items).length + 1) / this.rows
        : Object.keys(this.items).length / this.rows;
      widthItem = 100 / widthItem;

      return `width: calc(${widthItem}% - 16px)`;
    },
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
});
</script>
