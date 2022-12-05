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
        customLabelVar,
        openIndicatorIcon,
        disabled,
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

const { items, value, showFooter, customLabelVar, openIndicatorIcon } =
  InputSelectProps;
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
  // InlineSelect Props
  items,
  value,
  showFooter,
  customLabelVar,
  openIndicatorIcon,
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
