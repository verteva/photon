<template>
  <div
    class="ph-flex ph-w-full ph-p-2 ph-rounded-lg ph-px-4"
    :class="[background, darkMode ? '' : 'ph-text-white']"
  >
    <div class="ph-flex ph-flex-col ph-justify-end ph-mr-auto">
      <div class="ph-text-sm ph-mt-3">
        {{ title }}
      </div>
      <div class="ph-text-lg sm:ph-text-3xl ph-font-bold ph-mb-1">
        <span class="ph-text-lg sm:ph-text-3xl ph-font-bold">
          <div
            class="ph-flex ph-w-auto"
            :class="[$attrs.class, (!loading && 'ph-animate-fadeInSlow') || '']"
          >
            {{ loading && isCurrency ? calculation : display }}
          </div>
        </span>
      </div>
    </div>
    <p-icon v-if="icon" :name="icon" :class="textColor" :type="iconSize" />
  </div>
</template>

<script lang="ts">
import { addCommaSeparators } from '../../utils';
import { FiguresData } from './types';
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
export default Vue.extend({
  name: 'FiguresCard',
  components: {
    PIcon,
  },
  props: {
    background: {
      type: String as PropType<string>,
      default: '',
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
  },
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
