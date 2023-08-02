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
  width: 100%;
  flex-direction: column;

  .rule {
    border-top: 1px solid var(--sd-card-light-divider);
    padding: 0 0 1em 0;
  }

  .acc-content {
    width: 100%;
    padding: 0;
  }
}
</style>
