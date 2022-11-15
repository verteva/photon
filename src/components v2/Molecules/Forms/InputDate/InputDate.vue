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
    <P2InputDate
      :disabled="disabled"
      :value="value"
      @dateDay="$emit('dateDay', $event)"
      @dateMonth="$emit('dateMonth', $event)"
      @dateYear="$emit('dateYear', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2InputDate, {
  props as InputDateProps,
} from '@/components v2/Atoms/Forms/InputDate';
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
const { value } = InputDateProps;

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
  value,
};

export default Vue.extend({
  name: 'InputDate',
  components: {
    P2InputDate,
    P2FormControl,
  },

  props,
});
</script>
