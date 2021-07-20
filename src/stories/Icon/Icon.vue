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
import icons from './icons';
import {
  IconData,
  IconProperty,
  IconType,
  IconTypeMedium,
  IconSizeSmall,
  IconSizeMedium,
  IconSizeLarge,
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
        width: IconSizeMedium,
        height: IconSizeMedium,
      };
      switch(this.type) {
        case 'large':
          s.width = IconSizeLarge;
          s.height = IconSizeLarge;
          break;
        case 'medium':
          s.width = IconSizeMedium;
          s.height = IconSizeMedium;
          break;
        case 'small':
          s.width = IconSizeSmall;
          s.height = IconSizeSmall;
          break;
      }
      
      return s as IconProperty;
    }
  },
});
</script>
