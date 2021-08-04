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
    <div class="ph-flex ph-items-center ph-justify-center">
      <div 
        class="ph-uppercase"
        :class="['ph-transition', submitting ? 'ph-opacity-0' : 'ph-opacity-1']"
      >
        <slot name="default">
          {{ label }}
        </slot>
      </div>
      <div
        v-if="submitting"
        class="ph-h-6 ph-w-6 ph-flex ph-absolute"
        :class="['ph-transition', submitting ? 'ph-opacity-1' : 'ph-opacity-0']"
      >
        <div class="ph-animate-spin ph-h-full ph-w-full ph-flex">
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
import Vue, { PropType } from 'vue';
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
      type: String as PropType<string>,
      default: 'Continue',
    },
    buttonStyle: {
      type: String as PropType<string>,
      default: ButtonStylePrimary,
    },
    type: {
      type: String as PropType<string>,
      default: TypeSubmit,
    },
    outlined: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    valid: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    submitting: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<string>,
      default: ButtonMedium,
      validator(value: string): boolean {
        return [ButtonSmall, ButtonMedium, ButtonLarge].indexOf(value) !== -1;
      },
    },
  },

  data(): any {
    return {
      baseClassList: [
        'ph-rounded-3xl',
        'ph-border-0',
        'ph-py-2',
        'ph-px-5',
        'ph-relative',
        'ph-items-center',
        'ph-justify-center',
        'ph-transition',
        'ph-text-sm',
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
        this.disabled && 'ph-bg-grey3 ph-text-grey4',
        this.disabled && 'ph-cursor-not-allowed',
        this.submitting && 'ph-cursor-not-allowed',
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
          this.outlined ? 
            'ph-text-brand2' : 
            'ph-text-white',
          this.outlined ? 
            'ph-bg-white ph-border ph-border-grey5' :
            'ph-bg-gradient-brand2 ph-border ph-border-brand2',
          !this.submitting ? 'hover:ph-bg-brand2h' : '',
        ],
        secondary: [
          'ph-border',
          'ph-text-grey1',
          this.outlined ? 
            'ph-bg-white ph-border ph-border-grey5' : 'ph-bg-gradient-light-grey  ph-border-titanium',
        ],
        outline: [
          'ph-bg-transparent',
          'ph-text-grey1',
          'ph-border',
          'ph-border-greyBorder',
          'ph-hover:bg-greyBorder'
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
