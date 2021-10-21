<template>
  <div
    ref="circular"
    class="p-progress-circular"
    :class="baseClassList"
    :style="{
      '--width': size+'px',
      '--height': size+'px',
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
      type: Number as PropType<number>,
      default: 20,
    },
    color: {
      type: String as PropType<string>,
      default: 'grey2',
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
        "ph-relative",
        "ph-transition",
        "ph-shadow-none",
        "ph-outline-none",
        "ph-text-"+this.color,
        this.indeterminate ? "p-progress-circular--indeterminate" : null,
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

.p-progress-circular {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
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
  -webkit-animation: progress-circular-rotate 1.4s linear infinite;
          animation: progress-circular-rotate 1.4s linear infinite;
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}

.p-progress-circular--indeterminate .p-progress-circular__overlay {
  -webkit-animation: progress-circular-dash 1.4s ease-in-out infinite;
          animation: progress-circular-dash 1.4s ease-in-out infinite;
  stroke-linecap: round;
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0px;
}

.p-progress-circular__info {
  align-items: center;
  display: flex;
  justify-content: center;
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

@-webkit-keyframes progress-circular-dash {
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

@keyframes progress-circular-dash {
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

@-webkit-keyframes progress-circular-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes progress-circular-rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
