<template>
  <div class="container" :class="['ph-transition', loaderClassList]">
    <div class="ph-animate-spin ph-h-full ph-w-full ph-flex ph-z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
        style="transform: rotate(0deg)"
        class="h-full w-full"
      >
        <circle
          fill="transparent"
          cx="43.80952380952381"
          cy="43.80952380952381"
          r="20"
          stroke="currentColor"
          stroke-width="3.8095238095238093"
          stroke-dasharray="125.664"
          stroke-dashoffset="125.66370614359172px"
          class="progress-circular"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'Loader',
  props: {
    size: {
      type: String as PropType<string>,
      default: 'medium',
    },
  },
  computed: {
    loaderClassList(): string[] {
      const classes = [
        'ph-left-1/2 ph-top-1/2',
        (this.size === 'medium' && 'ph-h-6 ph-w-6 ph--ml-3 ph--mt-3') || '',
        (this.size === 'small' && 'ph-h-5 ph-w-5 ph--ml-2.5 ph--mt-2.5') || '',
        (this.size === 'xs' && 'ph-h-4 ph-w-4 ph--ml-2 ph--mt-2') || '',
      ];
      return classes;
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  position: absolute;
}
.progress-circular {
  animation: circular-dash 2.2s ease-in-out infinite;
  stroke-linecap: round;
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0px;
}

@keyframes circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -125px;
  }
}
</style>
