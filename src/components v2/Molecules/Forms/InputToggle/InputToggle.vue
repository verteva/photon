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
    <P2Toggle
      v-bind="{
        name,
        value,
        id,
        disabled,
      }"
      @input="$emit('input', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2Toggle, {
  props as ToggleProps,
} from '@/components v2/Atoms/Forms/Toggle';
import P2FormControl, {
  props as FormControlProps,
} from '@/components v2/Molecules/Forms/FormControl';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { name, value, id } = ToggleProps;
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
  // Toggle Props
  name,
  value,
  id,
};

export default Vue.extend({
  name: 'InputToggle',
  components: {
    P2Toggle,
    P2FormControl,
  },
  props,
});
</script>
