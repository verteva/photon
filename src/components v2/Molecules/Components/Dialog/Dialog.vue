<template>
  <div ref="container" class="photon-dialog">
    <div :class="backDropWrapperClassList">
      <div :class="backDropClassList" />
    </div>
    <p2-card
      id="photon-dialog"
      ref="dialog"
      class="dialog-viewbox"
      :class="[viewboxAnimation, size]"
    >
      <div class="ph-absolute ph-top-1 ph-right-2 ph-z-1">
        <p2-button
          ref="cancelIcon"
          button-style="plain"
          @click="eventType = cancel"
        >
          <p-icon name="Cross" type="lg" />
        </p2-button>
      </div>
      <h1 ref="heading" class="ph-text-h2 sm:ph-text-h1 ph-mt-0 ph-mb-4">
        {{ heading }}
      </h1>
      <slot />
      <div class="ph-flex ph-flex-col sm:ph-flex-row ph-mt-2">
        <p2-button
          ref="confirm"
          class="ph-mr-0 ph-mb-4 sm:ph-mb-0 sm:ph-mr-4"
          @click="eventType = confirm"
        >
          {{ confirmLabel }}
        </p2-button>
        <p2-button
          v-if="!singleButton"
          ref="cancel"
          :button-style="secondaryButtonStyle"
          @click="eventType = cancel"
        >
          {{ cancelLabel }}
        </p2-button>
      </div>
    </p2-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
import P2Button from '@/components v2/Atoms/Components/Button';
import P2Card from '@/components v2/Atoms/Components/Card';

import { DialogData } from './types';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { size } = formProps;

export const props = {
  heading: {
    type: String as PropType<string>,
    default: '',
  },
  confirmLabel: {
    type: String as PropType<string>,
    default: 'Yes',
  },

  cancelLabel: {
    type: String as PropType<string>,
    default: 'Cancel',
  },
  singleButton: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  focusIndex: {
    type: Number as PropType<number>,
    default: 1,
  },
  secondaryButtonStyle: {
    type: String as PropType<string>,
    default: 'secondary',
  },
  size,
};

export default Vue.extend({
  name: 'Dialog',

  components: {
    PIcon,
    P2Button,
    P2Card,
  },

  props,

  data(): DialogData {
    return {
      cancel: 'cancel',
      confirm: 'confirm',
      eventType: '',
    };
  },

  computed: {
    backDropWrapperClassList(): string[] {
      return [
        (this as any).eventType === ''
          ? 'ph-animate-fadeIn'
          : 'ph-animate-fadeOut',
      ];
    },
    backDropClassList(): string[] {
      return ['ph-absolute', 'ph-inset-0', 'ph-bg-black', 'ph-opacity-60'];
    },
    viewboxAnimation(): string {
      return (this as any).eventType === ''
        ? 'ph-animate-fadeIn'
        : 'ph-animate-fadeOut';
    },
  },

  watch: {
    eventType(val: string, prevVal: string): void {
      if (!Boolean(prevVal)) {
        (this as any).$emit(val);
      }
    },
  },

  mounted(): void {
    const node = document.getElementById('photon-dialog');
    if (node) {
      node.addEventListener(
        'animationend',
        (this as any).onAnimationEnd,
        false
      );

      const focusIndex = (this as any).focusIndex;
      if (focusIndex >= 0) {
        const focusable = [
          ...node.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ),
        ] as HTMLElement[] | null;
        if (focusable != null && focusable.length > focusIndex) {
          const focusEl = focusable[focusIndex] as HTMLElement;
          focusEl.focus();
        }
      }
    }
  },

  destroyed(): void {
    const node = document.getElementById('photon-dialog');
    if (node) {
      node.removeEventListener('animationend', (this as any).onAnimationEnd);
    }
  },

  methods: {
    onAnimationEnd(e: AnimationEvent): void {
      /*
        TransitionEvent fires for each property that
        is transitioning so check the event is fired
        on the height, so we can set to auto to allow
        for dynamic content adjustments.
      */
      // if (e.propertyName === 'opacity') {

      // }
      if (e.animationName === 'ph-fadeOut') {
        (this as any).$emit('transitionedOut');
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.photon-dialog {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 10;
  display: flex;
  flex-direction: column;

  .dialog-viewbox {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--dialog-viewbox-border-radius);
    background: var(--dialog-viewbox-background);
    width: var(--dialog-viewbox-width);
    margin: var(--dialog-viewbox-margin);
    padding: var(--dialog-viewbox-padding);

    &.sm {
      width: var(--dialog-viewbox-sm-width);
      padding: var(--dialog-viewbox-sm-padding);
    }

    &.md {
      width: var(--dialog-viewbox-sm-width);
      padding: var(--dialog-viewbox-sm-padding);
    }
  }
}
</style>
