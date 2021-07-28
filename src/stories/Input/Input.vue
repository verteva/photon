<template>
  <div
    class="ph-pb-0"
    :class="fixedErrors && 'ph-pb-7' || 'ph-mb-4'"
  >
    <slot />
    <div
      v-if="error"
      :class="baseClassList"
    >
      <p-icon
        class="ph-mr-1"
        name="Error"
        type="small"
      />
      <p-text sm>
        {{ error }}
      </p-text>
    </div>
  </div>
</template>

<script lang="ts">
import PIcon from '../Icon';
import { PText } from '../Typography';

export default {
  name: 'PInput',
  components: {
    PIcon,
    PText,
  },
  props: {
    error: {
      type: String,
      default: '',
    },
    fixedErrors: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    baseClassList():string[] {
      return [
        this.fixedErrors && 'ph-absolute' || '',
        'ph-flex',
        'ph-items-center',
        'ph-py-1',
        'ph-px-1 ph-text-alert2',
      ];
    }
  }
};
</script>
