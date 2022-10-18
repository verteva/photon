<template>
  <div>
    <P2Checkbox
      v-for="(checkbox, index) in items"
      :key="checkbox.label"
      class="checkbox-group-item"
      :size="size"
      :disabled="disabled"
      :name="`${name}-${checkbox.label}`"
      :value="checkbox.value"
      :label="checkbox.label"
      @input="$emit('input', { index, value: $event })"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Checkbox from '../Checkbox';

export default Vue.extend({
  name: 'CheckboxGroup',

  components: {
    P2Checkbox,
  },

  props: {
    items: {
      type: Array,
      default: (): [] => [],
    },

    name: {
      type: String as PropType<string>,
      default: '',
    },

    size: {
      type: String as PropType<string>,
      default: 'md',
    },

    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  created() {
    const $this = this as any;
    if (!!$this.label && $this.$slots.default) {
      console.warn(
        'Checkbox label and Checkbox slot(default) are both defined and will be rendered together. This is probably not intended.'
      );
    }
  },
});
</script>

<style lang="scss" scoped>
.checkbox-group-item {
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
