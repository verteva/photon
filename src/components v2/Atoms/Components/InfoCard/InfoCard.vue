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
    <div v-if="brandBar" ref="brandBar" class="ph-info-card-brand-bar" />
    <div class="ph-info-card-inner-container">
      <div v-if="heading" ref="heading" class="ph-info-card-heading">
        <div class="ph-info-card-gradient-text-container">
          <PBrandGradientText>
            <span ref="headingText" class="ph-heading-text">
              {{ heading }}
            </span>
          </PBrandGradientText>
        </div>
        <hr class="ph-info-card-hr" />

        <div
          v-if="icon"
          class="ph-info-card-icon"
          :class="'ph-icon-bg-' + iconBg"
        >
          <p-icon ref="iconEl" :name="icon" type="xl" />
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
import PBrandGradientText from '@/components/BrandGradientText';
import PIcon from '@/components/Icon';
import { ColorValues } from './types';

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
      type: String as PropType<ColorValues>,
      default: 'primary',
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
  },
});
</script>

<style lang="scss" scoped>
.ph-info-card {
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  padding-left: 16px;
  border-width: var(--info-card-base-border-width);

  &.ph-info-card-border-primary {
    border-color: var(--info-card-base-border-primary);
  }
  &.ph-info-card-border-transparent {
    border-color: transparent;
  }

  &.ph-info-card-shadow {
    box-shadow: var(--info-card-style-shadow);
  }
  &.ph-info-card-non-branded {
    padding-left: 0px;
    .ph-info-card-gradient-text-container {
      padding-left: var(--info-card-style-gradient-padding);
    }
    .ph-info-card-slot {
      padding-left: var(--info-card-style-slot-padding);
    }
  }

  .ph-info-card-brand-bar {
    position: absolute;
    top: 0;
    left: 0;
    background-image: var(--info-card-style-gradient);
    width: 16px;
    height: 100%;
  }
  .ph-info-card-inner-container {
    background: var(--info-card-base-background-primary);
  }
}
.ph-info-card-heading {
  position: relative;
  width: 100%;
  background: var(--info-card-style-heading-background);
}

.ph-info-card-icon {
  display: flex;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: 4px;
  color: var(--info-card-style-icon-color);
  justify-content: center;
  align-items: center;
  width: var(--info-card-style-icon-size);
  height: var(--info-card-style-icon-size);
  border-radius: 9999px;
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

.ph-heading-text {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
}

.ph-info-card-slot {
  padding: 20px;
  padding-right: 40px;
  width: 100%;

  &.ph-info-card-slot-bg-primary {
    background: var(--info-card-style-content-primary);
  }
  &.ph-info-card-slot-bg-secondary {
    background: var(--info-card-style-content-secondary);
  }
}
.ph-info-card-hr {
  border-top-width: var(--info-card-style-hr-border-width);
  border-color: var(--info-card-style-hr-border-color);
}
.ph-info-card-gradient-text-container {
  padding: 20px;
}
</style>
