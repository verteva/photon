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
      return ['circle', 'decimal'].includes(value);
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
  & ul,
  ol {
    padding-left: var(--list-base-padding-left);
  }
  & li {
    margin: var(--list-base-margin);
    &::marker {
      color: var(--list-base-color);
    }
  }
  .ph-list-type-circle {
    list-style-type: circle;
  }
  .ph-list-type-decimal {
    list-style-type: decimal;
  }
}
</style>
