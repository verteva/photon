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
        class="ph-z-10 ph-w-full"
        :class="[
          'ph-transition',
          submitting ? 'ph-opacity-0' : 'ph-opacity-1',
          upperCase ? 'ph-uppercase' : ''
        ]"
      >
        <slot name="default">
          {{ label }}
        </slot>
      </div>
      <div
        v-if="submitting"
        class="ph-flex ph-absolute"
        :class="[
          'ph-transition',
          submitting ? 'ph-opacity-1' : 'ph-opacity-0',
          size === 'xs' ? 'ph-h-4 ph-w-4' : 'ph-h-6 ph-w-6',
        ]"
      >
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
      <div :class="hoverBackgroundStyles" />
      <div :class="disabledBackgroundStyles" />
    </div>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import {
  ButtonStylelist,
  ButtonStylePrimary,
  ButtonStyleSecondary,
  ButtonStylePlain,
  ButtonXSmall,
  ButtonSmall,
  ButtonMedium,
  ButtonLarge,
  TypeButton,
} from "./types";

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
      default: TypeButton,
    },
    outlined: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    valid: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    upperCase: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    block: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    submitting: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<string>,
      default: ButtonMedium,
      validator(value: string): boolean {
        return [ButtonXSmall, ButtonSmall, ButtonMedium, ButtonLarge].indexOf(value) !== -1;
      },
    },
  },

  data(): any {
    return {
      baseClassList: [
        'ph-rounded-3xl',
        'ph-group',
        'ph-border',
        'ph-border-solid',
        'ph-relative',
        'ph-relative',
        'ph-items-center',
        'ph-justify-center',
        'ph-transition',
        'ph-shadow-none',
        'focus:ph-outline-none',
        'focus:ph-shadow-brand',
        this.block && 'ph-w-full' || '',
      ],
    }
  },

  computed: {
    classList(): string[] {
      const a: string[] = [
        ...this.baseClassList,
        ...this.buttonStyles,
        this.isDisabled && 'ph-cursor-not-allowed',
      ];
      return a;
    },
    sizing(): string[] {
      switch(this.size) {
        case ButtonXSmall:
          return [
            'ph-text-xxs',
            'ph-py-1',
            'ph-px-2.5',
          ];
          break;
      }
      switch(this.size) {
        case ButtonSmall:
          return [
            'ph-text-xs',
            'ph-py-1.5',
            'ph-px-3.5',
          ];
          break;
      }

      return [
        'ph-text-sm',
        'ph-py-2.5',
        'ph-px-5',
      ];
    },
    buttonStyles(): string[] {
      const common = [
        'ph-rounded-3xl',
        'ph-tracking-wider',
        ...this.sizing,
      ];
      
      switch (this.buttonStyle as keyof ButtonStylelist) {
        case ButtonStylePrimary:
        default:
          return [
            ...common,
            ...this.primaryButtonStyles
          ];
          break;
        case ButtonStyleSecondary:
          return [
            ...common,
            ...this.secondaryButtonStyles,
          ];
          break;
        case ButtonStylePlain:
          return this.plainButtonStyles;
          break;
      }
    },
    primaryButtonStyles (): string[] {
      if (!this.outlined) {
        return [
          'ph-bg-gradient-brand2',
          !this.disabled ?
            'ph-text-white ph-border-brand2' :
            'ph-text-grey4 ph-border-grey4',
        ];
      }

      if (this.outlined) {
        return [
          'ph-border-grey4',
          !this.disabled ? 'ph-text-brand2 hover:ph-text-grey1' : 'ph-text-grey4 ph-border-grey4',
        ];
      }
      
      if (this.disabled) {
        return ['ph-text-grey4 ph-bg-white ph-border-grey4'];
      }
    

      return [];
    },
    secondaryButtonStyles (): string[] {
      if (!this.outlined) {
        return [
          'ph-bg-gradient-light-grey',
          !this.disabled ? 'ph-text-grey hover:ph-text-brand2 ph-border-titanium hover:ph-border-brand2' : 'ph-text-grey4 ph-border-grey5',
        ];
      }

      if (this.outlined) {
        return [
          !this.disabled ? 'ph-text-grey1 ph-border-grey4 hover:ph-border-grey3' : 'ph-text-grey4 ph-border-grey4',
        ];
      }    

      return [];
    },
    plainButtonStyles (): string[] {
      return [
        'ph-p-0',
        'ph-border-none',
      ]
    },
    hoverBackgroundStyles (): string[] {
      return [
        'ph-absolute',
        'ph-top-0',
        'ph-left-0',
        'ph-w-full',
        'ph-h-full',
        'ph-transition',
        'ph-duration-300',
        'ph-opacity-0',
        (this.buttonStyle === ButtonStylePrimary) && 'ph-bg-black' || '',
        (this.buttonStyle === ButtonStyleSecondary) && 'ph-bg-white' || '',
        (!this.disabled && this.buttonStyle === ButtonStylePrimary) ? 'group-hover:ph-opacity-20' : '',
        (!this.disabled && this.buttonStyle === ButtonStyleSecondary) ? 'group-hover:ph-opacity-100' : '',
      ];
    },
    disabledBackgroundStyles (): string[] {
      const styles:string[] = [
        'ph-absolute',
        'ph-top-0',
        'ph-left-0',
        'ph-w-full',
        'ph-h-full',
        'ph-transition ph-duration-300',
        this.disabled ? 'ph-opacity-100' : 'ph-opacity-0',
      ];

      switch (this.buttonStyle) {
        case ButtonStylePrimary:
          styles.push('ph-bg-grey3');
          break;
        case ButtonStyleSecondary:
          styles.push('ph-bg-white');
          break;
      }

      return styles;
    },
    styleList(): string[] {
      return [];
    },
    isDisabled(): boolean {
      return this.submitting || this.disabled;
    },
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
// .cta-button {
//   min-width: 78px;
//   height: 44px;

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
// }

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
