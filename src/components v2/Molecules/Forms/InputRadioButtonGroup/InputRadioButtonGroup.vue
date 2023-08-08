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
    <P2RadioButtonGroup
      v-bind="{
        items,
        disabled,
        selectedIndex,
        rows,
        name,
      }"
      @click="$emit('click', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2RadioButtonGroup, {
  props as RadioButtonGroupProps,
} from '@/components v2/Atoms/Forms/RadioButtonGroup';
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
const { items, rows, selectedIndex } = RadioButtonGroupProps;

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
  // RadioButtonGroup props
  items,
  rows,
  name,
  selectedIndex,
};

export default Vue.extend({
  name: 'InputRadioButtonGroup',
  components: {
    P2RadioButtonGroup,
    P2FormControl,
  },
  props,
});
</script>
