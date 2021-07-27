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
  IconProperty,
  IconType,
  IconTypeMedium,
  IconSizeSmall,
  IconSizeMedium,
  IconSizeLarge,
  IconList,
} from './types';

export default Vue.extend({
  name: 'PIcon',

  props: {
    name: {
      type: String as PropType<string>,
      default: '',
      validator(value: string): boolean {
        return (icons as IconList).includes(value) ;
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


  computed: {
    icon():any {
      /* eslint-disable @typescript-eslint/no-var-requires */
      return require(`./icons/${this.name}.vue`).default;
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
