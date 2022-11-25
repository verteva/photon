<template>
  <label>{{ text }}</label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export const props = {
  text: {
    type: String as PropType<string>,
    default: '',
  },
};

export default Vue.extend({
  name: 'NoOptions',

  props,
});
</script>
