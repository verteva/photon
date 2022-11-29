<template>
  <div v-if="showFooter && addFooter" class="ph-autocomplete__option--footer">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export const props = {
  showFooter: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  addFooter: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

export default Vue.extend({
  name: 'Footer',

  props,
});
</script>

<style lang="scss">
.ph-autocomplete__option--footer {
  background-color: var(--vselect-footer-base-background-color);
  padding: var(--vselect-footer-base-padding);
  margin: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  position: sticky;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  font-size: var(--vselect-footer-base-font-size);
}
</style>
