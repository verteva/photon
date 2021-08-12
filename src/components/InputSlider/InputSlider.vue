<template>
  <p-input :errors="errors" hide-errors>
    <slot
      v-if="$scopedSlots.label"
      name="label"
    >
      <p-label>{{ label }}</p-label>
    </slot>
    <p-label v-else>
      {{ label }}
    </p-label>
    <div class="ph-flex ph-items-baseline">
      <p-slider v-model="sliderPct" />
      <p-input-text
        v-model="innerValue"
        class="ph-ml-4"
        :icon-left="currency ? 'Dollar' : ''"
        :errors="errors"
      />
    </div>
  </p-input>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';
import PSlider from '../Slider';
import PInputText from '../InputText';
import PInput from '../Input';
import PLabel from '../Label';

// TODO: Make this a global utility
export const addCommaSeparators = str =>
  str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default Vue.extend({
  name: 'InputSlider',

  components: {
    PSlider,
    PInputText,
    PInput,
    PLabel,
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
    label: {
      type: String as PropType<string>,
      default: '',
    },
    errors: {
      type: Array as PropType<string[]>,
      default: ():[] => [],
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
