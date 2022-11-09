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
      @input="$emit('input', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2InputText from '@/components v2/Atoms/Forms/InputText';
import P2FormControl from '@/components v2/Molecules/Forms/FormControl';
import {
  FORM_CONTROL_SIZE,
  FORM_CONTROL_SIZE_TYPE,
} from '@/utils/constants/FormControlConstants';
import validators from '@/utils/validators';
import { InputValues, InputTypes } from './types';
export default Vue.extend({
  name: 'InputText',
  components: {
    P2InputText,
    P2FormControl,
  },

  props: {
    // General Props
    size: {
      type: String as PropType<FORM_CONTROL_SIZE_TYPE>,
      default: FORM_CONTROL_SIZE.MEDIUM,
      validator: validators.includes(Object.values(FORM_CONTROL_SIZE)),
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // FormControl Props
    label: {
      type: String as PropType<string>,
      default: '',
    },
    inlineText: {
      type: String as PropType<string>,
      default: '',
    },
    isRequired: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    extraMessage: {
      type: String as PropType<string>,
      default: '',
    },
    messageIcon: {
      type: String as PropType<string>,
      default: '',
    },
    error: {
      type: String as PropType<string>,
      default: '',
    },
    hideError: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // InputText Props
    placeholder: {
      type: String as PropType<string>,
      default: '',
    },
    iconLeft: {
      type: String as PropType<string>,
      default: '',
    },
    iconRight: {
      type: String as PropType<string>,
      default: '',
    },
    centered: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    value: {
      type: [Number, String] as PropType<InputValues>,
      default: null,
    },
    id: {
      type: String as PropType<string>,
      default: '',
    },
    type: {
      type: String as PropType<InputTypes>,
      default: 'text',
    },
  },
});
</script>

<style lang="scss" scoped></style>
