<template>
  <div class="ph-radio-item">
    <input
      :id="id"
      ref="radioItem"
      v-model="innerValue"
      type="radio"
      class="ph-radio-input"
      :name="name"
      @click="onClick(valueRadio)"
    />
    <label
      :for="id"
      class="ph-radio-label"
      :class="[
        radioChecked ? 'ph-radio-label-checked' : unselectedBackgroundColorwd,
        radioChecked && icon && 'ph-radio-bar-bottom-brand',
      ]"
    >
      <div class="" :class="icon && 'ph-radio-label-icon'">
        <p-icon v-if="icon" :name="icon" type="xl" class="" />
        {{ label }}
      </div>
    </label>

    <div
      v-if="!icon"
      class="ph-radio-circle-container"
      :class="radioChecked && 'ph-radio-circle-container-checked'"
    >
      <div
        class="ph-radio-circle"
        :class="[
          radioChecked && 'ph-radio-circle-checked',
          unselectedBackgroundColor,
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';

export default Vue.extend({
  name: 'InputRadio',
  components: {
    PIcon,
  },
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
      default: null,
    },
    id: {
      type: String as PropType<string>,
      default: '',
    },
    rows: {
      type: String as PropType<string>,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      innerValue: this.valueRadio,
    };
  },
  computed: {
    unselectedBackgroundColor() {
      return this.darkMode ? 'ph-bg-grey6' : 'ph-bg-white';
    },
    radioChecked() {
      return this.value === this.valueRadio;
    },
  },
  methods: {
    onClick(value) {
      (this as any).$emit('input', value);
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-radio-item {
  position: relative;
}
.ph-radio-label {
  display: flex;
  align-items: center;
  border-width: 1px;
  overflow: hidden;
  position: relative;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-left: 2.5rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  font-weight: 400;
  height: 100%;
  border-radius: 0.75rem;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  border-color: var(--radio-button-default-border-color);
  color: var(--radio-button-default-text-color);
}

.ph-radio-input {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  bottom: 50%;
  margin-top: -0.5rem;
  width: 0;
  height: 0;
  opacity: 0;
  background-color: var(--radio-button-focus-checked-background-color);
  &.focused {
    outline: none;
  }
}

.ph-radio-input:checked + .ph-radio-label {
  // ph-bg-brand-light2
  // ph-border-brand2
}

.ph-radio-label-checked {
  background: #6475f725;
  border-color: var(--radio-checked-icon-color);
}

.ph-radio-label-icon {
  display: flex;
  font-size: var(--radio-sm-label-typography-fontSize);
  line-height: var(--radio-sm-label-typography-lineHeight);
  font-weight: var(--radio-sm-label-typography-fontWeight);
  align-items: center;
  gap: 0.5rem;
  color: var(--radio-checked-icon-color);
  svg {
    color: var(--radio-checked-icon-color);
  }
}

.ph-radio-circle-container {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  bottom: 50%;
  margin-top: -0.5rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 300ms;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  border-width: 1px;
  border-color: var(--radio-button-default-border-color);
}
.ph-radio-circle-container-checked {
  background: var(--radio-checked-icon-color);
  border-color: var(--radio-checked-icon-color);
}
.ph-radio-circle {
  position: absolute;
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  margin-top: -0.25rem;
  margin-left: -0.25rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 300ms;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  --transform-scale-x: 1.5;
  --transform-scale-y: 1.5;
}
.ph-radio-circle-checked {
  --transform-scale-x: 0.75;
  --transform-scale-y: 0.75;
}

// .ph-radio-group input + label {
//   @apply ph-border-solid;
//   @apply ph-border-grey5;
//   @apply ph-text-grey1;
// }
// .ph-radio-group input:focus + label {
//   @apply ph-bg-brand-light2;
//   @apply ph-border-solid;
//   @apply ph-text-brand2;
//   @apply ph-border-brand2;
// }
.ph-radio-bar-bottom-brand:after {
  background-color: var(--radio-checked-icon-color);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
  content: '';
  height: 6px;
}
</style>
