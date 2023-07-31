<template>
  <div
    ref="circular"
    class="p-progress-circular"
    :class="indeterminate && 'p-progress-circular--indeterminate'"
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
      style="transform: rotate(0deg)"
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

<script lang="ts">
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
    },
  },
});
</script>

<style lang="scss" scoped>
.p-progress-circular {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: none;
  width: var(--width, 20px);
  height: var(--height, 20px);
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, -webkit-backdrop-filter !important;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter !important;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
  color: var(--sd-progress-circular-default-text-color);
}

.p-progress-circular > svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.p-progress-circular--indeterminate > svg {
  animation: progressCircularRotate 1.4s linear infinite;
  animation-iteration-count: infinite;
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}

.p-progress-circular--indeterminate .p-progress-circular__overlay {
  animation: progressCircularDash 1.4s linear infinite;
  stroke-linecap: round;
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0px;
  color: var(--sd-progress-circular-default-foreground-color);
}

.p-progress-circular__underlay {
  stroke: var(--sd-progress-circular-default-background-color);
  z-index: 1;
}

.p-progress-circular__overlay {
  stroke: currentColor;
  z-index: 2;
  transition: all 0.6s ease-in-out;
}

@keyframes progressCircularRotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes progressCircularDash {
  0% {
    strokedasharray: '1, 200';
    strokedashoffset: '0px';
  }
  50% {
    strokedasharray: '100, 200';
    strokedashoffset: '-15px';
  }
  100% {
    strokedasharray: '100, 200';
    strokedashoffset: '-125px';
  }
}
</style>
