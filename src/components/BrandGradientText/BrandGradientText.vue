<template>
  <span
    ref="text"
    class="ph-brand-gradient-text ph-inline-block ph-bg-clip-text ph-text-transparent"
  >
    <slot />
  </span>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BrandGradientText',
});
</script>
