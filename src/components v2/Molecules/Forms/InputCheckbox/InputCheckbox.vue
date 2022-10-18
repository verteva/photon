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
    <P2Checkbox
      v-bind="{
        name,
        value,
        label: checkboxLabel,
        size,
        disabled,
      }"
      @input="$emit('input', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Checkbox from '@/components v2/Atoms/Forms/Checkbox';
import P2FormControl from '@/components v2/Molecules/Forms/FormControl';

export default Vue.extend({
  name: 'InputCheckbox',
  components: {
    P2Checkbox,
    P2FormControl,
  },
  props: {
    // General Props
    size: {
      type: String,
      default: 'md',
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
    // Checkbox Props
    name: {
      type: String as PropType<string>,
      default: '',
    },
    value: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    checkboxLabel: {
      type: String as PropType<string>,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped></style>
