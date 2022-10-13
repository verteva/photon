<template>
  <div class="photon-input-message" :class="[size]">
    <p-icon v-if="icon" :name="icon" class="icon" :type="iconSize" />
    <span>{{ message }}</span>
  </div>
</template>

<script lang="ts">
import PIcon from '@/components/Icon';
import Vue, { PropType } from 'vue';

const iconSizeMatrix = {
  sm: 'xs',
  md: 'sm',
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
      type: String as PropType<string>,
      default: 'sm',
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
