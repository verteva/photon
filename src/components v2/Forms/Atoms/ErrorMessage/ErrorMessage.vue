<template>
  <div class="input-error" :class="{ hidden: !error }">
    <p-icon class="icon" name="Error" :type="iconSize" />
    <div class="text" :class="[size]">
      {{ error }}
    </div>
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
.input-error {
  color: var(--form-control-items-error-default-text-color);
  display: flex;
  align-items: center;
  transform: translate(0, 0);
  transition: 0.3s all;
  opacity: 1;
  min-height: 22px;
  margin-top: 10px;

  &.hidden {
    opacity: 0;
    transform: translate(0, -20px);
  }

  .icon {
    margin-right: 4px;
  }

  .text {
    font-family: var(--form-control-items-error-default-text-font-family);
    font-weight: var(--form-control-items-error-default-text-font-weight);

    &.sm {
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

    &.lg {
      font-size: calc(
        var(--form-control-items-error-lg-text-typography-fontSize) * 1px
      );
      line-height: var(
        --form-control-items-error-lg-text-typography-lineHeight
      );
      letter-spacing: var(
        --form-control-items-error-lg-text-typography-letterSpacing
      );
      padding: var(
        --form-control-items-error-lg-text-typography-paragraphSpacing
      );
      text-decoration: var(
        --form-control-items-error-lg-text-typography-textDecoration
      );
      text-transform: var(
        --form-control-items-error-lg-text-typography-textCase
      );
    }
  }
}
</style>
