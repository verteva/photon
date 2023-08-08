<template>
  <div class="photon-input-message" :class="[size]">
    <div v-if="icon" class="icon-wrapper">
      <font-awesome-icon
        ref="inputMessageIcon"
        :icon="[iconFamily, icon]"
        class="fa-fw"
      />
    </div>
    <span>{{ message }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { size } = formProps;

export const props = {
  message: {
    type: String as PropType<string>,
    default: '',
  },
  icon: {
    type: String as PropType<string>,
    default: '',
  },
  iconFamily: {
    type: String as PropType<string>,
    default: 'fal',
  },
  size,
};

export default Vue.extend({
  name: 'P2InputMessage',
  components: {},
  props,
});
</script>

<style lang="scss" scoped>
.photon-input-message {
  display: flex;
  color: var(--sd-form-control-items-message-default-text-color);
  margin-top: -10px;
  margin-bottom: 10px;

  .icon {
    color: var(--sd-form-control-items-message-default-icon-color);
  }

  .icon-wrapper {
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-family: var(--sd-form-control-items-message-default-text-font-family);
    font-weight: var(--sd-form-control-items-message-default-text-font-weight);
  }

  &.md {
    span {
      font-size: var(
        --sd-form-control-items-message-md-text-typography-font-size
      );
      line-height: var(
        --sd-form-control-items-message-md-text-typography-line-height
      );
      text-decoration: var(
        --sd-form-control-items-message-md-text-typography-text-decoration
      );
      text-transform: var(
        --sd-form-control-items-message-md-text-typography-text-case
      );
      letter-spacing: var(
        --sd-form-control-items-message-md-text-typography-letter-spacing
      );
    }
    .icon-wrapper {
      font-size: var(
        --sd-form-control-items-message-md-text-typography-font-size
      );
      height: calc(
        var(--sd-form-control-items-message-md-text-typography-font-size) * 1.5
      );
      width: calc(
        var(--sd-form-control-items-message-md-text-typography-font-size) * 1.5
      );
    }
  }
}
</style>
