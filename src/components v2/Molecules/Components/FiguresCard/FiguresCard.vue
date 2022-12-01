<template>
  <div class="photon-figures-card">
    <div class="figures-card-text-container">
      <div class="figures-card-title">
        {{ title }}
        <slot name="title" />
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

export const props = {
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
  background: var(--figures-card-background);
  color: var(--figures-card-text-color);
}

.figures-card-text-container {
  display: flex;
  flex-direction: column;
  justify-content: var(--figures-card-text-justify-content);
  margin: var(--figures-card-text-margin);
}

.figures-card-title {
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
