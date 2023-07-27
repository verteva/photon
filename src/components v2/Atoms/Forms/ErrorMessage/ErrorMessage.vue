<template>
  <div class="input-error" :class="[{ hidden: !error }, size]">
    <div class="icon-wrapper">
      <font-awesome-icon :icon="['fal', 'circle-exclamation']" class="fa-fw" />
    </div>
    <div class="text">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { size } = formProps;

export const props = {
  error: {
    type: String as PropType<string>,
    default: '',
  },
  size,
};

export default Vue.extend({
  name: 'PInputError',
  components: {},
  props,
});
</script>

<style lang="scss" scoped>
.input-error {
  color: var(--sd-form-control-items-error-default-text-color);
  display: flex;
  align-items: flex-start;
  margin-top: 10px;

  &.hidden {
    display: none;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
  }

  .text {
    font-family: var(--sd-form-control-items-error-default-text-font-family);
    font-weight: var(--sd-form-control-items-error-default-text-font-weight);
  }

  &.md {
    .text {
      font-size: var(
        --sd-form-control-items-error-md-text-typography-font-size
      );
      line-height: var(
        --sd-form-control-items-error-md-text-typography-line-height
      );
      letter-spacing: var(
        --sd-form-control-items-error-md-text-typography-letter-spacing
      );
      padding: var(
        --sd-form-control-items-error-md-text-typography-paragraph-spacing
      );
      text-decoration: var(
        --sd-form-control-items-error-md-text-typography-text-decoration
      );
      text-transform: var(
        --sd-form-control-items-error-md-text-typography-text-case
      );
    }
    .icon-wrapper {
      font-size: var(
        --sd-form-control-items-error-md-text-typography-font-size
      );
      height: calc(
        var(--sd-form-control-items-error-md-text-typography-font-size) * 1.5
      );
      width: calc(
        var(--sd-form-control-items-error-md-text-typography-font-size) * 1.5
      );
    }
  }
}
</style>
