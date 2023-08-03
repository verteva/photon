<template>
  <div
    ref="container"
    class="ph-info-card"
    :class="[
      !brandBar && 'ph-info-card-non-branded',
      shadow && 'ph-info-card-shadow',
      'ph-info-card-border-' + border,
    ]"
  >
    <div v-if="brandBar" ref="brandBar" class="ph-info-card-brand-bar"></div>

    <div class="ph-info-card-inner-container">
      <div v-if="heading" ref="heading" class="ph-info-card-heading">
        <p2-headline :element="headingElement" class="ph-heading-element">
          <span ref="headingText" class="ph-heading-text">
            {{ heading }}
          </span>
        </p2-headline>
        <div
          v-if="icon"
          class="ph-info-card-icon"
          :class="[iconBg && `ph-icon-bg-${iconBg}`]"
        >
          <font-awesome-icon
            :icon="[iconFamily, icon]"
            class="fa-fw"
            :class="iconClasses"
          />
        </div>
      </div>

      <div
        ref="content"
        class="ph-info-card-slot"
        :class="'ph-info-card-slot-bg-' + contentBg"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Headline from '@/components v2/Atoms/Components/Headline';
import { ColorValues } from './types';

export const props = {
  heading: {
    type: String as PropType<string>,
    default: '',
  },

  headingElement: {
    type: String as PropType<string>,
    default: 'h4',
  },

  icon: {
    type: String as PropType<string>,
    default: '',
  },

  iconFamily: {
    type: String as PropType<ColorValues>,
    default: 'fal',
  },

  iconClasses: {
    type: String as PropType<ColorValues>,
    default: 'fa-2xs',
  },

  iconBg: {
    type: String as PropType<ColorValues>,
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
};

export default Vue.extend({
  name: 'InfoCard',

  components: {
    P2Headline,
  },

  props,
});
</script>

<style lang="scss" scoped>
.ph-info-card {
  --info-card-brand-bar-width: 8px;
  overflow: hidden;
  position: relative;
  border-radius: var(--sd-card-default-border-radius);
  padding-left: var(--info-card-brand-bar-width);
  border-width: 0;

  &.ph-info-card-border-primary {
    border-color: var(--sd-theme-primary-default);
  }

  &.ph-info-card-border-transparent {
    border-color: transparent;
  }

  &.ph-info-card-shadow {
    box-shadow: var(--sd-card-default-box-shadow);
  }

  &.ph-info-card-non-branded {
    padding-left: 0px;

    .ph-info-card-gradient-text-container {
      padding-left: var(--info-card-style-gradient-padding);
    }
  }

  .ph-info-card-brand-bar {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--sd-infocard-bordered-border-left-color);
    width: var(--info-card-brand-bar-width);
    height: 100%;
  }

  .ph-info-card-inner-container {
    background: var(--sd-infocard-default-body-background-color);
  }
}

.ph-info-card-heading {
  position: relative;
  width: 100%;
  background: var(--sd-infocard-default-header-background-color);
  padding: calc(var(--sd-card-sm-padding) * 0.75) var(--sd-card-sm-padding);
  display: flex;
  align-items: center;
}

.ph-heading-element {
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
}

.ph-info-card-icon {
  display: flex;
  color: var(--sd-infocard-default-icon-color);
  justify-content: center;
  align-items: center;
  margin: 0;

  &.ph-icon-bg-primary {
    background: var(--info-card-style-icon-primary);
  }

  &.ph-icon-bg-secondary {
    background: var(--info-card-style-icon-secondary);
  }

  &.ph-icon-bg-tertiary {
    background: var(--info-card-style-icon-tertiary);
  }
}

.ph-info-card-slot {
  width: 100%;
  padding: var(--sd-card-sm-padding);
}

.ph-info-card-heading + .ph-info-card-slot {
  border-top: 1px solid var(--sd-infocard-default-header-border-color);
}
</style>
