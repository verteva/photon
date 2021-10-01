<template>
  <p-input
    v-if="!simple"
    :class="{'ph-input-error-content':errors.length}"
    :errors="errors"
  >
    <p-label>
      <slot
        v-if="!label"
        name="label"
      />
    </p-label>
    <div :class="componentClassList">
      <VuePhoneNumberInput 
        ref="input"
        v-model="innerValue"
        :style="{
          '--countriesHeight': onlyCountries.length * 30,
          '--countriesMaxHeight': onlyCountries,
        }
        "
        :border-radius="borderRadius"
        default-country-code="AU"
        :only-countries="onlyCountries"
        :translations="translations"
        no-example
        show-code-on-list
        v-bind="$attrs"
        v-on="$listeners"
        @phone-number-focused="onFocus"
        @phone-number-blur="onBlur"
      />
    </div>
  </p-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PInput from '../Input';
import PLabel from '../Label';
import { InputPhoneData, InputValueType } from './types'
import VuePhoneNumberInput from 'vue-phone-number-input';

export default Vue.extend({
  name: 'PInputPhone',

  components: {
    PInput,
    PLabel,
    VuePhoneNumberInput,
  },
  
  props: {
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
      default: '',
    },
    errors: {
      type: Array as PropType<string[]>,
      default: ():[] => [],
    },
    value: {
      type: [Number, String] as PropType<InputValueType>,
      default: null,
    },
    countries: {
      type: Array,
      default: () => ['AU']
    },
    countriesMaxHeight: {
      type: String as PropType<string>,
      default: '300px',
    },
    borderRadius: {
      type: Number as PropType<number>,
      default: 12,
    }
  },


  data():InputPhoneData {    
    return {
      inFocus: false,
      id: '',
      innerValue: (this as any).value,
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
    componentClassList():string[] {
      return [
        (this as any).inFocus ? 'ph-text-brand2' : '',    
        'ph-relative',
      ];      
    },
    translations (): Record<string, unknown> {
      return {
        'countrySelectorLabel' : '',
        'phoneNumberLabel' : this.placeholder,
      }
    }, 
    onlyCountries (): string[] {
      return (this as any).countries;
    },
  },

  mounted() {
    (this as any).id = 'photon_input_' + (this as any)._uid;
  },


  methods: {
    onFocus(e:InputEvent) {
      (this as any).inFocus = true;
      console.log("inFocus",  (this as any).inFocus);
      (this as any).$emit('focus', e);
    },
    onBlur(e:InputEvent) {
      (this as any).inFocus = false;
      (this as any).$emit('blur', e);
    },
  },
});
</script>
<style lang="postcss">
@import '~vue-phone-number-input/dist/vue-phone-number-input.css';

.ph-input-error-content input, .ph-input-error-content svg{
  @apply ph-text-alert2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.country-selector__country-flag{
  top: 16px!important;
}
.country-selector__input{
  padding-top: 0!important;
}
.input-tel__input{
  border-left-width: 0px!important;
}
.select-country-container{
  flex: 0 0 60px!important;
  width: 60px!important;
  min-width: auto!important;
}
.country-selector__input{
  width: 0px!important;
}
.country-selector__input{
  border-right-width: 0px!important;
}
.input-tel__input{
  padding-top: 0px!important;
}
.vue-phone-number-input{
  border-radius: 12px;
}
.vue-phone-number-input:focus-within{
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
}
.country-selector__input, .input-tel__input{
  box-shadow: none!important;
  border-color: #e0e0e0 !important;
  @apply ph-text-grey1;
}

.country-selector__list.has-calling-code{
  border-radius: 0px!important;
  height: var(--countriesHeight)!important;
  min-height: var(--countriesHeight)!important;
  max-height: var(--countriesMaxHeight)!important;
}
.resize-observer{
  height: 0px!important;
}
.input-tel__label{
  display: none;
}
</style>
