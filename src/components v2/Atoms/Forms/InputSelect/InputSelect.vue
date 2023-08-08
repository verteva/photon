<template>
  <div class="ph-input-autocomplete-select">
    <P2InputAutoComplete
      :show-footer="showFooter"
      :option-label-var="optionLabelVar"
      :option-custom-label-var="optionCustomLabelVar"
      :selected-option-label-var="selectedOptionLabelVar"
      :selected-option-custom-label-var="selectedOptionCustomLabelVar"
      :open-indicator-icon="openIndicatorIcon"
      :option-items="items"
      :init-input="value"
      :value="value"
      :disabled="disabled"
      :selected-by="selectedBy"
      hide-clear-btn
      :reduce-value="reduceValue"
      :place-holder="placeHolder"
      @input="$emit('input', selected)"
      @update:selected="selected = $event"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2InputAutoComplete from '@/components v2/Atoms/Forms/InputAutoComplete';
import { InputSelectData, InputValueType } from './types';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  disabled,
  items: {
    type: Array,
    default: () => [],
  },
  value: {
    type: [Number, String, Object] as PropType<InputValueType>,
    default: null,
  },
  showFooter: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  optionLabelVar: {
    type: String as PropType<string>,
    default: 'label',
  },
  optionCustomLabelVar: {
    type: String as PropType<string>,
    default: 'customLabel',
  },
  selectedOptionLabelVar: {
    type: String as PropType<string>,
    default: 'label',
  },
  selectedOptionCustomLabelVar: {
    type: String as PropType<string>,
    default: 'customLabel',
  },
  placeHolder: {
    type: String as PropType<string>,
    default: '',
  },
  openIndicatorIcon: {
    type: String as PropType<string>,
    default: 'chevron-down',
  },
  initInput: {
    type: [Number, String, Object] as PropType<string | number>,
    default: null,
  },
  selectedBy: {
    type: String as PropType<string>,
    default: 'label',
  },
  reduceValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

export default Vue.extend({
  name: 'P2InputSelect',
  components: {
    P2InputAutoComplete,
  },
  props,
  data(): InputSelectData {
    return {
      inFocus: false,
      selected: '',
    } as InputSelectData;
  },

  methods: {
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
<style lang="scss">
.ph-input-autocomplete-select {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
