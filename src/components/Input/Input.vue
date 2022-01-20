<template>
  <div>
    <slot />
    <div :class="baseClassList">
      <p-icon
        class="ph-mr-1"
        :class="errors.length && !hideErrors ? 'ph-opacity-1' : 'ph-opacity-0'"
        name="Error"
        type="sm"
      />
      <p-text sm class="ph-min-h-1.5em">
        {{ errorsMessages }}
      </p-text>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import { PText } from '../Typography';

export default Vue.extend({
  name: 'PInput',
  components: {
    PIcon,
    PText,
  },
  props: {
    hideErrors: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    errors: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
  },
  computed: {
    errorsMessages(): string {
      return this.errors.join(', ');
    },
    baseClassList(): string[] {
      return [
        'photon-input-error',
        'ph-text-sm',
        'ph-min-h-1.5em',
        'ph-animate-fadeDown',
        'ph-flex',
        'ph-items-center',
        'ph-py-1',
        'ph-px-1 ph-text-alert2',
        this.errors.length && !this.hideErrors
          ? 'ph-opacity-1'
          : 'ph-opacity-0',
      ];
    },
  },
});
</script>
