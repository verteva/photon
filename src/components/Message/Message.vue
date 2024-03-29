<template>
  <div ref="ph-message" :class="classList">
    <p-icon
      ref="messageIcon"
      :name="typeStyle.icon"
      type="lg"
      :class="iconClassList"
    />
    <div class="ph-flex ph-flex-col ph-flex-1">
      <div class="ph-font-bold ph-pt-1 ph-leading-5">
        {{ title }}
      </div>
      <slot />
      <div v-if="description" class="ph-mt-2 ph-mb-4 ph-leading-5">
        <div>
          {{ description }}
        </div>
        <p-button
          v-if="$listeners.click && callToAction"
          ref="messageButton"
          class="ph-mt-4"
          @click="$emit('click')"
        >
          {{ callToAction }}
        </p-button>
      </div>
    </div>
    <div v-if="!hideClose" @click="$emit('close')">
      <p-icon name="Cross" type="lg" :class="iconClassList" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import PButton from '../Button';
import {
  MessageStyleType,
  MessageSuccess,
  MessageInfo,
  MessageError,
  MessageWarning,
  MessageType,
} from './types';

export default Vue.extend({
  name: 'Message',

  components: {
    PIcon,
    PButton,
  },

  props: {
    type: {
      type: String as PropType<MessageType>,
      default: 'success',
      validator(value: string): boolean {
        return (
          [MessageSuccess, MessageInfo, MessageError, MessageWarning].indexOf(
            value
          ) !== -1
        );
      },
    },

    title: {
      type: String as PropType<string>,
      default: '',
    },

    description: {
      type: String as PropType<string>,
      default: '',
    },

    callToAction: {
      type: String as PropType<string>,
      default: '',
    },

    hideClose: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  data() {
    return {};
  },

  computed: {
    typeStyle(): MessageStyleType {
      switch (this.type) {
        case MessageSuccess:
        default:
          return {
            icon: 'Success',
            classes: ['ph-border-alert3', 'ph-bg-alert-light3'],
          };

        case MessageInfo:
          return {
            icon: 'Info',
            classes: ['ph-border-brand2', 'ph-bg-brand-light2'],
          };

        case MessageError:
          return {
            icon: 'Error',
            classes: ['ph-border-alert2', 'ph-bg-alert-light2'],
          };

        case MessageWarning:
          return {
            icon: 'Alert',
            classes: ['ph-border-alert1', 'ph-bg-alert-light1'],
          };
      }
    },

    iconClassList(): string[] {
      let iconColor = 'inherit';

      if (this.type === MessageSuccess) {
        iconColor = 'ph-text-alert3';
      }

      if (this.type === MessageInfo) {
        iconColor = 'ph-text-brand2';
      }

      if (this.type === MessageError) {
        iconColor = 'ph-text-alert2';
      }

      if (this.type === MessageWarning) {
        iconColor = 'ph-text-alert1';
      }

      return ['ph-mr-4', 'ph-cursor-pointer', iconColor];
    },

    classList(): string[] {
      return [
        'ph-max-w-3xl',
        'ph-flex',
        'ph-items-start',
        'ph-text-grey1',
        'ph-p-4',
        'ph-rounded-lg',
        'ph-border',
        ...this.typeStyle.classes,
      ];
    },
  },

  mounted() {
    const node = (this as any).$refs['ph-message'];
    if (node) {
      node.addEventListener(
        'animationend',
        (this as any).onAnimationEnd,
        false
      );
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

      if (e.animationName === 'ph-fadeOut') {
        (this as any).$emit('transitionedOut');
      }
    },
  },
});
</script>
