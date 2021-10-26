<template>
  <span class="ph-bg-gradient-brand1h ph-inline-block ph-bg-clip-text ph-text-transparent">
    <slot />
  </span>
</template>
<script lang='ts'>
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'BrandGradientText',
});
</script>
