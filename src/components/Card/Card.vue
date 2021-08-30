<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card',

  props: {
    light: {
      type: Boolean,
      default: false,
    },

    shadow: {
      type: Boolean,
      default: false,
    },
  },
 
  computed: {
    classList():string[] {
      return [      
        (this as any).light ? 'ph-bg-white' : 'ph-bg-grey6',
        (this as any).shadow ? 'ph-shadow' : 'ph-shadow-none',
        'ph-rounded-lg',
        'ph-relative',
        'ph-overflow-hidden',
        'ph-p-9',
      ]
    },
  },
};
</script>
