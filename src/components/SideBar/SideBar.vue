<template>
  <nav
    ref="sideBar"
    v-bind="$attrs"
    class="side-bar"
    :class="(defaultParentClass, conditionParentClass)"
    :style="{
      '--width': width,
      '--height': height,
      '--position': app ? 'fixed' : 'relative',
      '--zIndex': app ? '6' : '0',
    }"
    v-on="$listeners"
  >
    <div ref="sideBarContent" class="side-bar__content">
      <slot></slot>
    </div>
  </nav>
</template>
<script lang="ts">
import { PropType } from 'vue';
export default {
  name: 'SideBar',
  props: {
    mobileBreakPoint: {
      type: Number as PropType<number>,
      default: 0,
    },
    width: {
      type: String as PropType<string>,
      default: '290px',
    },
    height: {
      type: String as PropType<string>,
      default: '100%',
    },
    app: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.side-bar {
  @apply ph-block;
  @apply ph-flex-col;
  @apply ph-overflow-hidden;
  @apply ph-max-w-full;
  @apply ph-top-0;
  width: var(--width, 290px);
  height: var(--height, 100%);
  position: var(--position, relative);
  z-index: var(--zIndex, 0);
}

.side-bar__content {
  @apply ph-height-full;
}
</style>
