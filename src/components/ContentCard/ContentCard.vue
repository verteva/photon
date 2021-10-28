<template>
  <div
    ref="contentCard"
    v-bind="$attrs"
    class="content-card ph-bg-gradient-light-grey2 ph-rounded-lg ph-transition-opacity ph-duration-300 ph-relative ph-border"
    :class="(defaultParentClass, conditionParentClass)"
    v-on="$listeners"
    @mouseover="mouseOver"
    @mouseout="mouseOver"
  >
    <div :class="(conditionChildClass, defaultChildClass)" />
    <div
      class="ph-relative ph-z-1 ph-transition-color ph-w-full"
      :class="[active && 'ph-text-brand2', padding]"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ContentCard',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    flex: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isInteractive: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: 'ph-p-7'
    },
    allowOverflow: {
      type: Boolean,
      default: false
    },
    breakpoint: {
      type: Boolean,
      default: false
    }
  },
  data(): any {
    return {
      hover: false
    };
  },
  computed: {
    interactive(): any {
      if ((this as any).isInteractive) return true;
      else
        return (
          (this as any).$listeners &&
          (this as any).$listeners.click &&
          !(this as any).disabled
        );
    },
    conditionParentClass(): any {
      return [
        (this as any).active ? 'ph-border-brand2 bar-bottom-brand' : 'ph-border-grey9',
        (this as any).interactive && !(this as any).disabled && 'ph-cursor-pointer',
        !(this as any).flex && 'ph-h-height',
        (this as any).allowOverflow ? 'ph-overflow-visible' : 'ph-overflow-hidden'
      ];
    },
    defaultParentClass(): any {
      return [
        'content-card',
        'ph-bg-gradient-light-grey2',
        'ph-rounded-lg',
        'ph-transition-opacity',
        'ph-duration-300',
        'ph-relative ph-border'
      ];
    },
    conditionChildClass(): any {
      return [
        (this as any).interactive &&
          !(this as any).disabled &&
          (this as any).hover &&
          (this as any).breakpoint &&
          'ph-opacity-5',
        (this as any).interactive && !(this as any).disabled && (this as any).active && 'ph-opacity-10'
      ];
    },
    defaultChildClass(): string[] {
      return [
        'ph-absolute',
        'ph-top-0',
        'ph-left-0',
        'ph-right-0',
        'ph-bottom-0',
        'ph-opacity-0',
        'ph-transition-opacity',
        'ph-duration-300',
        'ph-bg-brand2'
      ];
    }
  },
  methods: {
    mouseOver(): void {
      (this as any).hover = !(this as any).hover;
    }
  }
};
</script>

<style lang="postcss" scoped>
.content-card.bar-bottom-brand:after {
  @apply ph-bg-brand2;
  @apply ph-absolute;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
  content: '';
  width: 100%;
  height: 6px;
  bottom: 0;
  left: 0;
  @apply ph-animate-growOut;
}
</style>
