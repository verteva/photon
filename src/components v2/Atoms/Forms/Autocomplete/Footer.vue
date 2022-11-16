<template>
  <div
    v-if="showFooter && addFooter"
    class="ph-autocomplete__option--footer"
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

<style lang="scss">
.ph-autocomplete__option--footer {
  display: flex;
  position: sticky;
  bottom: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin: 0;
  background-color: #ffffff;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0;
}
</style>
