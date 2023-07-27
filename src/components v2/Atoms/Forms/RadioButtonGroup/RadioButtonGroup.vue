<template>
  <div class="radio-wrapper" :style="numRows" role="radiogroup">
    <P2RadioButton
      v-for="(item, index) in items"
      :id="`${item.label}-${id}`"
      :key="`${item.label}-${id}`"
      :checked="index === selectedIndex"
      :label="item.label"
      :disabled="disabled"
      :icon="item.icon"
      :icon-classes="item.iconClasses"
      :icon-family="item.iconFamily"
      :centered="item.centered"
      :bottom-bar="item.bottomBar"
      :name="name"
      :style="
        item.fullWidth
          ? { gridColumn: `1 / span ${rows}` }
          : { gridColumn: 'auto / span 1' }
      "
      @click="() => $emit('click', index)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import P2RadioButton from '../RadioButton';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  items: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  rows: {
    type: Number as PropType<number>,
    default: 3,
  },
  selectedIndex: {
    type: Number as PropType<number>,
    default: -1,
  },
  name: {
    type: String as PropType<string>,
    default: '',
  },
  // Global props
  disabled,
};

export default Vue.extend({
  name: 'PRadioGroup',
  components: {
    P2RadioButton,
  },
  props,
  data() {
    return {
      id: uuidv4(),
    };
  },
  computed: {
    numRows(): string {
      return `grid-template-rows: repeat(${this.rows}, 1fr);`;
    },
  },
});
</script>
<style lang="scss" scoped>
.radio-wrapper {
  display: grid;
  gap: 20px;
  grid-auto-columns: minmax(0, 1fr);
}

.ph-radio-button-grid-column {
  grid-column: auto / span 1;
}

@media screen and (min-width: 640px) {
  .radio-wrapper {
    grid-auto-flow: column;
  }
}
</style>
