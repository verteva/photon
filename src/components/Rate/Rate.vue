<template>
  <div :class="darkMode && 'ph-text-white' || ''">
    <div class="ph-text-xs ph-uppercase ph-w-3/4 ph-mb-1">
      {{ name }}
    </div>
    <div
      class="ph-flex ph-w-auto"
      :class="[
        currency && 'ph-items-baseline' || '',
        !loading && 'ph-animate-fadeInSlow' || '',
        (loading && currency) && 'ph-text-white' || '',
        (loading && !currency) && 'ph-text-brandh2' || '',
      ]"
    >
      <div class="ph-text-3.5xl ph-mr-2">
        {{ loading ? calculation : rate }}
      </div>
      <div
        v-if="!loading"
        class="ph-flex ph-flex-col"
      >
        <div v-if="currency" class="ph-text-xs ph-mt-auto">per month</div>
        <div v-else>
          <div class="ph-text-lg ph--mb-2.5">%</div>
          <div class="ph-text-xs">p.a</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';
import { addCommaSeparators } from '../../utils';

export default Vue.extend({
  name: 'Rate',
  
  props: {
    name: {
      type: String as PropType<string>,
      default: '',
    },

    rate: {
      type: String as PropType<string>,
      default: '',
    },

    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    
    currency: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    
    darkMode: {
      type: Boolean as PropType<boolean>,
      default: false,
    },  
  },

  data() {
    const calcInterval:any = null;
    const calculation = '0.00';
    return {
      calculation,
      calcInterval,
    };
  },

  watch: {
    loading(isLoading, wasLoading) {
      if (isLoading) {
        this.startCalculating();
      }
      if (!isLoading && wasLoading) {
        this.stopCalculating();
      }
    },
  },

  methods: {
    startCalculating() {
      this.calcInterval = setInterval(this.calculate, 50);
    },
    
    stopCalculating() {
      clearInterval(this.calcInterval);
    },

    calculate() {
      if (this.currency) {
        this.calculation = String(`$${addCommaSeparators(this.getRandomNum(1000, 9000))}`);
      } else {
        this.calculation = String(`${this.getRandomNum(1, 9)}.${this.getRandomNum(10, 90)}`);
      }
    },

    getRandomNum(from, to) {
      return Math.floor(Math.random() * to) + from;
    },
  },
});
</script>
