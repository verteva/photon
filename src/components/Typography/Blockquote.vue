<template>
  <blockquote
    class="ph-pl-6 ph-relative"
    :class="`ph-bloquote-${color}`"
  >
    <slot />
  </blockquote>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'Blockquote',

  props: {
    color: {
      type: String as PropType<string>,
      default: 'brand2'
    },
  },
});
</script>

<style lang="postcss">
blockquote::before {
  content: '';
  position: absolute;
  width: 4px;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 3px;
}

.ph-bloquote-brand2::before {
  @apply ph-bg-brand2;
}

</style>