<template>
  <div class="photon-label" :class="[size]">
    <span class="label">{{ label }}</span>
    <span v-if="isRequired" class="required-asterisks">*</span>
    <span class="inline-text">{{ inlineText }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'P2Label',
  props: {
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
    size: {
      type: String as PropType<string>,
      default: 'sm',
    },
  },
});
</script>

<style lang="scss" scoped>
.photon-label {
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;

  .label {
    font-family: var(
      --form-control-items-label-default-text-font-family,
      "'roboto' arial sans-serif"
    );
    font-weight: var(--form-control-items-label-default-text-font-weight, bold);
    color: var(--form-control-items-label-default-text-color, #000);
  }

  .required-asterisks {
    margin-left: 2px;
    font-family: var(
      --form-control-items-label-default-text-font-family,
      "'roboto' arial sans-serif"
    );
    font-weight: var(--form-control-items-label-default-text-font-weight, bold);
    color: var(--form-control-items-label-default-icon-color, #f00);
  }

  .inline-text {
    margin-left: 8px;
    font-family: var(
      --form-control-items-label-default-inline-message-font-family,
      "'roboto' arial sans-serif"
    );
    font-weight: var(
      --form-control-items-label-default-inline-message-font-weight,
      400
    );
    color: var(--form-control-items-label-default-inline-message-color, #000);
  }

  &.sm {
    .label,
    .required-asterisks {
      font-size: calc(
        var(--form-control-items-label-sm-text-typography-fontSize, 1rem) * 1px
      );
      line-height: var(
        --form-control-items-label-sm-text-typography-lineHeight,
        1.5
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
        --form-control-items-label-sm-inline-message-typography-lineHeight,
        1.5
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

  &.lg {
    .label,
    .required-asterisks {
      font-size: calc(
        var(--form-control-items-label-lg-text-typography-fontSize, 1rem) * 1px
      );
      line-height: var(
        --form-control-items-label-lg-text-typography-lineHeight,
        1.5
      );
      letter-spacing: var(
        --form-control-items-label-lg-text-typography-letterSpacing
      );
      padding: var(
        --form-control-items-label-lg-text-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-label-lg-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-label-lg-text-typography-textCase
      );
    }

    .inline-text {
      font-size: calc(
        var(
            --form-control-items-label-lg-inline-message-typography-fontSize,
            1rem
          ) * 1px
      );
      line-height: var(
        --form-control-items-label-lg-inline-message-typography-lineHeight,
        1.5
      );
      letter-spacing: var(
        --form-control-items-label-lg-inline-message-typography-letterSpacing
      );
      padding: var(
        --form-control-items-label-lg-inline-message-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-label-lg-inline-message-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-label-lg-inline-message-typography-textCase
      );
    }
  }
}
</style>
