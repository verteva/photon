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
    <P2CheckboxGroup
      v-bind="{
        name,
        items,
        size,
        disabled,
      }"
      @input="$emit('input', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2CheckboxGroup, {
  props as CheckboxGroupProps,
} from '@/components v2/Atoms/Forms/CheckboxGroup';
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
const { name, items } = CheckboxGroupProps;

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
  // CheckboxGroup props
  items,
  name,
};

export default Vue.extend({
  name: 'InputCheckboxGroup',
  components: {
    P2CheckboxGroup,
    P2FormControl,
  },
  props,
});
</script>

<style lang="scss" scoped></style>
