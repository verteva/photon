<template>
  <component :is="el" :class="classList">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import {
  TextElementType,
  TextElementDiv,
  TextElementSpan,
  TextElementParagraph,
} from './types';

export default Vue.extend({
  name: 'PText',

  props: {
    xl: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    lg: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    sm: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    xs: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    el: {
      type: String as PropType<TextElementType>,
      default: TextElementDiv,
      validator(value: string): boolean {
        return [TextElementDiv, TextElementSpan, TextElementParagraph].includes(
          value
        );
      },
    },
  },

  computed: {
    classList() {
      this.validateProps();

      if (this.xl) {
        return 'ph-text-xl';
      }
      if (this.lg) {
        return 'ph-text-lg';
      }
      if (this.sm) {
        return 'ph-text-sm';
      }
      if (this.xs) {
        return 'ph-text-xs';
      }

      return '';
    },
  },
  methods: {
    validateProps() {
      /*
        Throw error is component is passes conflicting size props.
        Can only pass one (or none) size prop max
      */
      const sizeProps = ['xl', 'lg', 'sm', 'xs'].filter(
        (size) => (this as any)[size]
      );

      if (sizeProps.length > 1) {
        console.warn(`WARNING! You have passed more than 1 size prop to <PText>.

          The <PText> component will prioritise size props cascading in the following order:
          xl, lg, sm, xs.
        `);
      }
    },
  },
});
</script>
