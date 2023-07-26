<template>
  <li>
    <div class="ph-list-item">
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
.ph-list-item {
}
</style>
