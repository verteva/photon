<template>
  <p-input
    :errors="errors"
    hide-errors
  >
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
        number
        :value="innerValue"
        class="ph-ml-10"
        :icon-left="currency ? 'Dollar' : ''"
        :errors="errors"
        @input="onManualChange"
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
import {
  addCommaSeparators,
  removeCommaSeparators,
} from '../../utils';

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
      type: Boolean as PropType<boolean>,
      default: false,
    },
    min: {
      type: Number as PropType<number>,
      default: 0,
    },
    max: {
      type: Number as PropType<number>,
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
      type: Number as PropType<number>,
      default: 0,
    },
  },

  data() {
    return {
      sliderPct: 1,
    };
  },

  computed: {
    innerValue: {
      get():string {
        // return Math.round(this.value);
        return addCommaSeparators(Math.round(this.value));
      },
    },
  },

  watch: {
    sliderPct() {
      this.emitValue();
    },
  },

  mounted() {
    this.emitValue();
  },

  methods: {
    emitValue() {
      this.$emit('input', (this.max - this.min) * this.sliderPct + this.min);
    },
    onManualChange(val) {
      const manualValue:any = removeCommaSeparators(val);
      if (manualValue <= this.max) {
        this.sliderPct = manualValue / this.max;
        this.$emit('input', Number(manualValue));
      }
    },
  },
});
</script>
