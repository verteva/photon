<template>
  <p-input
    v-if="!simple"
    :class="{ 'ph-input-error-content': errors.length }"
    :errors="errors"
  >
    <p-label>
      {{ label }}
      <slot v-if="!label" name="label" />
    </p-label>

    <div :class="componentClassList">
      <div v-if="iconLeft" :class="[iconClassList]">
        <p-icon :name="iconLeft" type="lg" />
      </div>
      <input
        :id="id"
        :class="baseClassList"
        :placeholder="placeholder"
        :value="value"
        :type="$attrs.type"
        tabindex="0"
        @keydown="validatePress"
        @input="updateValue($event.target.value)"
        @focus="onFocus"
        @blur="onBlur"
      />
      <div v-if="iconRight" :class="[iconClassList, 'ph-right-1']">
        <p-icon :name="iconRight" type="lg" />
      </div>
    </div>
  </p-input>

  <!-- Simple text field -->
  <div v-else :class="componentClassList">
    <input
      :id="id"
      :class="baseClassList"
      :placeholder="placeholder"
      :value="value"
      :type="$attrs.type"
      v-bind="$attrs"
      tabindex="0"
      v-on="$listeners"
      @keydown="validatePress"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import PInput from '../Input';
import PLabel from '../Label';
import { InputTextData, InputValueType } from './types';
import { isNumber } from '../../utils';

export default Vue.extend({
  name: 'PInputText',

  components: {
    PIcon,
    PInput,
    PLabel
  },

  props: {
    centered: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    simple: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    number: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    darkMode: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    placeholder: {
      type: String as PropType<string>,
      default: ''
    },
    iconLeft: {
      type: String as PropType<string>,
      default: ''
    },
    iconRight: {
      type: String as PropType<string>,
      default: ''
    },
    label: {
      type: String as PropType<string>,
      default: ''
    },
    errors: {
      type: Array as PropType<string[]>,
      default: (): [] => []
    },
    value: {
      type: [Number, String] as PropType<InputValueType>,
      default: null
    }
  },

  data(): InputTextData {
    return {
      inFocus: false,
      currencyOptions: {
        currency: null,
        precision: 0,
        valueRange: { min: 0 },
        allowNegative: false
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
        'ph-duration-200'
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
        this.centered ? 'ph-text-center' : ''
      ]
    } as InputTextData;
  },

  computed: {
    componentClassList(): string[] {
      return [this.inFocus ? 'ph-text-brand2' : '', 'ph-relative'];
    }
  },

  mounted() {
    this.id = 'photon_input_' + this._uid;
  },

  methods: {
    validatePress(event: KeyboardEvent) {
      /* 
        TODO: As an enhacement, add keycode checks
        to allow for a user select all (cmd + a)
        in the text input
      */

      if (this.number && !isNumber(event)) {
        return event.preventDefault();
      }
    },

    updateValue(value: string) {
      this.$emit('input', value);
    },

    onFocus(e: InputEvent) {
      this.inFocus = true;
      this.$emit('focus', e);
    },

    onBlur(e: InputEvent) {
      this.inFocus = false;
      this.$emit('blur', e);
    }
  }
});
</script>
<style lang="postcss">
.ph-input-error-content input,
.ph-input-error-content svg {
  @apply ph-text-alert2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
