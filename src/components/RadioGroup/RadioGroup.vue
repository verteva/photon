<template>
  <p-input :errors="errors">
    <p-label>
      {{ label }}
      <slot v-if="!label" name="label" />
    </p-label>
    <div
      class="radio-wrapper ph-grid sm:ph-grid-flow-col ph-radio-group ph-gap-5"
      :style="numRows"
    >
      <PInputRadio
        v-for="item in items"
        :id="`${item.label}-${id}`"
        :key="`${item.label}-${id}`"
        v-model="innerValue"
        :value-radio="item.value"
        :label="item.label"
        :name="name"
        :rows="numRows"
        :dark-mode="darkMode"
        :icon="item.icon"
      ></PInputRadio>
    </div>
  </p-input>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import PInputRadio from '../InputRadio';
import PLabel from '../Label';
import PInput from '../Input';

export default Vue.extend({
  name: 'PRadioGroup',
  components: {
    PInputRadio,
    PInput,
    PLabel,
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
      default: 'groupName',
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
    rows: {
      type: Number as PropType<number>,
      default: 3,
    },
    darkMode: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    value: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: null,
    },
  },
  data() {
    return {
      id: uuidv4(),
    };
  },
  computed: {
    numRows(): string {
      return `grid-template-rows: repeat(${this.rows}, auto);`;
    },
    innerValue: {
      get() {
        return (this as any).value;
      },
      set(val) {
        (this as any).$emit('input', val);
      },
    },
  },
});
</script>
