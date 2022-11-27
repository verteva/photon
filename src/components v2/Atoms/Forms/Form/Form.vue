<template>
  <form
    ref="p2form"
    :novalidate="novalidate"
    v-bind="$attrs"
    v-on="$listeners"
    @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'P2Form',
  props: {
    novalidate: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit.prevent');
    },
  },
});
</script>
