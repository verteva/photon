<template>
  <div
    class="ph-pb-7"
  >
    <slot />
    <div
      v-if="errors.length && !hideErrors"
      :class="baseClassList"
    >
      <p-icon
        class="ph-mr-1"
        name="Error"
        type="sm"
      />
      <p-text sm>
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
      default: ():[] => [],
    },
  },
  computed: {
    errorsMessages():string {
      return this.errors.join(', ');
    },
    baseClassList():string[] {
      return [
        'photon-input-error',
        'ph-absolute',
        'ph-animate-fadeDown',
        'ph-flex',
        'ph-items-center',
        'ph-py-1',
        'ph-px-1 ph-text-alert2',
      ];
    },
  }
});
</script>
