<template>
  <li>
    <div class="ph-item-list">
      <slot />
    </div>
  </li>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'P2Li',
});
</script>

<style lang="scss" scoped>
.ph-item-list {
  margin-left: var(--list-item-margin-left);
}
</style>
