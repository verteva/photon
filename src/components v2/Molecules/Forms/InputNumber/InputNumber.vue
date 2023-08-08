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
    <P2NumberInput
      :id="id"
      ref="numberInput"
      :disabled="disabled"
      :value="value"
      :min-val="minVal"
      :max-val="maxVal"
      @change:subtract="$emit('change:subtract')"
      @change:add="$emit('change:add')"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @input="$emit('input', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2NumberInput, {
  props as NumberInputProps,
} from '@/components v2/Molecules/Forms/NumberInput';
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
const { value, maxVal, minVal, id } = NumberInputProps;

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
  // NumberInput Props
  id,
  value,
  minVal,
  maxVal,
};

export default Vue.extend({
  name: 'InputNumber',
  components: {
    P2NumberInput,
    P2FormControl,
  },

  props,
});
</script>
