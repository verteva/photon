<template>
  <div class="photon-input-message">
    <p-icon v-if="icon" :name="icon" class="icon" :type="size" />
    <span>{{ message }}</span>
  </div>
</template>

<script lang="ts">
import PIcon from '@/components/Icon';
import Vue, { PropType } from 'vue';

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
});
</script>

<style lang="scss" scoped>
.photon-input-message {
  display: flex;
  align-items: center;
  color: var(--input-message-base-color);
  padding: var(--input-message-base-padding);
  margin-top: calc(var(--input-message-base-margin-top) * -1);
  margin-bottom: var(--input-message-base-margin-top);

  .icon {
    margin-right: 4px;
    color: var(--input-message-base-icon-color) !important ;
  }

  span {
    font-size: var(--input-message-base-font-size);
    font-family: var(--input-message-base-font-family);
    font-weight: var(--input-message-base-font-weight);
    line-height: var(--input-message-base-line-height);
  }
}
</style>
