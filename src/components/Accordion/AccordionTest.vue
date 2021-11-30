<template>
  <div>
    <slot name="default" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import { v4 as uuidv4 } from 'uuid';
import { AccordionElementHeights, AccordionData } from './types';

export default Vue.extend({
  name: 'PAccordion',

  components: {},

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
hr {
  border: none !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
}

.acc-header button:focus-visible {
  outline: 4px dashed black;
}

/* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
.acc-header button:focus:not(:focus-visible) {
  outline: none;
  box-shadow: 1px 1px 5px rgba(1, 1, 0, 0.7);
}
</style>
