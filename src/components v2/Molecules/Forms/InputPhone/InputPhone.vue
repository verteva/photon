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
      :default-phone-number="defaultPhoneNumber"
      :default-country-code="defaultCountryCode"
      :countries="countries"
      @input="$emit('input', $event)"
      @update="onUpdate"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
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

const { placeholder, countries, defaultPhoneNumber, defaultCountryCode } =
  InputPhoneProps;

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
  // InputPhone Props
  placeholder,
  countries,
  defaultCountryCode,
  defaultPhoneNumber,
};

export default Vue.extend({
  name: 'InputPhone',
  components: {
    P2InputPhone,
    P2FormControl,
  },

  props,

  data() {
    return {
      value: '',
      results: {},
      isValid: false,
    };
  },

  methods: {
    onUpdate(e) {
      this.isValid = e.isValid;
      this.results = e;
      this.value = e.isValid ? e.e164 : '';
      this.$emit('update', e);
    },
  },
});
</script>
