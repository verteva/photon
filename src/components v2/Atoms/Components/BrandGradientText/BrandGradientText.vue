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
  color: transparent;
  background: var(--gradient-text-base-gradient);
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
