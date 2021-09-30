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
      <div
        v-if="iconLeft"
        :class="[iconClassList]"
      >
        <p-icon
          :name="iconLeft"
          type="lg"
        />
      </div>
      <VuePhoneNumberInput 
        v-model="value" 
        :style="{
          '--countriesHeight': countries.length * 30,
        }
        "
        border-radius="12"
        default-country-code="AU"
        :only-countries="countries"
        :translations="translations"
        no-example
        show-code-on-list
        v-bind="$attrs"
        v-on="$listeners"
      />
      <div
        v-if="iconRight"
        :class="[iconClassList, 'ph-right-1']"
      >
        <p-icon
          :name="iconRight"
          type="lg"
        />
      </div>
    </div>
  </p-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import PInput from '../Input';
import PLabel from '../Label';
import { InputTextData, InputValueType } from './types'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default Vue.extend({
  name: 'PInputPhone',

  components: {
    PIcon,
    PInput,
    PLabel,
    VuePhoneNumberInput,
  },
  
  props: {
    centered: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    simple: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    number: {
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
    iconLeft: {
      type: String as PropType<string>,
      default: '',
    },
    iconRight: {
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
    countriesRows: {
      type: Number as PropType<number>,
      default: 10,
    }
  },


  data():InputTextData {    
    return {
      inFocus: false,
      currencyOptions: {
        currency: null,
        precision: 0,
        valueRange: { min: 0 },
        allowNegative: false,
      },
      id: '',
      iconClassList: [
        'ph-absolute',
        'ph-top-0',
        'ph-w-12',
        'ph-h-full',
        'ph-flex',
        'ph-items-center',
        'ph-justify-center',
        'ph-transition',
        'ph-duration-200',
      ],
      baseClassList: [
        'ph-antialiased',
        'ph-w-full ',
        'ph-font-normal ',
        'ph-text-grey1 ',
        'ph-rounded-lg ',
        'ph-py-2 ph-px-5',
        'ph-border',
        'ph-border-grey5',
        'focus:ph-border-brand2',
        'focus:ph-outline-none',
        'ph-border-solid',
        'ph-transition',
        this.darkMode ? 'ph-bg-grey6' : 'ph-bg-white',
        this.iconLeft ? 'ph-pl-10 ph-left-1' : '',
        this.iconRight ? 'ph-pr-10' : '',
        this.centered ? 'ph-text-center' : '',
      ],
    } as InputTextData;
  },

  computed: {
    componentClassList():string[] {
      return [
        this.inFocus ? 'ph-text-brand2' : '',    
        'ph-relative',
      ];      
    },
    countries(): string[] {
      return [
        'AU'
      ]
    },
    translations (): Record<string, unknown> {
      return {
        'countrySelectorLabel' : '',
        'phoneNumberLabel' : this.placeholder,
      }
    }

  },

  mounted() {
    this.id = 'photon_input_' + this._uid;
  },


  methods: {
    onFocus(e:InputEvent) {
      this.inFocus = true;
      this.$emit('focus', e);
    },
    
    onBlur(e:InputEvent) {
      this.inFocus = false;
      this.$emit('blur', e);
    },
  },
});
</script>
<style lang="postcss">
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
}

.country-selector__list.has-calling-code{
  border-radius: 0px!important;
  height: var(--countriesHeight)!important;
  min-height: var(--countriesHeight)!important;
}
.resize-observer{
  height: 0px!important;
}
.input-tel__label{
  display: none;
}
</style>
