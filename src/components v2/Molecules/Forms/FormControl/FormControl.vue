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
      v-if="!hideError"
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
import {
  FORM_CONTROL_SIZE,
  FORM_CONTROL_SIZE_TYPE,
} from '@/utils/constants/FormControlConstants';
import validators from '@/utils/validators';

export default Vue.extend({
  name: 'P2FormControl',
  components: {
    P2Label,
    P2ErrorMessage,
    P2InputMessage,
  },
  props: {
    // Label props
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
    // InputMessage props
    extraMessage: {
      type: String as PropType<string>,
      default: '',
    },
    messageIcon: {
      type: String as PropType<string>,
      default: '',
    },
    // ErrorMessage props
    error: {
      type: String as PropType<string>,
      default: '',
    },
    // Global props
    hideError: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<FORM_CONTROL_SIZE_TYPE>,
      default: FORM_CONTROL_SIZE.MEDIUM,
      validator: validators.includes(Object.values(FORM_CONTROL_SIZE)),
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>
