<template>
  <span
    v-if="!hideOpenIndicator && openIndicatorIcon && iconFamily"
    v-bind="indicatorAttributes"
  >
    <font-awesome-icon
      :icon="[iconFamily, openIndicatorIcon]"
      class="ph-vselect-indicator"
      :class="['fa-fw', iconClasses]"
    />
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export const props = {
  hideOpenIndicator: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  openIndicatorIcon: {
    type: String as PropType<string>,
    default: 'chevron-down',
  },

  indicatorAttributes: {
    type: Object as PropType<any>,
    default: () => ({}),
  },

  iconFamily: {
    type: String as PropType<string>,
    default: 'fal',
  },

  iconClasses: {
    type: String as PropType<string>,
    default: '',
  },
};

export default Vue.extend({
  name: 'Indicator',
  components: {},
  props,
});
</script>

<style lang="scss" scoped>
.vs__open-indicator,
.openIndicator {
  color: var(--vselect-indicator-base-svg-icon-color);
}
</style>
