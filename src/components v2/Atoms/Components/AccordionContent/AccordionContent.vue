<template>
  <div class="ph-accordion-content">
    <div
      v-if="!noHeadingRule"
      class="rule"
      data-testid="accordion-header-rule"
    />
    <div class="acc-content">
      <slot name="default" />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

export const props = {
  noHeadingRule: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
};

export default {};
</script>

<script lang="ts" setup>
defineProps(props);
</script>

<style lang="scss" scoped>
.ph-accordion-content {
  display: flex;
  position: relative;
  flex-direction: column;

  .rule {
    border-bottom: var(--accordion-content-rule-border);
    margin: var(--accordion-content-rule-margin);
  }
  .acc-content {
    width: 100%;
    padding: var(--accordion-content-padding);
  }
}
</style>
