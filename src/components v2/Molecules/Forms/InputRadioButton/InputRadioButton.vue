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
    <P2RadioButton
      v-bind="{
        name,
        label: radioButtonLabel,
        id,
        icon,
        disabled,
        checked,
      }"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2RadioButton from '@/components v2/Atoms/Forms/RadioButton';
import P2FormControl from '@/components v2/Molecules/Forms/FormControl';
import {
  FORM_CONTROL_SIZE,
  FORM_CONTROL_SIZE_TYPE,
} from '@/utils/constants/FormControlConstants';
import validators from '@/utils/validators';

export default Vue.extend({
  name: 'InputRadioButton',
  components: {
    P2RadioButton,
    P2FormControl,
  },
  props: {
    // General Props
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // FormControl Props
    size: {
      type: String as PropType<FORM_CONTROL_SIZE_TYPE>,
      default: FORM_CONTROL_SIZE.MEDIUM,
      validator: validators.includes(Object.values(FORM_CONTROL_SIZE)),
    },
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
    // Checkbox Props
    name: {
      type: String as PropType<string>,
      default: '',
    },
    radioButtonLabel: {
      type: String as PropType<string>,
      default: '',
    },
    id: {
      type: String as PropType<string>,
      default: '',
    },
    icon: {
      type: String as PropType<string>,
      default: '',
    },
    checked: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped></style>
