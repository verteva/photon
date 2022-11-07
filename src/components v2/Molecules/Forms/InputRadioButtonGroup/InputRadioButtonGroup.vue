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
      }"
      @click="$emit('click', $event)"
    />
  </P2FormControl>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2RadioButtonGroup from '@/components v2/Atoms/Forms/RadioButtonGroup';
import P2FormControl from '@/components v2/Molecules/Forms/FormControl';
import {
  FORM_CONTROL_SIZE,
  FORM_CONTROL_SIZE_TYPE,
} from '@/utils/constants/FormControlConstants';
import validators from '@/utils/validators';

export default Vue.extend({
  name: 'InputRadioButtonGroup',
  components: {
    P2RadioButtonGroup,
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

    // RadioButtonGroup props
    items: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    rows: {
      type: Number as PropType<number>,
      default: 1,
    },
    selectedIndex: {
      type: Number as PropType<number>,
      default: -1,
    },
  },
});
</script>

<style lang="scss" scoped></style>
