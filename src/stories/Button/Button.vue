<template>
  <button
    ref="elRef"
    v-bind="$attrs"
    :type="type"
    :class="classList"
    :style="styleList"
    :disabled="isDisabled"
    v-on="$listeners"
  >
    <slot
      v-for="(_, name) in $slots"
      :slot="name"
      :name="name"
    />
    <div class="flex items-center justify-center">
      <div 
        class="uppercase"
        :class="['transition', submitting ? 'opacity-0' : 'opacity-1']"
      >
        <slot name="default">
          {{ label }}
        </slot>
      </div>
      <div
        v-if="submitting"
        class="h-6 w-6 flex absolute"
        :class="['transition', submitting ? 'opacity-1' : 'opacity-0']"
      >
        <div class="animate-spin h-full w-full flex">
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
              stroke="white"
              stroke-width="3.8095238095238093"
              stroke-dasharray="125.664"
              stroke-dashoffset="125.66370614359172px"
              class="progress-circular"
            />
          </svg>
        </div>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  ButtonStylelist,
  ButtonStylePrimary,
  ButtonSmall,
  ButtonMedium,
  ButtonLarge,
  TypeSubmit,
} from "./types";
// import * as tailwind from '@/../tailwind.config.js'

export default Vue.extend({
  name: 'PButton',

  props: {
    label: {
      type: String,
      default: 'Continue',
    },
    buttonStyle: {
      type: String,
      default: ButtonStylePrimary,
    },
    type: {
      type: String,
      default: TypeSubmit,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    submitting: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: ButtonMedium,
      validator(value: string): boolean {
        return [ButtonSmall, ButtonMedium, ButtonLarge].indexOf(value) !== -1;
      },
    },
  },

  data(): any {
    return {
      baseClassList: [
        'rounded-3xl',
        'border-0',
        'py-2',
        'px-5',
        'relative',
        'items-center',
        'justify-center',
        'transition',
        'text-sm',
      ],
    }
  },

  computed: {
    classList(): string[] {
      const a: string[] = [
        ...this.baseClassList,
        ...this.buttonStyleClasslist[
          this.buttonStyle as keyof ButtonStylelist
        ],
        ...this.disabledStyles,
      ];
      return a;
    },
    disabledStyles (): string[] {
      return [
        this.disabled ?
          'bg-gradient-to-b from-greyDark to-greyMid text-greyLight' :
          'text-white',
        this.disabled && 'cursor-not-allowed',
        this.submitting && 'cursor-not-allowed',
      ];
    },
    styleList(): string[] {
      return [];
    },
    isDisabled(): boolean {
      return this.submitting || this.disabled;
    },
    buttonStyleClasslist(): ButtonStylelist {
      return {
        primary: [
          'bg-brandPrimary', 
          !this.submitting ? 'hover:bg-brandPrimaryh' : '',
        ],
        secondary: ['bg-brandSecondary'],
        outline: [
          'bg-transparent',
          'text-greyDark',
          'border',
          'border-greyBorder',
          'hover:bg-greyBorder'
        ],
      };
    },
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
.cta-button {
  min-width: 78px;
  height: 44px;

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
}

button{
  position: relative;
  overflow: hidden;
}

button:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, .5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}

button:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

</style>
