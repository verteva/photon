<template>
  <div
    :class="{
      disabled,
      'full-width': fullWidth,
      interactive,
    }"
    :tabindex="interactive ? 0 : -1"
    class="ph-accordion-header acc-header"
    @click="$emit('click', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  >
    {{ section }}
    <slot />
    <p-icon
      v-if="complete"
      name="Checkmark"
      type="xs"
      color=""
      data-testid="complete-checkmark"
      class="ph-accordion-checkmark"
    />
    <div
      v-if="openArrows"
      class="ph-accordion-header__icon"
      data-testid="openArrow"
    >
      <p-icon
        name="ChevronDown"
        type="xs"
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
      <p-icon
        :name="!expanded ? openCloseIcons[0] : openCloseIcons[1]"
        type="sm"
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
export default {};
</script>

<script lang="ts" setup>
import PIcon from '@/components/Icon';

defineProps(props);
</script>

<style lang="scss" scoped>
.ph-accordion-header {
  display: flex;
  align-items: center;
  color: var(--accordion-header-color);
  font-family: var(--accordion-header-font-family);
  font-weight: var(--accordion-header-font-weight);
  font-size: var(--accordion-header-font-size);
  text-transform: var(--accordion-header-text-transform);

  padding: var(--accordion-header-mobile-padding);

  @media (min-width: 768px) {
    padding: var(--accordion-header-padding);
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

  .ph-accordion-header-chevron {
    transition: transform 0.2s ease-in-out;
    transform: rotate(-90deg);
    &.expanded {
      transform: rotate(0deg);
    }
  }

  .ph-accordion-header__icon {
    margin-left: auto;
    color: var(--accordion-header-icon-color);
  }

  .ph-accordion-checkmark {
    margin-left: 8px;
    color: var(--accordion-header-checkmark) !important;
  }
}
</style>
