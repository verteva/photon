<template>
  <component :is="element" class="photon-headline" :class="[size]">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { size } = formProps;
export const props = {
  size,

  element: {
    type: String,
    default: 'h2',
  },
};

export default Vue.extend({
  name: 'P2Headline',
  props,
});
</script>

<style lang="scss" scoped>
.photon-headline {
  word-break: break-word;
}
</style>
