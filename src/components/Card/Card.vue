<template>
  <div ref="card" :class="classList">
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
    
    noPadding: {
      type: Boolean,
      default: false,
    },
   
   rounded: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classList(): string[] {
      return [
        (this as any).light ? 'ph-bg-white' : 'ph-bg-grey6',
        (this as any).shadow ? 'ph-shadow' : 'ph-shadow-none',
        (this as any).rounded ? 'ph-rounded-lg' : '',
        (this as any).noPadding ? '' : 'ph-p-9',
        'ph-relative',
        'ph-overflow-hidden',
      ];
    },
  },
};
</script>
