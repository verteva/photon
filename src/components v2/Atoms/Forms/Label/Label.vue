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
    font-family: var(--form-control-items-label-default-text-font-family);
    font-weight: var(--form-control-items-label-default-text-font-weight);
    color: var(--form-control-items-label-default-text-color);
  }

  .required-asterisks {
    margin-left: 2px;
    font-family: var(--form-control-items-label-default-text-font-family);
    font-weight: var(--form-control-items-label-default-text-font-weight);
    color: var(--form-control-items-label-default-icon-color);
  }

  .inline-text {
    margin-left: 8px;
    font-family: var(
      --form-control-items-label-default-inline-message-font-family
    );
    font-weight: var(
      --form-control-items-label-default-inline-message-font-weight
    );
    color: var(--form-control-items-label-default-inline-message-color);
  }

  &.sm {
    .label,
    .required-asterisks {
      font-size: calc(
        var(--form-control-items-label-sm-text-typography-fontSize, 1rem) * 1px
      );
      line-height: var(
        --form-control-items-label-sm-text-typography-lineHeight
      );
      letter-spacing: var(
        --form-control-items-label-sm-text-typography-letterSpacing
      );
      padding: var(
        --form-control-items-label-sm-text-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-label-sm-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-label-sm-text-typography-textCase
      );
    }

    .inline-text {
      font-size: calc(
        var(
            --form-control-items-label-sm-inline-message-typography-fontSize,
            1rem
          ) * 1px
      );
      line-height: var(
        --form-control-items-label-sm-inline-message-typography-lineHeight
      );
      letter-spacing: var(
        --form-control-items-label-sm-inline-message-typography-letterSpacing
      );
      padding: var(
        --form-control-items-label-sm-inline-message-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-label-sm-inline-message-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-label-sm-inline-message-typography-textCase
      );
    }
  }

  &.md {
    .label,
    .required-asterisks {
      font-size: calc(
        var(--form-control-items-label-md-text-typography-fontSize, 1rem) * 1px
      );
      line-height: var(
        --form-control-items-label-md-text-typography-lineHeight
      );
      letter-spacing: var(
        --form-control-items-label-md-text-typography-letterSpacing
      );
      padding: var(
        --form-control-items-label-md-text-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-label-md-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-label-md-text-typography-textCase
      );
    }

    .inline-text {
      font-size: calc(
        var(
            --form-control-items-label-md-inline-message-typography-fontSize,
            1rem
          ) * 1px
      );
      line-height: var(
        --form-control-items-label-md-inline-message-typography-lineHeight
      );
      letter-spacing: var(
        --form-control-items-label-md-inline-message-typography-letterSpacing
      );
      padding: var(
        --form-control-items-label-md-inline-message-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-label-md-inline-message-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-label-md-inline-message-typography-textCase
      );
    }
  }
}
</style>
