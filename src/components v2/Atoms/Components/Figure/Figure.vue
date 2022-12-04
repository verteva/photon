<template>
  <div class="photon-figure" :class="[size]">
    <span class="figure-container">
      <div
        class="figure"
        :class="[$attrs.class, (!loading && 'animate-fade-in-slow') || '']"
      >
        {{ loading && isCurrency ? calculation : display }}
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { addCommaSeparators } from '@/utils';
import { FiguresData } from './types';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { size } = formProps;

export const props = {
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
  size,
};

export default Vue.extend({
  name: 'P2Figure',
  props,

  data(): FiguresData {
    return {
      calculation: 0.0,
      calcInterval: 0,
      min: 0,
      max: 0,
    };
  },
  computed: {
    display() {
      return (this as any).isCurrency
        ? `$${addCommaSeparators(this.value)}`
        : (this as any).value;
    },
  },

  watch: {
    loading(isLoading, wasLoading) {
      if (isLoading) {
        (this as any).startCalculating();
      }
      if (!isLoading && wasLoading) {
        (this as any).stopCalculating();
      }
    },
  },
  methods: {
    setMinMax() {
      const len = String((this as any).value).length;
      const multiplies = [...Array(len).keys()];
      let max = 9;
      let min = 1;
      multiplies.forEach(() => {
        max = max * 10;
        min = min * 10;
      });

      (this as any).min = min / 10;
      (this as any).max = max / 10;
    },

    startCalculating() {
      (this as any).setMinMax();
      (this as any).calcInterval = setInterval((this as any).calculate, 50);
    },

    stopCalculating() {
      clearInterval((this as any).calcInterval);
    },

    calculate() {
      (this as any).calculation = `$${addCommaSeparators(
        (this as any).getRandomNum((this as any).min, (this as any).max)
      )}`;
    },

    getRandomNum(from, to) {
      return Math.floor(Math.random() * to) + from;
    },
  },
});
</script>

<style lang="scss" scoped>
.photon-figure {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.25rem;

  .figure {
    font-family: var(--figure-font-family);
    font-weight: var(--figure-default-font-weight);
    line-height: var(--figure-default-line-height);
  }
  &.sm {
    .figure {
      font-size: var(--figure-sm-font-size);
      font-weight: var(--figure-sm-font-weight);
      line-height: var(--figure-sm-line-height);
    }
  }

  &.md {
    .figure {
      font-size: var(--figure-md-font-size);
      font-weight: var(--figure-md-font-weight);
      line-height: var(--figure-md-line-height);
    }
  }
}

.animate-fade-in-slow {
  animation: fadeIn 2s cubic-bezier(0.3, 0.28, 0.26, 0.81);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
