<template>
  <div ref="container" class="photon-dialog" :class="[size]">
    <p2-back-drop :class="backDropWrapperClassList" />
    <p2-card
      id="photon-dialog"
      ref="dialog"
      class="dialog-viewbox"
      :class="[viewboxAnimation, size]"
    >
      <div class="dialog-close">
        <p2-button
          ref="cancelIcon"
          button-style="plain"
          @click="eventType = cancel"
        >
          <p-icon name="Cross" type="lg" />
        </p2-button>
      </div>
      <p2-headline>
        {{ heading }}
      </p2-headline>

      <slot />
      <div class="dialog-buttons">
        <p2-button
          ref="confirm"
          class="dialog-confirm"
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
import P2BackDrop from '@/components v2/Atoms/Components/BackDrop';
import P2Headline from '@/components v2/Atoms/Components/Headline';

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
    P2BackDrop,
    P2Headline,
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
        (this as any).eventType === '' ? 'animate-fade-in' : 'animate-fade-out',
      ];
    },

    viewboxAnimation(): string {
      return (this as any).eventType === ''
        ? 'animate-fade-in'
        : 'animate-fade-out';
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
      if (e.animationName.indexOf('fadeOut') === 0) {
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
  }

  .dialog-close {
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
    z-index: 1;
  }

  .dialog-buttons {
    display: flex;
    flex-direction: column;
    margin: var(--dialog-buttons-margin);

    .dialog-confirm {
      margin: var(--dialog-buttons-confirm-margin-default);
    }
  }

  &.sm {
    .dialog-viewbox {
      width: var(--dialog-viewbox-sm-width);
      padding: var(--dialog-viewbox-sm-padding);
    }

    .dialog-buttons {
      flex-direction: row;
    }

    .dialog-confirm {
      margin: var(--dialog-buttons-confirm-margin-sm);
    }
  }

  &.md {
    .dialog-viewbox {
      width: var(--dialog-viewbox-md-width);
      padding: var(--dialog-viewbox-md-padding);
    }

    .dialog-buttons {
      flex-direction: row;
    }

    .dialog-confirm {
      margin: var(--dialog-buttons-confirm-margin-md);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.35s cubic-bezier(0.3, 0.28, 0.26, 0.81);
  }

  .animate-fade-out {
    animation: fadeOut 0.35s cubic-bezier(0.3, 0.28, 0.26, 0.81);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
