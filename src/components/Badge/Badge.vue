<template>
  <span class="photon-badge" :class="classList">
    <span>
      <slot> </slot>
    </span>
    <span
      ref="badgeWrapper"
      class="photon-badge__wrapper"
      :style="{
        '--position': inline ? 'relative' : 'absolute',
        '--width': width,
        '--height': height,
        '--radius': tile ? '0px' : borderRadius,
        '--inset': inset
      }"
    >
      <span ref="badge" class="photon-badge__badge" :class="badgeClassList">
        <slot name="badge"> </slot>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'PBadge',
  props: {
    bottom: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    left: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    overlap: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    inline: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    tile: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    width: {
      type: String as PropType<string>,
      default: '20px'
    },
    height: {
      type: String as PropType<string>,
      default: '20px'
    },
    borderRadius: {
      type: String as PropType<string>,
      default: '100%'
    },
    bgColorClass: {
      type: String as PropType<string>,
      default: 'ph-bg-brand2'
    },
    badgeTextSize: {
      type: String as PropType<string>,
      default: 'xs'
    },
    show: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },

  computed: {
    badgeClassList(): string[] {
      return [
        'ph-items-center',
        'ph-inline-flex',
        'ph-bg-current',
        'ph-text-white',
        'ph-items-center',
        'ph-justify-center',
        'ph-text-center',
        'ph-p-1',
        'ph-origin-center',
        'ph-transition-all',
        'ph-ease-out',
        'ph-duration-300',
        this.bgColorClass as string,
        'ph-text-' + this.badgeTextSize,
        'ph-leading-none',
        'ph-transform',
        this.show ? 'photon-badge--show' : 'photon-badge--hide'
      ];
    },
    classList(): string[] {
      const a: string[] = [
        ...(this.baseClassList as string),
        this.inline && 'photon-badge--inline'
      ];
      return a;
    },
    baseClassList(): string[] {
      return ['ph-items-center'];
    },
    inset() {
      const calc = this.overlap ? ' calc(100% - 12px)' : ' calc(100% - 4px)';
      return (
        !this.inline &&
        (this.bottom ? calc : ' auto') +
          (this.left ? calc : ' auto') +
          (this.bottom ? ' auto' : calc) +
          (this.left ? ' auto' : calc)
      );
    }
  }
});
</script>
<style lang="postcss" scoped>
.photon-badge {
  @apply ph-inline-block;
  @apply ph-relative;
}
.photon-badge__wrapper {
  @apply ph-w-full;
  @apply ph-h-full;
  @apply ph-top-0;
  @apply ph-left-0;
  @apply ph-pointer-events-none;
  @apply ph-flex-1;
  @apply ph-flex-grow-0;
  position: var(--position, absolute);
}
.photon-badge__badge {
  position: var(--position, absolute);
  min-width: 20px;
  width: var(--width, 20px);
  height: var(--height, 20px);
  border-radius: var(--radius, 100%);
  inset: var(--inset, 'auto auto calc(100% - 4px) calc(100% - 4px)');
}
.photon-badge--inline {
  @apply ph-inline-flex;
  @apply ph-items-center;
  @apply ph-justify-center;
}
.photon-badge--hide {
  @apply ph-opacity-0;
  --tw-scale-x: 0 !important;
  --tw-scale-y: 0 !important;
}
.photon-badge--show {
  @apply ph-opacity-100;
  --tw-scale-x: 1 !important;
  --tw-scale-y: 1 !important;
}
</style>
