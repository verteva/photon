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
    <P2InputSelect
      v-bind="{
        items,
        value,
        showFooter,
        optionLabelVar,
        optionCustomLabelVar,
        selectedOptionLabelVar,
        selectedOptionCustomLabelVar,
        placeHolder,
        openIndicatorIcon,
        disabled,
        reducePrefixSpacing,
        simple,
        initInput,
      }"
      @input="$emit('input', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2InputSelect, {
  props as InputSelectProps,
} from '@/components v2/Atoms/Forms/InputSelect';
import P2FormControl, {
  props as FormControlProps,
} from '@/components v2/Molecules/Forms/FormControl';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const {
  items,
  value,
  showFooter,
  optionLabelVar,
  optionCustomLabelVar,
  selectedOptionLabelVar,
  selectedOptionCustomLabelVar,
  placeHolder,
  openIndicatorIcon,
  reducePrefixSpacing,
  simple,
  initInput,
} = InputSelectProps;
const { size, disabled } = formProps;
const {
  inlineText,
  isRequired,
  extraMessage,
  messageIcon,
  error,
  hideError,
  label,
} = FormControlProps;

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
  // InputSelect Props
  items,
  value,
  showFooter,
  optionLabelVar,
  optionCustomLabelVar,
  selectedOptionLabelVar,
  selectedOptionCustomLabelVar,
  placeHolder,
  openIndicatorIcon,
  reducePrefixSpacing,
  simple,
  initInput,
};

export default Vue.extend({
  name: 'InputSelect',
  components: {
    P2InputSelect,
    P2FormControl,
  },
  props,
});
</script>
