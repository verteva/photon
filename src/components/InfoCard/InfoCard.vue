<template>
  <div :class="classList">
    <div v-if="brandBar" :class="brandBarClassList" />
    <div class="ph-bg-white">
      <div v-if="heading" class="ph-bg-grey10 ph-w-full ph-relative">
        <div class="ph-p-5" :class="!brandBar ? 'ph-pl-9' : ''">
          <PBrandGradientText>
            <span class="ph-text-2xl ph-font-bold">
              {{ heading }}
            </span>
          </PBrandGradientText>
        </div>
        <hr class="ph-bg-alert2 ph-border-t-1 ph-border-grey5" />

        <div v-if="icon" :class="iconClassList">
          <p-icon :name="icon" type="xl" />
        </div>
      </div>

      <div
        class="ph-w-full ph-p-5 ph-pr-10"
        :class="[`ph-bg-${contentBg}`, !brandBar ? 'ph-pl-9' : '']"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import PBrandGradientText from '../BrandGradientText';
import PIcon from '../Icon';

export default Vue.extend({
  name: 'InfoCard',

  components: {
    PBrandGradientText,
    PIcon,
  },

  props: {
    heading: {
      type: String as PropType<string>,
      default: '',
    },

    icon: {
      type: String as PropType<string>,
      default: '',
    },

    contentBg: {
      type: String as PropType<string>,
      default: 'white',
    },

    iconBg: {
      type: String as PropType<string>,
      default: '',
    },

    shadow: {
      type: Boolean as PropType<boolean>,
      default: true,
    },

    brandBar: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    
    border: {
      type: String as PropType<string>,
      default: 'transparent',
    },
  },

  computed: {
    classList(): string[] {     
      return [
        'ph-relative',
        'ph-rounded-lg',
        this.brandBar ? 'ph-pl-4' : '',
        'ph-overflow-hidden',
        this.shadow ? 'ph-shadow' : '',
        'ph-border',
        `ph-border-${this.border}`,
      ];
    },

    brandBarClassList(): string[] {
      return [
        'ph-bg-gradient-to-t',
        'ph-from-brand2',
        'ph-to-brand1',
        'ph-w-4',
        'ph-h-full',
        'ph-top-0',
        'ph-left-0',
        'ph-absolute',
      ];
    },

    iconClassList(): string[] {
      return [
        `ph-bg-${this.iconBg}`,
        'ph-absolute',
        'ph-w-16',
        'ph-h-16',
        'ph-right-5',
        'ph-top-1/2',
        'ph-mt-1',
        'ph-rounded-full',
        'ph-text-white',
        'ph-flex',
        'ph-items-center',
        'ph-justify-center',
      ];
    },
  },
});
</script>
