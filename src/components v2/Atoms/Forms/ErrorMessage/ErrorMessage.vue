<template>
  <div class="input-error" :class="[{ hidden: !error }, size]">
    <div class="icon-wrapper">
      <p-icon class="icon" name="Error" :type="iconSize" />
    </div>
    <div class="text">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import PIcon from '@/components/Icon';
import Vue, { PropType } from 'vue';
import {
  FORM_CONTROL_SIZE,
  FORM_CONTROL_SIZE_TYPE,
} from '@/utils/constants/FormControlConstants';
import validators from '@/utils/validators';
import { IconSizeSm, IconSizeXsm } from '@/components/Icon/types';

const iconSizeMatrix = {
  [FORM_CONTROL_SIZE.SMALL]: IconSizeXsm,
  [FORM_CONTROL_SIZE.MEDIUM]: IconSizeSm,
};

export default Vue.extend({
  name: 'PInputError',
  components: {
    PIcon,
  },
  props: {
    error: {
      type: String as PropType<string>,
      default: '',
    },
    size: {
      type: String as PropType<FORM_CONTROL_SIZE_TYPE>,
      default: FORM_CONTROL_SIZE.MEDIUM,
      validator: validators.includes(Object.values(FORM_CONTROL_SIZE)),
    },
  },
  computed: {
    iconSize(): string {
      return iconSizeMatrix[this.size];
    },
  },
});
</script>

<style lang="scss" scoped>
.input-error {
  color: var(--form-control-items-error-default-text-color);
  display: flex;
  transform: translate(0, 0);
  transition: 0.3s all;
  opacity: 1;
  min-height: 22px;
  margin-top: 10px;

  &.hidden {
    opacity: 0;
    transform: translate(0, -20px);
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
  }

  .text {
    font-family: var(--form-control-items-error-default-text-font-family);
    font-weight: var(--form-control-items-error-default-text-font-weight);
  }

  &.sm {
    .text {
      font-size: calc(
        var(--form-control-items-error-sm-text-typography-fontSize) * 1px
      );
      line-height: var(
        --form-control-items-error-sm-text-typography-lineHeight
      );
      letter-spacing: var(
        --form-control-items-error-sm-text-typography-letterSpacing
      );
      padding: var(
        --form-control-items-error-sm-text-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-error-sm-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-error-sm-text-typography-textCase
      );
    }
    .icon-wrapper {
      height: calc(
        var(--form-control-items-error-sm-text-typography-fontSize) * 1.5px
      );
      width: calc(
        var(--form-control-items-error-sm-text-typography-fontSize) * 1.5px
      );
    }
  }

  &.md {
    .text {
      font-size: calc(
        var(--form-control-items-error-md-text-typography-fontSize) * 1px
      );
      line-height: var(
        --form-control-items-error-md-text-typography-lineHeight
      );
      letter-spacing: var(
        --form-control-items-error-md-text-typography-letterSpacing
      );
      padding: var(
        --form-control-items-error-md-text-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-error-md-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-error-md-text-typography-textCase
      );
    }
    .icon-wrapper {
      height: calc(
        var(--form-control-items-error-md-text-typography-fontSize) * 1.5px
      );
      width: calc(
        var(--form-control-items-error-md-text-typography-fontSize) * 1.5px
      );
    }
  }
}
</style>
