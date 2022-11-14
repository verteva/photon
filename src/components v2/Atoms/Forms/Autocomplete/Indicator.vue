<template>
  <span v-bind="attributes">
    <p-icon
      v-if="!hideOpenIndicator"
      class="openIndicator"
      :name="openIndicatorIcon"
      type="xs"
    />
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
export default Vue.extend({
  name: 'Indicator',
  components: {
    PIcon,
  },
  props: {
    hideOpenIndicator: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    openIndicatorIcon: {
      type: String as PropType<string>,
      default: '',
    },
    attributes: {
      type: Object as PropType<any>,
      default: () => ({}),
    },
  },
});
</script>

<style></style>
