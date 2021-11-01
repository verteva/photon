<template>
  <div class="ph-relative radio-item" :style="rows">
    <input
      :id="id"
      v-model="innerValue"
      type="radio"
      class="focus:ph-outline-none ph-opacity-0 ph-w-0 ph-h-0 ph-absolute ph-left-3 ph-inset-y-1/2 ph--mt-2"
      :name="name"
      @change="$emit('input', valueRadio)"
    />
    <label
      :for="id"
      class="ph-border-brand2"
      :class="[
        ...radioClassList,
        value === valueRadio
          ? 'ph-bg-brand-light2 ph-border-brand2'
          : [unselectedBackgroundColor, 'ph-border-grey4'],
      ]"
    >
      {{ label }}
    </label>
    <div
      class="ph-pointer-events-none ph-w-4 ph-h-4 ph-absolute ph-left-3 ph-inset-y-1/2 ph--mt-2 ph-rounded-full ph-border ph-transition ph-duration-300"
      :class="
        value === valueRadio
          ? 'ph-bg-brand2 ph-border-brand2'
          : 'ph-border-grey4'
      "
    >
      <div
        class="ph-w-2 ph-h-2 ph-absolute ph-inset-1/2 ph--mt-1 ph--ml-1 ph-rounded-full ph-transition ph-duration-300 ph-transform"
        :class="[
          value === valueRadio ? 'ph-opacity-1 ph-scale-75' : 'ph-scale-150',
          darkMode ? 'ph-bg-grey6' : 'ph-bg-white',
        ]"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
export default Vue.extend({
  name: 'InputRadio',
  props: {
    errors: {
      type: Array,
      default: (): [] => [],
    },
    name: {
      type: String as PropType<string>,
      default: '',
    },
    mode: {
      type: String as PropType<string>,
      default: 'lazy',
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
    value: {
      type: [String, Number, Boolean] as PropType<string | number | boolean>,
      default: null,
    },
    darkMode: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    valueRadio: {
      type: [String, Number, Boolean] as PropType<string | number | boolean>,
      default: '',
    },
    id: {
      type: String as PropType<string>,
      default: '',
    },
    rows: {
      type: String as PropType<string>,
      default: '',
    },
  },
  data() {
    return {
      innerValue: this.valueRadio || null,
      radioClassList: [
        'ph-flex',
        'ph-rounded-xl ph-h-full ph-py-2 ph-px-5',
        'ph-font-normal',
        'ph-border',
        'focus:ph-outline-none',
        'focus:ph-text-brand2',
        'focus:ph-border-brand2',
        'ph-border-solid',
        'ph-transition',
        'ph-cursor-pointer',
        'ph-pl-10',
      ],
    };
  },

  computed: {
    unselectedBackgroundColor() {
      return this.darkMode ? 'ph-bg-grey6' : 'ph-bg-white';
    },
  },
});
</script>

<style lang="postcss">
.ph-radio-group input + label {
  @apply ph-border-solid;
  @apply ph-border-grey5;
  @apply ph-text-grey1;
}
.ph-radio-group input:focus + label {
  @apply ph-bg-brand-light2;
  @apply ph-border-solid;
  @apply ph-text-brand2;
  @apply ph-border-brand2;
}
</style>
