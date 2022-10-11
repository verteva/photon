<template>
  <div class="photon-message">
    <p-icon v-if="icon" :name="icon" class="icon" :type="size" />
    <span>{{ message }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PIcon from '@/components/Icon';

export default Vue.extend({
  name: 'P2InputMessage',
  components: {
    PIcon,
  },
  props: {
    message: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'sm',
    },
  },
});
</script>

<style lang="scss" scoped>
.photon-message {
  display: flex;
  align-items: center;
  color: var(--input-message-base-color);

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
