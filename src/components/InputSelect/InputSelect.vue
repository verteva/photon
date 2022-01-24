<template>
  <p-input
    :class="{ 'ph-input-error-content': errors.length }"
    :errors="errors"
  >
    <p-label>
      {{ label }}
      <slot v-if="!label" name="label" />
    </p-label>
    <div>
      <p-autocomplete
        v-bind="$props"
        :errors="[]"
        :option-items="items"
        :init-input="value"
        :value="value"
        hide-clear-btn
        @input="$emit('input', selected)"
        @update:selected="selected = $event"
      >
      </p-autocomplete>
    </div>
  </p-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PAutocomplete from '../Autocomplete';
import PLabel from '../Label';
import PInput from '../Input';
import { InputSelectData, InputValueType } from './types';

export default Vue.extend({
  name: 'PInputSelect',
  components: {
    PAutocomplete,
    PLabel,
    PInput,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
    errors: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
    value: {
      type: [Number, String, Object] as PropType<InputValueType>,
      default: null,
    },
    backgroundColor: {
      type: String as PropType<string>,
      default: '#FFFFFF',
    },
    textColor: {
      type: String as PropType<string>,
      default: '#323232',
    },
    highlightBackgroundColor: {
      type: String as PropType<string>,
      default: '#eeeeee',
    },
    borderColor: {
      type: String as PropType<string>,
      default: '#e0e0e0',
    },
    borderFocusColor: {
      type: String as PropType<string>,
      default: '#009EDE',
    },
    showFooter: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    hideClearBtn: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    customLabelVar: {
      type: String as PropType<string>,
      default: 'label',
    },
    returnObj: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    dropType: {
      type: String as PropType<string>,
      default: 'down',
    },
    openIndicatorIcon: {
      type: String as PropType<string>,
      default: 'ChevronDown',
    },
    openIndicatorIconSize: {
      type: String as PropType<string>,
      default: 'xs',
    },
    openIndicatorColor: {
      type: String as PropType<string>,
      default: '#009EDE',
    },
    openIndicatorIndent: {
      type: String as PropType<string>,
      default: '10px',
    },
  },
  data(): InputSelectData {
    return {
      inFocus: false,
      id: '',
      selected: '',
    } as InputSelectData;
  },
  mounted() {
    this.id = 'photon_input_' + this._uid;
  },

  methods: {
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
    },
  },
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
