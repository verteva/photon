<template>
  <div class="v-select-no-options">{{ text }}</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export const props = {
  text: {
    type: String as PropType<string>,
    default: 'Sorry, no matching options',
  },
};

export default Vue.extend({
  name: 'NoOptions',

  props,
});
</script>

<style lang="scss" scoped>
.v-select-no-options {
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
}
</style>
