<template>
  <h2 class="photon-headline" :class="[size]">
    <slot />
  </h2>
</template>

<script lang="ts">
import Vue from 'vue';

import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { size } = formProps;
export const props = {
  size,
};

export default Vue.extend({
  name: 'P2Headline',
  props,
});
</script>

<style lang="scss" scoped>
.photon-headline {
  margin: var(--headline-default-margin);
  font-size: var(--headline-default-font-size);
  line-height: var(--headline-default-line-height);
  letter-spacing: var(--headline-default-letter-spacing);
  word-break: break-word;

  &.sm {
    font-size: var(--headline-sm-font-size);
  }

  &.md {
    font-size: var(--headline-md-font-size);
  }
}
</style>
