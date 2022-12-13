<template>
  <div class="photon-figures-card" :class="[cardStyle]">
    <div class="figures-card-text-container">
      <div class="figures-card-title">
        {{ title }}
        <slot v-if="!title" name="title" />
      </div>

      <p2-figure :value="value" :loading="loading" :is-currency="isCurrency" />
    </div>

    <p-icon
      v-if="icon"
      :name="icon"
      class="figures-card-icon"
      :class="textColor"
      :type="iconSize"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
import P2Figure from '@/components v2/Atoms/Components/Figure';
import { CardStyles } from './types';

export const props = {
  cardStyle: {
    type: String as PropType<string>,
    default: CardStyles.PRIMARY,
  },
  title: {
    type: String as PropType<string>,
    default: '',
  },
  textColor: {
    type: String as PropType<string>,
    default: 'ph-text-white',
  },
  icon: {
    type: String as PropType<string>,
    default: '',
  },
  iconSize: {
    type: String as PropType<string>,
    default: 'xxl',
  },
  value: {
    type: Number as PropType<number>,
    default: 0,
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  isCurrency: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
};

export default Vue.extend({
  name: 'FiguresCard',
  components: {
    PIcon,
    P2Figure,
  },

  props,
});
</script>
<style lang="scss" scoped>
.photon-figures-card {
  display: flex;
  width: 100%;
  border-radius: var(--figures-card-border-radius);
  padding: var(--figures-card-padding);
  color: var(--figures-card-text-color);

  &.primary {
    background: var(--figures-card-styles-primary-background);
    color: var(--figures-card-styles-primary-color);
  }

  &.secondary {
    background: var(--figures-card-styles-secondary-background);
    color: var(--figures-card-styles-secondary-color);
  }

  &.tertiary {
    background: var(--figures-card-styles-tertiary-background);
    color: var(--figures-card-styles-tertiary-color);
  }
}

.figures-card-text-container {
  display: flex;
  flex-direction: column;
  justify-content: var(--figures-card-text-justify-content);
  margin: var(--figures-card-text-margin);
  width: 100%;
}

.figures-card-title {
  font-family: var(--figures-card-font-family);
  font-size: var(--figures-card-text-title-font-size);
  margin: var(--figures-card-text-title-margin);
}

.figures-card-icon {
  display: flex;
  justify-content: center;

  ::v-deep & > svg {
    margin: var(--figures-card-icon-svg-margin);
  }
}
</style>
