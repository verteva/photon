<template>
  <Card
    ref="contentCard"
    class="content-card"
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
  </Card>
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
import Card from '@/components v2/Atoms/Components/Card';

defineProps(props);
</script>

<style lang="scss" scoped>
.content-card {
  background: var(--content-card-background);
  border-radius: var(--content-card-border-radius);
  transition: all ease-in-out 300ms;
  position: relative;
  border: var(--content-card-border);
  overflow: hidden;

  &:after {
    background: var(--content-card-active-after-background);
    animation-fill-mode: both;
    transition: transform 0.35s cubic-bezier(0.3, 0.28, 0.26, 0.81);
    animation-direction: normal, reverse;
    transform-origin: 50% 100%;
    content: '';
    width: 100%;
    height: 6px;
    bottom: 0;
    left: 0;
    position: absolute;
    transform: scaleX(0) translateY(4px);
  }

  .content-card-content {
    padding: calc(var(--content-card-content-padding) * 1px);
    position: relative;
    z-index: 1;
    transition: color ease-in-out 300ms;
    width: 100%;
  }

  &.active {
    border-color: var(--content-card-active-border-color);

    .content-card-content {
      color: var(--content-card-active-color);
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
    background: var(--content-card-backdrop-background);
  }

  &.bordered {
    border: var(--content-card-bordered-border);
    background: var(--content-card-bordered-background);
    .content-card-backdrop {
      background: var(--content-card-bordered-hover-background);
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
