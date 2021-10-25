<template>
  <div
    ref="circular"
    class="p-progress-circular"
    :class="baseClassList"
    :style="{
      '--width': size,
      '--height': size,
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="22.22222222222222 22.22222222222222 44.44444444444444 44.44444444444444"
      style="transform: rotate(0deg);"
    >
      <circle
        v-if="underlay"
        fill="transparent"
        cx="44.44444444444444"
        cy="44.44444444444444"
        r="20"
        stroke-width="4.444444444444445"
        stroke-dasharray="125.664"
        stroke-dashoffset="0"
        class="p-progress-circular__underlay"
      ></circle>
      <circle
        fill="transparent"
        cx="44.44444444444444"
        cy="44.44444444444444"
        r="20"
        stroke-width="4.444444444444445"
        stroke-dasharray="125.664"
        stroke-dashoffset="125.66370614359172px"
        class="p-progress-circular__overlay"
      ></circle>
    </svg>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';

export default Vue.extend({

  name: 'ProgressCircular',
  props: {
    indeterminate: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<string>,
      default: '20px',
    },
    value: {
      type: String as PropType<string>,
      default: '',
    },
    underlay: {
      type: Boolean as PropType<boolean>,
      default: false,
    }
  },

  data(): any {
    return {
      baseClassList: [
        'ph-relative',
        'ph-inline-flex',
        'ph-justify-center',
        'ph-align-middle',
        'ph-items-center',
        'ph-transition',
        'ph-shadow-none',
        'ph-outline-none',
        this.indeterminate && 'p-progress-circular--indeterminate',
      ],
    };
  },
});
</script>

<style lang="postcss" scoped>
.p-progress-circular {
  width: var(--width, 20px);
  height: var(--height, 20px);
}

.p-progress-circular > svg {
  @apply ph-w-full;
  @apply ph-h-full;
  @apply ph-m-auto;
  @apply ph-absolute;
  @apply ph-top-0;
  @apply ph-bottom-0;
  @apply ph-left-0;
  @apply ph-right-0;
  @apply ph-z-0;
}

.p-progress-circular--indeterminate > svg {
  @apply ph-animate-progressCircularRotate;
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}

.p-progress-circular--indeterminate .p-progress-circular__overlay {
  @apply ph-animate-progressCircularDash;
  stroke-linecap: round;
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0px;
}

.p-progress-circular__underlay {
  stroke: rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.p-progress-circular__overlay {
  stroke: currentColor;
  z-index: 2;
  transition: all 0.6s ease-in-out;
}
</style>
