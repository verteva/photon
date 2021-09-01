<template>   
  <div
    :id="`ph-slider-${id}`"
    class="ph-w-full ph-relative"
  >
    <div
      :id="`ph-track-${id}`"
      :ref="`ph-track-${id}`"
      :class="dragAreaClassList"
    />
    <div
      :class="trackWrapperClassList"
    >
      <div
        :class="trackClassList"
        class="ph-bg-grey5 ph-w-full"
      />
      <div
        :class="trackClassList"
        :style="{ transform: `scaleX(${barScale})` }"
        class="ph-bg-gradient-brand1h ph-w-full ph-origin-left"
      />
    </div>
    <div
      :id="`ph-handle-${id}`"
      :class="handleClassList"
      @mousedown="pressed = true"
    >
      <div :class="handleDotClassList" />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';
import { gsap, Expo } from "gsap";
import TweenLite from "gsap";
import { Draggable } from "gsap/Draggable";
import { v4 as uuidv4 } from 'uuid';

import {
  SliderData,
  SliderTrackRef,
  StepDataType,
} from './types';

export default Vue.extend({
  name: 'PSlider',

  props: {
    value: {
      type: Number as PropType<number>,
      default: 1,
    },

    steps: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    
    stepData: {
      type: Object as PropType<StepDataType>,
      default: () => ({
        increment: 1,
        min: 0,
        max: 10,
      }),
    },
  },

  data():SliderData {
    return {
      draggable: null,
      id: uuidv4(),
      pressed: false,
    };
  },

  computed: {
    innerValue: {
      get():number {        
        return this.value;
      },
    },
    barScale():number {      
      if (this.steps) return (this.innerValue - this.stepData.min) / (this.stepData.max - this.stepData.min);
      return this.innerValue;
    },
    trackWrapperClassList():string[] {
      return [
        'ph-w-full',
        'ph-h-1.5',
        'ph-rounded',
        'ph-overflow-hidden',
        'ph-relative'
      ];
    },
    dragAreaClassList():string[] {
      return [
        'ph-absolute',
        'ph-top-0',
        'ph-bottom-0',
        'ph-left-0',
        'ph-right-0',
      ];
    },
    trackClassList():string[] {
      return [
        'ph-h-full',
        'ph-absolute',
        'ph-top-0',
        'ph-left-0',
      ];
    },
    handleClassList():string[] {
      return [
        'ph--mt-4',
        'ph-group',
        'ph-absolute',
        'ph-bg-brand3',
        'ph-w-7',
        'ph-h-7',
        'ph-rounded-full',
        'ph-cursor-pointer',
        'ph-origin-center',
      ];
    },
    handleDotClassList():string[] {
      return [
        'ph-absolute',
        'ph-top-0',
        'ph-left-0',
        'ph-bg-white',
        'ph-w-7',
        'ph-h-7',
        'ph-rounded-full',
        'ph-transform',
        'ph-origin-center',
        'ph-transition',
        'ph-duration-100',
        'ph-scale-50',
        'ph-ease-out',
        this.pressed && 'ph-scale-60' || '',
      ];
    },
  },  
  
  watch: {
    value() {
      this.setHandle();
    },
  },

  mounted() {
    gsap.registerPlugin(Draggable);
    
    if (this.steps) {      
      this.initStepSlider();
    } else {      
      this.draggable = Draggable.create(`#ph-handle-${this.id}`, {
        type:"x",
        bounds: `#ph-track-${this.id}`,
        onDrag: this.onDrag,
      })[0];
      
      this.setHandle();
    }   
    
    window.addEventListener('resize', this.onResize, false);   
    document.addEventListener('mouseup', this.onRelease, false);
  },

  destroyed() {
    document.removeEventListener('mouseup', this.onRelease);
    window.removeEventListener('resize', this.onResize);
  },
  
  methods: {
    initStepSlider() {
      const snapPoints:number[] = [];
      this.draggable = Draggable.create(`#ph-handle-${this.id}`, {
        type:"x",
        bounds: `#ph-track-${this.id}`,
        onDrag: this.onDrag,
        liveSnap: snapPoints,
      })[0];

      const { increment, min, max } = this.stepData;
      const dragRange = this.draggable.maxX - this.draggable.minX;
      const valueRange = max - min;
      const steps = valueRange / increment;
      const stepXvalue = dragRange / steps;

      for (let i = 0; i < steps; i++) {
        snapPoints.push(Math.round(i * stepXvalue));
      }
      
      snapPoints.push(dragRange);
           
      TweenLite.set(`#ph-handle-${this.id}`, { x: (this.value - min) / valueRange * dragRange });
    },
    onDrag() {        
      const { x, minX, maxX } = this.draggable;     
      
      if (this.steps) {
        const stepIndex = this.draggable.vars.liveSnap.indexOf(x);        
        this.$emit('input', stepIndex * this.stepData.increment + this.stepData.min);
      } else {
        const pct = (x - minX) / (maxX - minX);               
        this.$emit('input', pct);
      }      
    },
    setHandle() {
      if (!this.steps) {
        const { minX, maxX } = this.draggable;
        const x = Math.floor((maxX - minX) * this.innerValue);      
        TweenLite.to(`#ph-handle-${this.id}`, 0.1, { ease: Expo.easeOut, x });
      }
    },
    onResize() {
      if (!this.steps) {
        const ref = this.$refs[`ph-track-${this.id}`] as SliderTrackRef;
        const { width }  = ref.getBoundingClientRect();      
        const { width: handleWidth } = this.draggable.target.getBoundingClientRect();
        TweenLite.to(`#ph-handle-${this.id}`, 0.1, { x: (width * this.innerValue) - (handleWidth * this.innerValue) + 1 });
      } else {
        this.initStepSlider();
      }
    },
    onRelease() {
      this.pressed = false;
    }
  },
});
</script>
