<template>
  <div :style="{ color }">
    <component
      :is="icon"
      :width="size.width"
      :height="size.height"
      class="picon"
      :color="color"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import icons from './index';
import {
  IconData,
  IconProperty,
  IconType,
  IconTypeMedium,
} from './types';

const iconNames = Object.keys(icons);
iconNames.push('');

export default Vue.extend({
  name: 'PIcon',

  components: icons,

  props: {
    name: {
      type: String as PropType<string>,
      default: '',
      validator(value: string): boolean {
        return iconNames.includes(value);
      },
    },
    color: {
      type: String as PropType<string>,
      default: 'inherit',
    },
    type: {
      type: String as PropType<IconType>,
      default: IconTypeMedium,
    },
  },

  data(): IconData {    
    return { icons } as IconData;
  },

  computed: {
    icon():string {            
      return this.icons[this.name];
    },
    size():IconProperty {
      const s:IconProperty = {
        width: 30,
        height: 30,
      };
      switch(this.type) {
        case 'large':
          s.width = 50;
          s.height = 50;
          break;
        case 'medium':
          s.width = 30;
          s.height = 30;
          break;
        case 'small':
          s.width = 20;
          s.height = 20;
          break;
      }
      
      return s as IconProperty;
    }
  },
});
</script>
