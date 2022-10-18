<template>
  <div class="photon-form-control">
    <P2Label
      v-if="label"
      v-bind="{
        label,
        inlineText,
        isRequired,
        size,
      }"
    />
    <P2InputMessage
      v-if="extraMessage"
      v-bind="{
        message: extraMessage,
        icon: messageIcon,
        size,
      }"
    />
    <div class="photon-form-control__input">
      <slot :size="size" />
    </div>
    <P2ErrorMessage
      v-bind="{
        error,
        size,
      }"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Label from '@/components v2/Atoms/Forms/Label';
import P2ErrorMessage from '@/components v2/Atoms/Forms/ErrorMessage';
import P2InputMessage from '@/components v2/Atoms/Forms/InputMessage';

export default Vue.extend({
  name: 'P2FormControl',
  components: {
    P2Label,
    P2ErrorMessage,
    P2InputMessage,
  },
  props: {
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
    size: {
      type: String as PropType<string>,
      default: 'md',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>
