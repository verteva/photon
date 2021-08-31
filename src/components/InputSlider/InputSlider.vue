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
        ref="inputField"
        number
        :value="innerValue"
        class="ph-ml-10"
        :icon-left="currency ? 'Dollar' : ''"
        :errors="errors"
        @blur="onManualChange"
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
import { InputElement, RefElement } from './types';
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
      sliderPct: 0
    };
  },

  computed: {
    innerValue: {
      get():string {
        return addCommaSeparators(Math.round(this.value));
      },
    },
    sliderPercent():number {
      return (this.max - this.min) * this.sliderPct + this.min;
    }
  },

  watch: {
    sliderPct() {
      this.emitValue();
    },
  },

  mounted() {
    this.sliderPct =  this.getPercentage(this.value);
    this.emitValue();
  },

  methods: {
    getPercentage(value):number {
      return (value - this.min) / (this.max - this.min);
    },

    emitValue() {
      this.$emit('input', this.sliderPercent);
    },

    onManualChange() {
      if (this.$refs.inputField) {
        const ref = this.$refs['inputField'] as RefElement;
        if (ref) {
          const value = (ref.$el as InputElement).querySelector('input').value;
          const manualValue:any = removeCommaSeparators(value);
          
          if (manualValue <= this.max && manualValue >= this.min) {
            this.sliderPct = this.getPercentage(manualValue);                     
            this.$emit('input', Number(manualValue));
          }
        }
      }      
    },
  },
});
</script>
