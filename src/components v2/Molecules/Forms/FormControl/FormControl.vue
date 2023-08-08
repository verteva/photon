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
      ref="label"
    />
    <P2InputMessage
      v-if="extraMessage"
      v-bind="{
        message: extraMessage,
        icon: messageIcon,
        size,
      }"
      ref="inputMessage"
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
      ref="errorMessage"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Label, {
  props as LabelProps,
} from '@/components v2/Atoms/Forms/Label';
import P2ErrorMessage, {
  props as ErrorMessageProps,
} from '@/components v2/Atoms/Forms/ErrorMessage';
import P2InputMessage, {
  props as InputMessageProps,
} from '@/components v2/Atoms/Forms/InputMessage';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { label, inlineText, isRequired } = LabelProps;
const { message: extraMessage, icon: messageIcon } = InputMessageProps;
const { error } = ErrorMessageProps;
const { size, disabled } = formProps;

export const props = {
  // Label props
  label,
  inlineText,
  isRequired,
  // InputMessage props
  extraMessage,
  messageIcon,
  // ErrorMessage props
  error,
  // Global props
  size,
  disabled,
  // FormControl props
  hideError: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

export default Vue.extend({
  name: 'P2FormControl',
  components: {
    P2Label,
    P2ErrorMessage,
    P2InputMessage,
  },
  props,
});
</script>
