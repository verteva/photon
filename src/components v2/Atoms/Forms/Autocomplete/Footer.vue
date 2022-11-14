<template>
  <div
    v-if="showFooter"
    class="ph-opacity-0 ph-transition ph-autocomplete__option--footer ph-flex ph-m-0 ph-px-5 ph-py-2 ph-text-sm ph-sticky ph-bottom-0 ph-z-1 ph-bg-white"
    :class="addFooter ? 'ph-opacity-100' : ''"
  >
    <slot name="list-footer"> </slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
export default Vue.extend({
  name: 'Footer',

  props: {
    showFooter: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    addFooter: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>

<style></style>
