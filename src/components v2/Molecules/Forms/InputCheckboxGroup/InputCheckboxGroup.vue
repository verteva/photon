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
import Vue, { PropType } from 'vue';
import P2CheckboxGroup from '@/components v2/Atoms/Forms/CheckboxGroup';
import P2FormControl from '@/components v2/Molecules/Forms/FormControl';
import {
  FORM_CONTROL_SIZE,
  FORM_CONTROL_SIZE_TYPE,
} from '@/utils/constants/FormControlConstants';
import validators from '@/utils/validators';

export default Vue.extend({
  name: 'InputCheckboxGroup',
  components: {
    P2CheckboxGroup,
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

    // CheckboxGroup props
    items: {
      type: Array as PropType<any[]>,
      default: (): [] => [],
    },
    name: {
      type: String as PropType<string>,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped></style>
