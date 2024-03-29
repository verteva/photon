<template>
  <div ref="container" :class="baseClassList">
    <div :class="backDropWrapperClassList">
      <div :class="backDropClassList" />
    </div>
    <div id="photon-dialog" ref="dialog" :class="viewboxClassList">
      <div class="ph-absolute ph-top-1 ph-right-2 ph-z-1">
        <p-button
          ref="cancelIcon"
          button-style="plain"
          @click="eventType = cancel"
        >
          <p-icon name="Cross" type="lg" />
        </p-button>
      </div>
      <h1 ref="heading" class="ph-text-h2 sm:ph-text-h1 ph-mt-0 ph-mb-4">
        {{ heading }}
      </h1>
      <slot />
      <div class="ph-flex ph-flex-col sm:ph-flex-row ph-mt-2">
        <p-button
          ref="confirm"
          class="ph-mr-0 ph-mb-4 sm:ph-mb-0 sm:ph-mr-4"
          @click="eventType = confirm"
        >
          {{ confirmLabel }}
        </p-button>
        <p-button
          v-if="!singleButton"
          ref="cancel"
          button-style="secondary"
          outlined
          @click="eventType = cancel"
        >
          {{ cancelLabel }}
        </p-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PIcon from '../Icon';
import PButton from '../Button';

import { DialogData } from './types';

export default {
  name: 'Dialog',

  components: {
    PIcon,
    PButton,
  },

  props: {
    heading: {
      type: String,
      default: '',
    },
    confirmLabel: {
      type: String,
      default: 'Yes',
    },

    cancelLabel: {
      type: String,
      default: 'Cancel',
    },
    singleButton: {
      type: Boolean,
      default: false,
    },
    focusIndex: {
      type: Number,
      default: 1,
    },
  },

  data(): DialogData {
    return {
      cancel: 'cancel',
      confirm: 'confirm',
      eventType: '',
      baseClassList: [
        'ph-fixed',
        'ph-inset-0',
        'ph-z-10',
        'ph-flex',
        'ph-flex-col',
      ],
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
    viewboxClassList(): string[] {
      return [
        (this as any).eventType === ''
          ? 'ph-animate-fadeIn'
          : 'ph-animate-fadeOut',
        'ph-rounded',
        'ph-p-6 sm:ph-p-12',
        'ph-bg-white',
        'ph-relative',
        'ph-w-10/12 sm:ph-w-100',
        'ph-flex',
        'ph-flex-col',
        'ph-m-auto',
      ];
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
};
</script>
