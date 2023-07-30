<template>
  <div ref="container" class="photon-dialog" :class="[size]">
    <p2-back-drop :class="backDropWrapperClassList" />
    <p2-card
      id="photon-dialog"
      ref="dialog"
      light
      class="dialog-viewbox"
      :size="cardSize"
      :class="[viewboxAnimation]"
    >
      <div class="dialog-close">
        <p2-button
          ref="cancelIcon"
          button-style="primary-link"
          icon-left="times"
          size="xs"
          @click="eventType = cancel"
        />
      </div>
      <p2-headline>
        {{ heading }}
      </p2-headline>
      <slot />
      <div class="dialog-buttons">
        <p2-button
          ref="confirm"
          class="dialog-confirm"
          size="sm"
          @click="eventType = confirm"
        >
          {{ confirmLabel }}
        </p2-button>
        <p2-button
          v-if="!singleButton"
          ref="cancel"
          size="sm"
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

  cardSize: {
    type: String as PropType<string>,
    default: 'sm',
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
    default: 'primary-outline',
  },

  size,
};

export default Vue.extend({
  name: 'Dialog',

  components: {
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
    border-radius: var(--sd-card-default-border-radius);
    background: var(--sd-card-light-background-color);
    width: 83.333333%;
    margin: auto;
  }

  .dialog-close {
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 1;
    color: var(--sd-theme-fd-default) !important;
  }

  .photon-headline {
    padding-right: 1.5em;
  }

  .dialog-buttons {
    display: flex;
    flex-direction: column;
    margin: 0;

    .button {
      margin: 1em 0.75em 0 0;
    }
  }

  &.sm {
    .dialog-viewbox {
      width: 80%;
    }

    .dialog-buttons {
      flex-direction: row;
    }
  }

  &.md {
    .dialog-viewbox {
      width: 30rem;
    }

    .dialog-buttons {
      flex-direction: row;
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
