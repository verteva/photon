<template>
  <button
    ref="elRef"
    v-bind="$attrs"
    :type="type"
    class="cta-button"
    :class="classList"
    :style="styleList"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot
      v-for="(_, name) in $slots"
      :slot="name"
      :name="name"
    />
    <div class="flex items-center justify-center">
      <div :class="[submitting ? 'opacity-0' : 'opacity-1']">
        {{ label }}
      </div>
      <div
        class="h-6 w-6 flex absolute"
        :class="[submitting ? 'opacity-1' : 'opacity-0']"
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
import {
  defineComponent,
  reactive,
  computed,
  PropType,
  ref,
} from "@vue/composition-api";
import {
  ButtonStylelist,
  Props,
  ButtonStylePrimary,
  // ButtonStyleSecondary,
  // ButtonStyleOutline,
  ButtonType,
  ButtonSmall,
  ButtonMedium,
  ButtonLarge,
  ButtonSize,
  TypeSubmit,
  // TypeButton,
  HTMLType,
  Setup,
} from "./types";
// import * as tailwind from '@/../tailwind.config.js'

const baseClassList: string[] = [
  'rounded-3xl',
  'border-0',
  'py-2',
  'px-4',
  'flex',
  'relative',
  'items-center',
  'justify-center',
];

const buttonStyleClasslist: ButtonStylelist = {
  primary: ["bg-brandPrimary"],
  secondary: ["bg-brandSecondary"],
  outline: ["bg-transparent"],
};

export default defineComponent({
  name: "PButton",

  props: {
    label: {
      type: String,
      default: 'Continue',
    },
    buttonStyle: {
      type: String as PropType<ButtonType>,
      default: ButtonStylePrimary,
    },
    type: {
      type: String as PropType<HTMLType>,
      default: TypeSubmit,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    submitting: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: ButtonMedium,
      validator(value: string): boolean {
        return [ButtonSmall, ButtonMedium, ButtonLarge].indexOf(value) !== -1;
      },
    },
  },

  setup(
    _: Props,
    { emit }: any
  ): Setup  {
    const props: Props = reactive(_);
    const elRef = ref();
    const styleList = ref([]);

    const classList: any = computed(() => {
      return [
        ...baseClassList,
        ...buttonStyleClasslist[
          props.buttonStyle as keyof ButtonStylelist
        ],
        props.disabled && 'bg-gradient-to-b from-greyDark to-greyMid',
        props.disabled && 'cursor-not-allowed',
        props.disabled ? 'text-greyLight' : 'text-white',
      ];
    });

    const onClick: any = function (): void {
      emit("click");
    };

    return {
      elRef,
      onClick,
      classList,
      styleList,
    };
  },
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
</style>
