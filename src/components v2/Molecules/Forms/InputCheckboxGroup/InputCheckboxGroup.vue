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

export default Vue.extend({
  name: 'InputCheckboxGroup',
  components: {
    P2CheckboxGroup,
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

    // CheckboxGroup props
    items: {
      type: Array,
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
