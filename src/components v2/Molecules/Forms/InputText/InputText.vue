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
    <P2InputText
      :id="id"
      :placeholder="placeholder"
      :icon-left="iconLeft"
      :icon-right="iconRight"
      :centered="centered"
      :error="error"
      :disabled="disabled"
      :value="value"
      :type="type"
      :size="size"
      :is-number="isNumber"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @input="$emit('input', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2InputText, {
  props as InputTextProps,
} from '@/components v2/Atoms/Forms/InputText';
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
  placeholder,
  iconLeft,
  iconRight,
  centered,
  value,
  id,
  type,
  maxlength,
  isNumber,
} = InputTextProps;

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
  // InputText Props
  placeholder,
  iconLeft,
  iconRight,
  centered,
  value,
  id,
  type,
  maxlength,
  isNumber,
};

export default Vue.extend({
  name: 'InputText',
  components: {
    P2InputText,
    P2FormControl,
  },

  props,
});
</script>
