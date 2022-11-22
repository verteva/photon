<template>
  <div class="ph-toast-wrapper" :class="[xPos, yPos]">
    <div class="ph-toast-container">
      <transition-group name="list" @before-leave="beforeLeave">
        <p2-message
          v-for="{ id, ...toast } in toasts"
          :key="id"
          v-bind="toast"
          class="ph-mb-2"
          @close="$emit('close', id)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Message from '@/components v2/Molecules/Components/Message/Message.vue';
import { Toast } from './types';

export const props = {
  toasts: {
    type: Array as PropType<Toast[]>,
    default: () => [],
  },

  yPos: {
    type: String as PropType<string>,
    default: 'top',
  },

  xPos: {
    type: String as PropType<string>,
    default: 'center',
  },
};

export default Vue.extend({
  name: 'P2Toast',

  components: {
    P2Message,
  },

  props,

  methods: {
    beforeLeave(el: HTMLElement): void {
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(
        el
      );

      el.style.left = `${el.offsetLeft - parseFloat(marginLeft)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop)}px`;
      el.style.width = width;
      el.style.height = height;
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-toast-wrapper {
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;

  &.top {
    top: 10px;
  }
  &.bottom {
    bottom: 10px;
  }
  &.left {
    align-items: flex-start;
  }
  &.right {
    align-items: flex-end;
  }
  &.center {
    align-items: center;
  }

  .ph-toast-container {
    pointer-events: auto;
  }
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter {
  opacity: 0;
  transform: translate(0, -30px);
}

.list-leave-to {
  opacity: 0;
  transform: translate(0, 20px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
