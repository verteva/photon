<template>
  <component
    :is="type"
    :bind="$attrs"
    :class="classList"
    class="AAAAAAAAAA"
  >
    <slot />
  </component>
</template>
<script lang='ts'>
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'PList',
  
  props: {
    type: {
      type: String as PropType<string>,
      default: 'ul',
      validator(value: string): boolean {
        return ['ul', 'ol'].includes(value) ;
      },
    },
    
    listType: {
      type: String as PropType<string>,
      default: 'circle',
      validator(value: string): boolean {
        return ['circle', 'decimal'].includes(value) ;
      },
    },

    listColor: {
      type: String as PropType<string>,
      default: 'brand2',
      validator(value: string): boolean {
        return ['brand1', 'brand2', 'alert2', 'none'].includes(value) ;
      },
    },
  },

  computed: {
    classList():string[] {      
      return [
        `ph-list-type-${this.listType}`,
        `ph-list-color-${this.listColor}`,
      ]
    },
  },
});
</script>


<style lang="postcss">
ul, ol {
  padding-left: 0.6rem
}

.ph-list-type-circle {
  @apply ph-list-circle;  
}
.ph-list-type-decimal {
  @apply ph-list-decimal;
}

.ph-list-color-brand1 li::marker {
  @apply ph-text-brand1;
}

.ph-list-color-brand2 li::marker {
  @apply ph-text-brand2;
}

.ph-list-color-alert2 li::marker {
  @apply ph-text-alert2;
}

.ph-list-color-none li::marker {
  color: inherit;
}
</style>
