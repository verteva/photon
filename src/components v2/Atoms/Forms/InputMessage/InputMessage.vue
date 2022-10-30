<template>
  <div class="photon-input-message" :class="[size]">
    <div v-if="icon" class="icon-wrapper">
      <p-icon :name="icon" class="icon" :type="iconSize" />
    </div>
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
import { IconSizeSm, IconSizeXsm } from '@/components/Icon/types';

const iconSizeMatrix = {
  [FORM_CONTROL_SIZE.SMALL]: IconSizeXsm,
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
  color: var(--form-control-items-message-default-text-color);
  margin-top: -10px;
  margin-bottom: 10px;

  .icon {
    color: var(--form-control-items-message-default-icon-color) !important ;
  }

  .icon-wrapper {
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    .icon-wrapper {
      height: calc(
        var(--form-control-items-message-sm-text-typography-fontSize) * 1.5px
      );
      width: calc(
        var(--form-control-items-message-sm-text-typography-fontSize) * 1.5px
      );
    }
  }

  &.md {
    span {
      font-size: calc(
        var(--form-control-items-message-md-text-typography-fontSize) * 1px
      );
      line-height: var(
        --form-control-items-message-md-text-typography-lineHeight
      );
      text-decoration: var(
        --form-control-items-message-md-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-message-md-text-typography-textCase
      );
      letter-spacing: var(
        --form-control-items-message-md-text-typography-letterSpacing
      );
    }
    .icon-wrapper {
      height: calc(
        var(--form-control-items-message-md-text-typography-fontSize) * 1.5px
      );
      width: calc(
        var(--form-control-items-message-md-text-typography-fontSize) * 1.5px
      );
    }
  }
}
</style>
