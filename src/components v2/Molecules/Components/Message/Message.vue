<template>
  <div ref="ph-message" class="photon-message list" :class="[type, size]">
    <div v-if="!hideIcon && `icon[type]]`" class="ph-message-icon">
      <font-awesome-icon
        v-if="!hideIcon && `icon[type]]`"
        ref="messageIcon"
        :icon="['fal', icon[type]]"
        class="fa-lg fa-fw"
      >
      </font-awesome-icon>
    </div>
    <div class="content">
      <div v-if="title || hasTitleSlot" class="title">
        {{ title }}
        <slot name="title"></slot>
      </div>
      <div v-if="description || hasDescriptionSlot" class="description">
        {{ description }}
        <slot />
        <slot name="description"></slot>
      </div>
      <div v-if="$listeners.click && callToAction">
        <p2-button
          v-if="$listeners.click && callToAction"
          ref="messageButton"
          button-style="primary"
          size="xs"
          class="message-cta"
          @click="$emit('click')"
        >
          {{ callToAction }}
        </p2-button>
      </div>
    </div>
    <div v-if="!hideClose" class="ph-message-close" @click="$emit('close')">
      <font-awesome-icon :icon="['fal', 'xmark']" class="fa-lg fa-fw">
      </font-awesome-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Button from '@/components v2/Atoms/Components/Button';
import {
  MessageSuccess,
  MessageInfo,
  MessageError,
  MessageWarning,
  MessageType,
} from './types';

export const props = {
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

  size: {
    type: String as PropType<string>,
    default: 'xs',
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

  hideIcon: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  hideClose: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

export default Vue.extend({
  name: 'P2Message',

  components: {
    P2Button,
  },

  props,

  computed: {
    icon(): any {
      return {
        success: 'circle-check',
        info: 'circle-info',
        error: 'circle-exclamation',
        warning: 'triangle-exclamation',
      };
    },

    hasTitleSlot() {
      return this.$slots['title'];
    },

    hasDescriptionSlot() {
      return this.$slots['description'] || this.$slots['default'];
    },
  },
});
</script>

<style lang="scss" scoped>
@import './src/assets/scss/main.scss';

$types: 'success', 'info', 'error', 'warning';
$sizes: 'xs', 'sm', 'md';

.photon-message {
  max-width: 768px;
  display: flex;
  align-items: flex-start;
  padding: 0.75em;
  color: var(--sd-theme-fg-default);
  border-width: 1px;
  border-radius: var(--sd-border-radius-default);
  transition: $all-transitions;

  @each $type in $types {
    &.#{$type} {
      background: var(--sd-theme-#{$type}-subtle);
      border-color: var(--sd-theme-#{$type}-muted);
      color: var(--sd-theme-#{$type}-on-subtle);
    }
  }

  @each $size in $sizes {
    &.#{$size} {
      padding: var(--sd-card-#{$size}-padding);
    }
  }

  a {
    color: inherit;
  }

  .ph-message-icon {
    margin-right: 0.75em;
  }

  .ph-message-close {
    margin-left: 0.75em;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
  }

  .title {
    @include token-typography('body', 'bold');
  }

  .description {
    @include token-typography('sm', 'regular');
  }

  .title + .description {
    margin-top: 0.5em;
  }

  .message-cta {
    margin-top: 1em;
  }
}
</style>
