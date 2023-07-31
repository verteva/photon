<template>
  <p2-card
    ref="contentCard"
    class="content-card"
    light
    no-padding
    :class="[
      {
        disabled,
        active,
        interactive: isInteractive && !disabled,
        'allow-overflow': allowOverflow,
      },
      type,
    ]"
    @click.native="$emit('click')"
  >
    <div class="content-card-backdrop" />
    <div class="content-card-content">
      <slot />
    </div>
  </p2-card>
</template>

<script lang="ts">
export const props = {
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isInteractive: {
    type: Boolean,
    default: false,
  },
  allowOverflow: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: '',
  },
};
export default {};
</script>

<script setup lang="ts">
import P2Card from '@/components v2/Atoms/Components/Card';

defineProps(props);
</script>

<style lang="scss" scoped>
.content-card {
  background: var(--sd-card-light-background-color);
  border-radius: var(--sd-card-default-border-radius);
  transition: all ease-in-out 300ms;
  position: relative;
  border: 1px solid transparent;
  overflow: hidden;

  &:after {
    background: var(--sd-theme-primary-default);
    animation-fill-mode: both;
    transition: transform 0.35s cubic-bezier(0.3, 0.28, 0.26, 0.81);
    animation-direction: normal, reverse;
    transform-origin: 50% 100%;
    content: '';
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    position: absolute;
    transform: scaleX(0) translateY(4px);
  }

  .content-card-content {
    padding: var(--sd-box-padding-default);
    position: relative;
    z-index: 1;
    transition: color ease-in-out 300ms;
    width: 100%;
  }

  &.active {
    border-color: var(--sd-theme-primary-default);

    .content-card-content {
      color: var(--sd-theme-primary-default);
    }
    &:after {
      transform: scaleX(1) translateY(0);
    }
  }

  .content-card-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 300ms;
    background: var(--sd-theme-bg-muted);
  }

  &.bordered {
    border: 1px solid var(--sd-theme-primary-default);
    background: white;

    .content-card-backdrop {
      background: var(--sd-theme-primary-muted);
    }
  }

  &.interactive {
    cursor: pointer;
    &:hover {
      .content-card-backdrop {
        opacity: 0.5;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
  }

  &.allow-overflow {
    overflow: visible;
  }
}

@keyframes grow-out {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
