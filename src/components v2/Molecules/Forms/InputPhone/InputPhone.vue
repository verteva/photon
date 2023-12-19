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
    <P2InputPhone
      ref="inputPhone"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      :default-country-code="defaultCountryCode"
      :countries="countries"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @input="$emit('input', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue from 'vue';
import P2InputPhone, {
  props as InputPhoneProps,
} from '@/components v2/Atoms/Forms/InputPhone';
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

const { placeholder, value, countries, defaultCountryCode } = InputPhoneProps;

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
  value,
  countries,
  defaultCountryCode,
};

export default Vue.extend({
  name: 'InputPhone',
  components: {
    P2InputPhone,
    P2FormControl,
  },

  props,

  computed: {
    isValid(): boolean {
      return (
        (typeof this.$refs.inputPhone !== 'undefined' ||
          typeof this.$refs.inputPhone.isValid !== 'undefined') &&
        this.$refs.inputPhone.isValid === true
      );
    },
  },
});
</script>
