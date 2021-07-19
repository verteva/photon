<template>
  <div :style="{ color }">
    <component
      :is="icon"
      :width="width"
      :height="height"
      class="picon"
      :color="color"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Checkmark from './svg/Checkmark.svg';
import ChevronRight from './svg/ChevronRight.svg';

const icons = {
  'Checkmark': Checkmark,
  'ChevronRight': ChevronRight,
};

export default Vue.extend({
  name: 'PIcon',

  components: icons,

  props: {
    type: {
      type: String as PropType<string>, // TODO: Make custom type for this
      default: 'Checkmark',
    },
    color: {
      type: String as PropType<string>,
      default: 'blue',
    },
  },

  // TODO: Make custom type for this
  data(): any {
    return {
      icons,
      width: 40,
      height: 40,
    }
  },

  computed: {
    icon():string {
      return this.icons[this.type];
    },
  },
});
</script>
