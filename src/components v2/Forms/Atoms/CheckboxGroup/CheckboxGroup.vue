<template>
  <div>
    <P2Checkbox
      v-for="checkbox in items"
      :key="checkbox.label"
      class="checkbox-group-item"
      :name="`${name}-${checkbox.label}`"
      :value="value.include(checkbox.value)"
      :label="checkbox.label"
      :true-value="checkbox.value"
      @input="
        event => $emit('change', { id: checkbox.id, value: checkbox.value })
      "
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Checkbox from '../CheckBox';
import { v4 as uuidv4 } from 'uuid';

export default Vue.extend({
  name: 'CheckboxGroup',

  components: {
    P2Checkbox,
  },

  props: {
    value: {
      type: Array,
      default: (): [] => [],
    },

    items: {
      type: Array,
      default: (): [] => [],
    },

    name: {
      type: String as PropType<string>,
      default: '',
    },
  },

  data() {
    return {
      id: uuidv4(),
    };
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
