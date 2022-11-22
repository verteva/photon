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
    <P2Checkbox
      v-bind="{
        name,
        value,
        label: checkboxLabel,
        size,
        disabled,
      }"
      @input="$emit('input', $event)"
    >
      <slot />
    </P2Checkbox>
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2Checkbox, {
  props as CheckboxProps,
} from '@/components v2/Atoms/Forms/Checkbox';
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
const { name, value, label: checkboxLabel } = CheckboxProps;

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
  value,
  checkboxLabel,
};

export default Vue.extend({
  name: 'InputCheckbox',
  components: {
    P2Checkbox,
    P2FormControl,
  },
  props,
});
</script>

<style lang="scss" scoped></style>
