<template>
  <span ref="text" class="ph-brand-gradient-text">
    <slot />
  </span>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'P2BrandGradientText',
});
</script>

<style lang="scss" scoped>
.ph-brand-gradient-text {
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: var(--gradient-text-base-gradient);
}
</style>
