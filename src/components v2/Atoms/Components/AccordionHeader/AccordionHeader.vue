<template>
  <div
    v-if="hasHeaderContent"
    :class="{
      disabled,
      'full-width': fullWidth,
      'ph-accordion-header-empty': !section && !$slots.default,
      'ph-accordion-header-has-content': section || $slots.default,
      interactive,
    }"
    :tabindex="interactive ? 0 : -1"
    class="ph-accordion-header acc-header"
    @click="$emit('click', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  >
    <div class="ph-accordion-header-content">
      {{ section }}
      <slot />
    </div>
    <font-awesome-icon
      v-if="complete"
      class="ph-accordion-checkmark"
      data-testid="complete-checkmark"
      :icon="['fal', 'check']"
    />
    <div
      v-if="openArrows"
      class="ph-accordion-header__icon"
      data-testid="openArrow"
    >
      <font-awesome-icon
        :icon="['fal', !expanded ? 'chevron-down' : 'chevron-up']"
        class="ph-accordion-header-chevron"
        :class="{
          expanded,
        }"
      />
    </div>
    <div
      v-if="!openArrows && openCloseIcons.length === 2"
      class="ph-accordion-header__icon"
    >
      <font-awesome-icon
        :icon="['fal', !expanded ? openCloseIcons[0] : openCloseIcons[1]]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

export const props = {
  fullWidth: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  complete: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  expanded: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  openArrows: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  openCloseIcons: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  section: {
    type: String as PropType<string>,
    default: '',
  },
  interactive: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};
export default {
  computed: {
    hasHeaderContent() {
      return this.section || this.$slots.default;
    },
  },
};
</script>

<script lang="ts" setup>
defineProps(props);
</script>

<style lang="scss">
@import './src/assets/scss/main.scss';

.ph-accordion-header {
  display: flex;
  align-items: center;
  width: 100%;

  &.ph-accordion-header-empty {
    padding-bottom: 0 !important;

    .ph-accordion-checkmark,
    .ph-accordion-header__icon {
      display: none;
    }
  }

  &.interactive {
    cursor: pointer;
  }

  &.disabled {
    cursor: not-allowed;
  }

  &.full-width {
    width: 100%;
  }

  .ph-accordion-header__icon {
    margin-left: auto;
    color: var(--sd-theme-fg-default);
  }

  .ph-accordion-checkmark {
    margin-left: 8px;
    color: var(--sd-theme-success-default);
  }
}

.ph-accordion-header-content {
  @include token-heading('h5');
  width: 100%;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>
