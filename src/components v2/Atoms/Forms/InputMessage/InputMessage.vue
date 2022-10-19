<template>
  <div class="photon-input-message" :class="[size]">
    <p-icon v-if="icon" :name="icon" class="icon" :type="iconSize" />
    <span>{{ message }}</span>
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
import { IconSizeSm, IconSizeXs } from '@/components/Icon/types';

const iconSizeMatrix = {
  [FORM_CONTROL_SIZE.SMALL]: IconSizeXs,
  [FORM_CONTROL_SIZE.MEDIUM]: IconSizeSm,
};

export default Vue.extend({
  name: 'P2InputMessage',
  components: {
    PIcon,
  },
  props: {
    message: {
      type: String as PropType<string>,
      default: '',
    },
    icon: {
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
.photon-input-message {
  display: flex;
  align-items: center;
  color: var(--form-control-items-message-default-text-color);
  margin-top: -10px;
  margin-bottom: 10px;

  .icon {
    margin-right: 4px;
    color: var(--form-control-items-message-default-icon-color) !important ;
  }

  span {
    font-family: var(--form-control-items-message-default-text-font-family);
    font-weight: var(--form-control-items-message-default-text-font-weight);
  }

  &.sm {
    span {
      font-size: calc(
        var(--form-control-items-message-sm-text-typography-fontSize) * 1px
      );
      line-height: var(
        --form-control-items-message-sm-text-typography-lineHeight
      );
      text-decoration: var(
        --form-control-items-message-sm-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-message-sm-text-typography-textCase
      );
      letter-spacing: var(
        --form-control-items-message-sm-text-typography-letterSpacing
      );
    }
  }

  &.lg {
    span {
      font-size: calc(
        var(--form-control-items-message-lg-text-typography-fontSize) * 1px
      );
      line-height: var(
        --form-control-items-message-lg-text-typography-lineHeight
      );
      text-decoration: var(
        --form-control-items-message-lg-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-message-lg-text-typography-textCase
      );
      letter-spacing: var(
        --form-control-items-message-lg-text-typography-letterSpacing
      );
    }
  }
}
</style>
