<template>
  <div
    ref="card"
    class="card"
    :class="{
      light,
      shadow,
      border,
      rounded,
      'no-padding': noPadding,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export const props = {
  light: {
    type: Boolean,
    default: false,
  },

  shadow: {
    type: Boolean,
    default: false,
  },

  border: {
    type: Boolean,
    default: false,
  },

  rounded: {
    type: Boolean,
    default: true,
  },

  noPadding: {
    type: Boolean,
    default: false,
  },
};

export default {
  name: 'P2Card',

  props,
};
</script>

<style lang="scss" scoped>
@import './src/assets/scss/_themehelpers.scss';

@function getCardStyleProperty($property, $style, $fallback: '') {
  @return getThemeProperty('card', $property, $style, '', $fallback);
}

.card {
  position: relative;
  overflow: hidden;
  background: getCardStyleProperty('background', 'base', #f5f5f5);
  padding: getCardStyleProperty('padding', 'base', 30px);

  &.light {
    background: getCardStyleProperty('background', 'style-light', #fff);
  }

  &.shadow {
    box-shadow: getCardStyleProperty(
      'box-shadow',
      'style-shadow',
      0 1px 2px 0 rgba(0, 0, 0, 0.05)
    );
  }

  &.border {
    border: getCardStyleProperty('border', 'style-border', 1px solid #d7d7d7);
  }

  &.rounded {
    border-radius: getCardStyleProperty('border-radius', 'style-rounded', 10px);
  }

  &.no-padding {
    padding: getCardStyleProperty('padding', 'style-nopadding', 0px);
  }
}
</style>
