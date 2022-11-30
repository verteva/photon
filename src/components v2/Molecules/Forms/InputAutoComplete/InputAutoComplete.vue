<template>
  <P2FormControl
    v-bind="{
      label,
      inlineText,
      isRequired,
      extraMessage,
      messageIcon,
      error,
      size,
      disabled,
      hideError,
    }"
  >
    <P2InputAutoComplete
      ref="inputAutocomplete"
      v-bind="{
        disabled,
        optionItems,
        placeHolder,
        noOptionsText,
        showSelectedIcon,
        prefixIcon,
        hideOpenIndicator,
        showFooter,
        openIndicatorIcon,
        value,
        selectedBy,
        optionLabelVar,
        optionCustomLabelVar,
        optionAllowOptionIcon,
        selectedOptionLabelVar,
        selectedOptionCustomLabelVar,
        selectedOptionAllowOptionIcon,
        noDropOnStart,
        hideClearBtn,
        loading,
        initInput,
        hideInputOnSelected,
        disableFilter,
        simple,
        returnObj,
        lazyFocus,
      }"
      @selectedObj="$emit('selectedObj', $event)"
      @onBlur="$emit('onBlur')"
      @onFocus="$emit('onFocus')"
      @update:searchInput="$emit('update:searchInput', $event)"
      @blur="$emit('blur')"
      @update:selected="$emit('update:selected', $event)"
      @update:value="$emit('update:value', $event)"
    >
      <template #list-footer>
        <slot name="list-footer" />
      </template>
    </P2InputAutoComplete>
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2InputAutoComplete, {
  props as InputAutoCompleteProps,
} from '@/components v2/Atoms/Forms/InputAutoComplete';
import P2FormControl, {
  props as FormControlProps,
} from '@/components v2/Molecules/Forms/FormControl';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { size, disabled } = formProps;
const {
  label,
  inlineText,
  isRequired,
  extraMessage,
  messageIcon,
  error,
  hideError,
} = FormControlProps;
const {
  optionItems,
  placeHolder,
  text: noOptionsText,
  optionLabelVar,
  optionCustomLabelVar,
  optionAllowOptionIcon,
  selectedOptionLabelVar,
  selectedOptionCustomLabelVar,
  selectedOptionAllowOptionIcon,
  showSelectedIcon,
  prefixIcon,
  hideOpenIndicator,
  showFooter,
  openIndicatorIcon,
  value,
  selectedBy,
  noDropOnStart,
  hideClearBtn,
  loading,
  initInput,
  hideInputOnSelected,
  disableFilter,
  simple,
  returnObj,
  lazyFocus,
  dataIm,
} = InputAutoCompleteProps;

export const props = {
  // General Props
  size,
  disabled,
  // FormControl Props
  label,
  inlineText,
  isRequired,
  extraMessage,
  messageIcon,
  error,
  hideError,
  // InputAutoComplete Props
  optionItems,
  placeHolder,
  noOptionsText,
  optionLabelVar,
  optionCustomLabelVar,
  optionAllowOptionIcon,
  selectedOptionLabelVar,
  selectedOptionCustomLabelVar,
  selectedOptionAllowOptionIcon,
  showSelectedIcon,
  prefixIcon,
  hideOpenIndicator,
  showFooter,
  openIndicatorIcon,
  value,
  selectedBy,
  noDropOnStart,
  hideClearBtn,
  loading,
  initInput,
  hideInputOnSelected,
  disableFilter,
  simple,
  returnObj,
  lazyFocus,
  dataIm,
};

export default Vue.extend({
  name: 'InputAutoComplete',
  components: {
    P2InputAutoComplete,
    P2FormControl,
  },

  props,
});
</script>
