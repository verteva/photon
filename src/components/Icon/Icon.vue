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
  IconSize,
  IconList,
  IconSizeXs,
  IconSizeSm,
  IconSizeMedium,
  IconSizeLg,
  IconSizeXl,
  IconSizeHuge,
  IconXs,
  IconSm,
  IconMedium,
  IconLg,
  IconXl,
  IconHuge,
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
      type: String as PropType<IconSize>,
      default: IconSizeMedium,
      validator(value: string): boolean {
        return [
          IconSizeXs,
          IconSizeSm,
          IconSizeMedium,
          IconSizeLg,
          IconSizeXl,
          IconSizeHuge,
        ].includes(value) ;
      },
    },
  },


  computed: {
    icon():any {
      /* eslint-disable @typescript-eslint/no-var-requires */
      return require(`./icons/${this.name}.vue`).default;
    },
    size():IconProperty {
      const s:IconProperty = {
        width: IconMedium,
        height: IconMedium,
      };
      switch(this.type) {
        case IconSizeXs:
          s.width = IconXs;
          s.height = IconXs;
          break;
        case IconSizeSm:
          s.width = IconSm;
          s.height = IconSm;
          break;
        case IconSizeLg:
          s.width = IconLg;
          s.height = IconLg;
          break;
        case IconSizeXl:
          s.width = IconXl;
          s.height = IconXl;
          break;
        case IconSizeHuge:
          s.width = IconHuge;
          s.height = IconHuge;
          break;
      }

      return s as IconProperty;
    }
  },
});
</script>
