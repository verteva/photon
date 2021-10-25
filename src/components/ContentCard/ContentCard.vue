<template>
  <div
    ref="contentCard"
    v-bind="$attrs"
    class="ph-bg-gradient-light-grey2 ph-rounded-lg ph-transition-opacity ph-duration-300 ph-relative ph-border"
    :class="[
      active ? 'ph-border-brand2 bar-bottom-brand' : 'ph-border-grey9',
      interactive && !disabled && 'ph-cursor-pointer',
      !flex && 'ph-h-height',
      allowOverflow ? 'ph-overflow-visible' : 'ph-overflow-hidden',
    ]"
    v-on="$listeners"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <div
      class="ph-absolute ph-top-0 ph-left-0 ph-right-0 ph-bottom-0 ph-opacity-0 ph-transition-opacity ph-duration-300 ph-bg-brand2"
      :class="[
        interactive && !disabled && hover && breakpoint && 'ph-opacity-5',
        interactive && !disabled && active && 'ph-opacity-10',
      ]"
    />
    <div
      class="ph-relative ph-z-1 ph-transition-color ph-w-full"
      :class="[active && 'ph-text-brand2', padding]"
    >
      <slot />
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  name: 'ContentCard',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    flex: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isInteractive: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: String,
      default: 'ph-p-7', 
    },
    allowOverflow: {
      type: Boolean,
      default: false,
    },
    breakpoint: {
      type: Boolean,
      default: false,
    },
  },
  data(): any {
    return {
      hover: false, 
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
  },
};
</script>
