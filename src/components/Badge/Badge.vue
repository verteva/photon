<template>
  <div>
    <slot>
    </slot>
    <span class="photon-badge__wrapper">
      <span
        class="photon-badge"
        :class="baseClassList"
        :style="{
          '--width': width,
          '--height': height,
          '--radius': tile? '0px': borderRadius,
        }"
      >
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'PBadge',
  props: {
    bottom: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    left: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    overlap: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    inline: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    tile: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    width: {
      type: String as PropType<string>,
      default: '20px',
    },
    height: {
      type: String as PropType<string>,
      default: '20px',
    },
    borderRadius: {
      type: String as PropType<string>,
      default: '100%',
    },
  },


  data(): any {    
    return {
      baseClassList: [
        'ph-absolute',
        'ph-text-center',
        'ph-bg-brand2',
        'ph-whitespace-nowrap',
      ],
    };
  },
});
</script>
<style lang="postcss" scoped>
.photon-badge{
  width: var(--width, 20px);
  height: var(--height, 20px);
  border-radius: var(--radius, 100%);
}
</style>
