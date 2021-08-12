<template>
  <div class="ph-flex ph-items-baseline">
    <p-slider v-model="sliderPct" />
    <p-input-text
      v-model="innerValue"
      class="ph-ml-4"
      :icon-left="currency ? 'Dollar' : ''"
    />
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';
import PSlider from '../Slider';
import PInputText from '../InputText';

export const addCommaSeparators = str =>
  str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default Vue.extend({
  name: 'InputSlider',

  components: {
    PSlider,
    PInputText
  },

  props: {
    currency: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      sliderPct: 0.8,
    };
  },

  mounted() {
    this.emitValue();
  },

  computed: {
    innerValue: {
      get():number {
        return addCommaSeparators(Math.round(this.value));
      },
    },
  },

  watch: {
    sliderPct() {
      this.emitValue();
    },
  },

  methods: {
    emitValue() {
      this.$emit('input', (this.max - this.min) * this.sliderPct + this.min);
    }
  },
});
</script>
