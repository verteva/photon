<template>
  <span v-bind="indicatorAttributes">
    <p-icon
      v-if="!hideOpenIndicator"
      class="openIndicator"
      :name="openIndicatorIcon"
      type="med"
    />
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';

export const props = {
  hideOpenIndicator: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  openIndicatorIcon: {
    type: String as PropType<string>,
    default: 'Apartment',
  },

  indicatorAttributes: {
    type: Object as PropType<any>,
    default: () => ({}),
  },
};

export default Vue.extend({
  name: 'Indicator',
  components: {
    PIcon,
  },
  props,
});
</script>

<style lang="scss" scoped>
.vs__open-indicator {
  color: var(--vselect-indicator-base-svg-icon-color);
}
</style>
