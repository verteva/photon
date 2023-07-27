<template>
  <div class="photon-label" :class="[size]">
    <span class="label">
      {{ label }}<span v-if="isRequired" class="required-asterisks">*</span>
    </span>
    <span class="inline-text">{{ inlineText }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { size } = formProps;

export const props = {
  label: {
    type: String as PropType<string>,
    default: '',
  },
  isRequired: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  inlineText: {
    type: String as PropType<string>,
    default: '',
  },
  size,
};

export default Vue.extend({
  name: 'P2Label',
  props,
});
</script>

<style lang="scss" scoped>
.photon-label {
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;

  .label {
    display: flex;
    align-items: flex-start;
    font-family: var(--sd-form-control-items-label-default-text-font-family);
    font-weight: var(--sd-form-control-items-label-default-text-font-weight);
    color: var(--sd-form-control-items-label-default-text-color);
  }

  .required-asterisks {
    margin-left: 2px;
    color: var(--sd-form-control-items-label-default-text-color);
  }

  .inline-text {
    margin-left: 8px;
    font-family: var(
      --sd-form-control-items-label-default-inline-message-font-family
    );
    font-weight: var(
      --sd-form-control-items-label-default-inline-message-font-weight
    );
    color: var(--sd-form-control-items-label-default-inline-message-color);
  }

  &.md {
    .label {
      font-size: var(
        --sd-form-control-items-label-md-text-typography-font-size
      );
      font-weight: var(
        --sd-form-control-items-label-md-text-typography-font-weight
      );
      font-family: var(
        --sd-form-control-items-label-md-text-typography-font-family
      );
      line-height: var(
        --sd-form-control-items-label-md-text-typography-line-height,
        1.5
      );
      text-transform: var(
        --sd-form-control-items-label-md-text-typography-text-case
      );
      text-decoration: var(
        --sd-form-control-items-label-md-text-typography-text-decoration
      );
    }

    .required-asterisks {
      font-size: var(
        --sd-form-control-items-label-md-required-typography-font-size
      );
      font-weight: var(
        --sd-form-control-items-label-md-required-typography-font-weight
      );
      font-family: var(
        --sd-form-control-items-label-md-required-typography-font-family
      );
      line-height: var(
        --sd-form-control-items-label-md-required-typography-line-height,
        1.5
      );
      text-transform: var(
        --sd-form-control-items-label-md-required-typography-text-case
      );
      text-decoration: var(
        --sd-form-control-items-label-md-required-typography-text-decoration
      );
      padding: var(
        --sd-form-control-items-label-md-required-typography-paragraph-spacing
      );
    }

    .inline-text {
      font-size: var(
        --sd-form-control-items-label-md-inline-message-typography-font-size,
        1rem
      );
      line-height: var(
        --sd-form-control-items-label-md-inline-message-typography-line-height
      );
      letter-spacing: var(
        --sd-form-control-items-label-md-inline-message-typography-letter-spacing
      );
      padding: var(
        --sd-form-control-items-label-md-inline-message-typography-paragraph-spacing
      );
      text-decoration: var(
        --sd-form-control-items-label-md-inline-message-typography-text-decoration
      );
      text-transform: var(
        --sd-form-control-items-label-md-inline-message-typography-text-case
      );
    }
  }
}
</style>
