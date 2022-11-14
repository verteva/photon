<template>
  <label>{{ noOptionsText }}</label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
export default Vue.extend({
  name: 'NoOptions',

  props: {
    noOptionsText: {
      type: String as PropType<string>,
      default: '',
    },
  },
});
</script>

<style></style>
