<template>
  <div
    v-if="showFooter && hasFooterSlot"
    class="ph-autocomplete__option--footer"
  >
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
};

export default Vue.extend({
  name: 'Footer',
  props,

  computed: {
    hasFooterSlot() {
      return !!this.$slots.default;
    },
  },
});
</script>

<style lang="scss">
.ph-autocomplete__option--footer {
  background-color: var(--sd-dropdown-item-default-background-color);
  padding-left: var(--sd-input-text-md-padding-left);
  padding-right: var(--sd-input-text-md-padding-right);
  padding-top: var(--sd-input-text-md-padding-top);
  padding-bottom: var(--sd-input-text-md-padding-bottom);
  margin: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  position: sticky;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  color: var(--sd-dropdown-item-default-text-color);
  border-top: 1px solid var(--sd-dropdown-item-seperator-border-color);
}
</style>
