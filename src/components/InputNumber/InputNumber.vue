<template>
  <p-input :errors="errors">
    <p-label>
      {{ label }}
      <slot v-if="!label" name="label" />
    </p-label>
    <div class="ph-flex">
      <div
        ref="decrease"
        class="ph-text-4xl ph-cursor-pointer ph-mr-4"
        :class="innerValue === minVal ? 'ph-text-grey4' : 'ph-text-grey7'"
        @click="changeNumber('minus')"
      >
        -
      </div>
      <input
        v-model="innerValue"
        type="number"
        class="ph-antialiased ph-w-full ph-font-bold ph-text-grey1 ph-rounded-lg ph-py-2 ph-px-5 ph-border ph-border-grey5 focus:ph-border-brand2 focus:ph-outline-none ph-border-solid ph-transition ph-bg-white"
        @change="onChange"
      />
      <div
        ref="increase"
        class="ph-text-4xl ph-cursor-pointer ph-ml-4"
        :class="innerValue === maxVal ? 'ph-text-grey4' : 'ph-text-grey7'"
        @click="changeNumber('add')"
      >
        +
      </div>
    </div>
  </p-input>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import PInput from '../Input';
import PLabel from '../Label';
export default Vue.extend({
  name: 'InputNumber',
  components: { PInput, PLabel },
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Number as PropType<number>,
      default: 0,
    },
    minVal: {
      type: Number as PropType<number>,
      default: 0,
    },
    maxVal: {
      type: Number as PropType<number>,
      default: 999999999,
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
  },
  data() {
    return {
      numberVal: (this as any).value,
    };
  },
  computed: {
    innerValue: {
      get() {
        return (this as any).value;
      },
      set(val) {
        (this as any).$emit('input', val);
      },
    },
  },

  methods: {
    onChange(event) {
      (this as any).$emit('change', event);
    },
    changeNumber(change) {
      if (change === 'add') {
        (this as any).innerValue < (this as any).maxVal &&
          (this as any).innerValue++;
      } else {
        (this as any).innerValue > (this as any).minVal &&
          (this as any).innerValue--;
      }
    },
  },
});
</script>
