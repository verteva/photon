<template>
  <div :class="componentClassList">
    <VuePhoneNumberInput
      ref="input"
      v-model="innerValue"
      :style="{
        '--countriesHeight': onlyCountries.length * 30,
        '--countriesMaxHeight': onlyCountries,
        '--borderRadius': borderRadius + 'px',
      }"
      :border-radius="borderRadius"
      default-country-code="AU"
      :only-countries="onlyCountries"
      :translations="translations"
      no-example
      show-code-on-list
      v-bind="$attrs"
      :disabled="disabled"
      v-on="$listeners"
      @phone-number-focused="onFocus"
      @phone-number-blur="onBlur"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { InputPhoneData, InputValueType } from './types';
import VuePhoneNumberInput from 'vue-phone-number-input';

export default Vue.extend({
  name: 'PInputPhone',

  components: {
    VuePhoneNumberInput,
  },

  props: {
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    darkMode: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    placeholder: {
      type: String as PropType<string>,
      default: '',
    },
    label: {
      type: String as PropType<string>,
      default: null,
    },
    errors: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
    value: {
      type: [Number, String] as PropType<InputValueType>,
      default: null,
    },
    countries: {
      type: Array,
      default: () => ['AU'],
    },
    countriesMaxHeight: {
      type: String as PropType<string>,
      default: '300px',
    },
    borderRadius: {
      type: Number as PropType<number>,
      default: 12,
    },
  },

  data(): InputPhoneData {
    return {
      inFocus: false,
      id: '',
      baseClassList: [
        'ph-antialiased',
        'ph-w-full ',
        'ph-font-normal ',
        'ph-text-grey1 ',
        'ph-rounded-lg ',
        'ph-py-2 ph-px-5',
        'ph-border',
        'ph-border-grey5',
        'focus:ph-outline-none',
        'ph-border-solid',
        'ph-transition',
        (this as any).darkMode ? 'ph-bg-grey6' : 'ph-bg-white',
        (this as any).centered ? 'ph-text-center' : '',
      ],
    } as InputPhoneData;
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
    componentClassList(): string[] {
      return [(this as any).inFocus ? 'ph-text-brand2' : '', 'ph-relative'];
    },
    translations(): Record<string, unknown> {
      return {
        countrySelectorLabel: '',
        phoneNumberLabel: this.placeholder,
      };
    },
    onlyCountries(): string[] {
      return (this as any).countries;
    },
  },

  mounted() {
    (this as any).id = 'photon_input_' + (this as any)._uid;
  },

  methods: {
    onFocus(e: InputEvent) {
      (this as any).inFocus = true;
      (this as any).$emit('focus', e);
    },
    onBlur(e: InputEvent) {
      (this as any).inFocus = false;
      (this as any).$emit('blur', e);
    },
  },
});
</script>
<style lang="postcss">
@import '~vue-phone-number-input/dist/vue-phone-number-input.css';

.ph-input-error-content input,
.ph-input-error-content svg {
  @apply ph-text-alert2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.country-selector__country-flag {
  top: 16px !important;
}
.country-selector__input {
  padding-top: 0 !important;
}
.input-tel__input {
  border-left-width: 0px !important;
}
.select-country-container {
  flex: 0 0 60px !important;
  width: 60px !important;
  min-width: auto !important;
}
.country-selector__input {
  width: 0px !important;
}
.country-selector__input {
  border-right-width: 0px !important;
}
.input-tel__input {
  padding-top: 0px !important;
}
.vue-phone-number-input {
  border-radius: var(--borderRadius, 12px);
  @apply ph-border;
  @apply ph-border-transparent;
}
.vue-phone-number-input:focus-within {
  @apply ph-border-brand2;
}
.country-selector__input,
.input-tel__input {
  box-shadow: none !important;
  border-color: #e0e0e0 !important;
  @apply ph-text-grey1;
}

.ph-inputPhone-dark .country-selector__input,
.ph-inputPhone-dark .input-tel__input {
  @apply ph-bg-grey6;
}

.country-selector__list.has-calling-code {
  border-radius: 0px !important;
  height: var(--countriesHeight) !important;
  min-height: var(--countriesHeight) !important;
  max-height: var(--countriesMaxHeight) !important;
}
.resize-observer {
  height: 0px !important;
}
.input-tel__label {
  @apply ph-hidden;
}
.vue-phone-number-input input {
  @apply ph-font-sans;
}

.vue-phone-number-input .input-tel.is-disabled .input-tel__input,
.vue-phone-number-input .country-selector.is-disabled .country-selector__input {
  background: white !important;
}
</style>
