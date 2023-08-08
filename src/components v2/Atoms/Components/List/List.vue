<template>
  <component
    :is="type"
    ref="list"
    class="ph-list"
    :class="['ph-list-type-' + listStyle]"
  >
    <slot />
  </component>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export const props = {
  type: {
    type: String as PropType<string>,
    default: 'ul',
    validator(value: string): boolean {
      return ['ul', 'ol'].includes(value);
    },
  },

  listStyle: {
    type: String as PropType<string>,
    default: 'circle',
    validator(value: string): boolean {
      return ['circle', 'disc', 'decimal'].includes(value);
    },
  },
};

export default Vue.extend({
  name: 'P2List',
  props,
});
</script>

<style lang="scss" scoped>
.ph-list {
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0;

  li {
    position: relative;
    margin-top: var(--sd-list-item-md-padding-top);
    margin-bottom: var(--sd-list-item-md-padding-bottom);
    margin-left: 2em;

    &::marker {
      color: inherit;
    }
  }

  &.ph-list-type-circle {
    list-style-type: circle;
  }

  &.ph-list-type-disc {
    list-style-type: disc;
  }

  &.ph-list-type-decimal {
    list-style-type: decimal;
  }
}
</style>
