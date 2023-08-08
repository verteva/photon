<!-- Note: Migrated to OB native! -->
<template>
  <blockquote class="ph-blockuote">
    <slot />
  </blockquote>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PBlockquote',
  props: {},
});
</script>

<style lang="scss" scoped>
.ph-blockuote {
  position: relative;
  padding-left: 20px;
  margin: 1em 0;

  &:before {
    content: '';
    position: absolute;
    width: 4px;
    top: 0;
    left: 0;
    bottom: 0;
    border-radius: 3px;
    background: var(--sd-theme-primary-default, currentColor);
  }
}
</style>
