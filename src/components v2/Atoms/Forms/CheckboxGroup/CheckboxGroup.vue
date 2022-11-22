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
import P2Checkbox, { props as CheckboxProps } from '../Checkbox';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { name } = CheckboxProps;
const { size, disabled } = formProps;

export const props = {
  items: {
    type: Array as PropType<any[]>,
    default: (): [] => [],
  },
  // Checkbox props
  name,
  // Global props
  size,
  disabled,
};

export default Vue.extend({
  name: 'CheckboxGroup',
  components: {
    P2Checkbox,
  },
  props,
  created() {
    const $this = this as any;
    if (Boolean($this.label) && $this.$slots.default) {
      console.warn(
        'Checkbox label and Checkbox slot(default) are both defined and will be rendered together. This is probably not intended.'
      );
    }
  },
});
</script>

<style lang="scss" scoped>
.checkbox-group-item {
  &:last-child {
    margin-bottom: 0;
  }

  &.sm {
    margin-bottom: 6px;
  }

  &.md {
    margin-bottom: 8px;
  }
}
</style>
