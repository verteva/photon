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
    }"
  >
    <P2RadioButton
      v-bind="{
        name,
        label: radioButtonLabel,
        id,
        icon,
        disabled,
        checked,
      }"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2RadioButton, {
  props as RadioButtonProps,
} from '@/components v2/Atoms/Forms/RadioButton';
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
const { name, label: radioButtonLabel, id, icon, checked } = RadioButtonProps;

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
  // Checkbox Props
  name,
  radioButtonLabel,
  id,
  icon,
  checked,
};

export default Vue.extend({
  name: 'InputRadioButton',
  components: {
    P2RadioButton,
    P2FormControl,
  },
  props,
});
</script>
