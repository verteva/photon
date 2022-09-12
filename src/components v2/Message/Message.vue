<template>
  <div ref="ph-message" class="photon-message" :class="[type]">
    <p-icon
      ref="messageIcon"
      :name="icon[type]"
      type="lg"
      class="icon"
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
      <p-icon name="Cross" type="lg" class="message-icon" :class="[type]" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../../components/Icon';
import PButton from '../Button';
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
@import './src/assets/scss/_themehelpers.scss';

@function getMessageStyleProperty($property, $style, $state, $fallback: '') {
  @return getThemeProperty('message', $property, $style, $state, $fallback);
}

$types: 'success', 'info', 'error', 'warning';

.photon-message {
  max-width: 48rem; /* 768px */
  display: flex;
  align-items: flex-start;
  color: getMessageStyleProperty('color', 'base', '', black);
  padding: getMessageStyleProperty('padding', 'base', '', 1rem);
  border-radius: getMessageStyleProperty('border-radius', 'base', '', 0);
  border-width: getMessageStyleProperty('border-width', 'base', '', 1px);
  @each $type in $types {
    &.#{$type} {
      background: getMessageStyleProperty('background', 'styles', $type, white);
      border-color: getMessageStyleProperty(
        'border-color',
        'styles',
        $type,
        black
      );
    }
  }
  .icon {
    margin: getMessageStyleProperty('margin', 'styles', 'icon', 0);
    cursor: pointer;
    @each $type in $types {
      &.#{$type} {
        color: getMessageStyleProperty(
          'color',
          'styles',
          $type,
          white
        ) !important;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
  }
  .title {
    font-weight: getMessageStyleProperty('font-weight', 'styles', 'title', 700);
    padding-top: getMessageStyleProperty('padding', 'styles', 'title', 0);
    line-height: getMessageStyleProperty(
      'line-height',
      'styles',
      'title',
      1.25rem
    );
  }
  .description {
    margin: getMessageStyleProperty('margin', 'styles', 'description', 0);
    line-height: getMessageStyleProperty(
      'line-height',
      'styles',
      'description',
      0
    );
  }
  .button {
    margin: getMessageStyleProperty('margin', 'styles', 'button', 0);
  }
}
</style>
