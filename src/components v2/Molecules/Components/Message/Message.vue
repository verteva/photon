<template>
  <div ref="ph-message" class="photon-message" :class="[type]">
    <p-icon
      ref="messageIcon"
      :name="icon[type]"
      type="lg"
      class="icon"
      color=""
      :class="[type]"
    />
    <div class="content">
      <div class="title">
        {{ title }}
      </div>
      <slot />
      <div v-if="description" class="description">
        <div>
          {{ description }}
        </div>
        <p-button
          v-if="$listeners.click && callToAction"
          ref="messageButton"
          class="button"
          @click="$emit('click')"
        >
          {{ callToAction }}
        </p-button>
      </div>
    </div>
    <div v-if="!hideClose" @click="$emit('close')">
      <p-icon name="Cross" type="lg" class="icon" :class="[type]" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
import PButton from '@/components v2/Atoms/Components/Button';
import {
  MessageSuccess,
  MessageInfo,
  MessageError,
  MessageWarning,
  MessageType,
} from './types';

export default Vue.extend({
  name: 'P2Message',

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
    icon(): any {
      return {
        success: 'Success',
        info: 'Info',
        error: 'Error',
        warning: 'Alert',
      };
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
<style lang="scss" scoped>
$types: 'success', 'info', 'error', 'warning';

.photon-message {
  max-width: 48rem; /* 768px */
  display: flex;
  align-items: flex-start;
  color: var(--message-base-color);
  padding: var(--message-base-padding);
  border-radius: var(--message-base-border-radius);
  border-width: var(--message-base-border-width);

  @each $type in $types {
    &.#{$type} {
      background: var(--message-styles-#{$type}-background);
      border-color: var(--message-styles-#{$type}-border-color);
    }
  }
  .icon {
    margin: var(--message-components-icon-margin);
    cursor: pointer;
    @each $type in $types {
      &.#{$type} {
        color: var(--message-styles-#{$type}-color);
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
  }

  .title {
    font-weight: var(--message-components-title-font-weight);
    padding: var(--message-components-title-padding);
    line-height: var(--message-components-title-line-height);
  }

  .description {
    margin: var(--message-components-description-margin);
    line-height: var(--message-components-description-line-height);
  }

  .button {
    margin: var(--message-components-button-margin);
  }
}
</style>
