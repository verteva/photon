<template>
  <div class="input-error" :class="{ hidden: !error }">
    <p-icon class="icon" name="Error" :type="size" />
    <div class="text">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import PIcon from '@/components/Icon';
import Vue, { PropType } from 'vue';

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
});
</script>

<style lang="scss" scoped>
.input-error {
  color: var(--input-error-base-color);
  display: flex;
  align-items: center;
  transform: translate(0, 0);
  transition: 0.3s all;
  opacity: 1;
  padding: var(--input-error-base-padding);
  min-height: var(--input-error-base-min-height);
  margin-top: 10px;

  &.hidden {
    opacity: 0;
    transform: translate(0, -20px);
  }

  .icon {
    margin-right: 4px;
  }

  .text {
    font-family: var(--input-error-base-font-family);
    font-size: var(--input-error-base-font-size);
    font-weight: var(--input-error-base-font-weight);
    line-height: var(--input-error-base-line-height);
  }
}
</style>
