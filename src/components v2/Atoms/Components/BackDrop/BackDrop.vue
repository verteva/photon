<template>
  <div class="photon-back-drop">
    <div class="back-drop" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'P2BackDrop',
});
</script>

<style lang="scss" scoped>
.back-drop {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: #000;
  opacity: 0.6;
}
</style>
