<template>
  <li :bind="$attrs">
    <div class="ph-ml-3">
      <slot />
    </div>
  </li>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PLi',
});
</script>
