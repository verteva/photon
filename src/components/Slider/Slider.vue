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
        :style="{ transform: `scaleX(${innerValue})` }"
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
} from './types';

export default Vue.extend({
  name: 'PSlider',

  components: {
  },

  props: {
    value: {
      type: Number as PropType<number>,
      default: 1,
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
        // 'ph-transition',
        // 'ph-duration-100',
        // 'ph-ease-linear',
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
    // Put this inside of your mounted function
    gsap.registerPlugin(Draggable);
  
    this.draggable = Draggable.create(`#ph-handle-${this.id}`, {
      type:"x",
      bounds: `#ph-track-${this.id}`,
      onDrag: this.onDrag,  
    })[0];

    this.setHandle();
    document.addEventListener('mouseup', this.onRelease, false);
    window.addEventListener('resize', this.onResize, false);
  },

  destroyed() {
    document.removeEventListener('mouseup', this.onRelease);
    window.removeEventListener('resize', this.onResize);
  },
  
  methods: {
    onDrag() {
      const { x, minX, maxX } = this.draggable;
      const pct = (x - minX) / (maxX - minX);               
      this.$emit('input', pct);     
    },
    setHandle() {
      const { minX, maxX } = this.draggable;
      const x = Math.floor((maxX - minX) * this.innerValue);      
      TweenLite.to(`#ph-handle-${this.id}`, 0.1, { ease: Expo.easeOut, x });
    },
    onResize() {
      const ref = this.$refs[`ph-track-${this.id}`] as SliderTrackRef;
      const { width }  = ref.getBoundingClientRect();      
      const { width: handleWidth } = this.draggable.target.getBoundingClientRect();
      
      TweenLite.to(`#ph-handle-${this.id}`, 0.1, { x: (width * this.innerValue) - (handleWidth * this.innerValue) + 1 });      
    },
    onRelease() {
      this.pressed = false;
    }
  },
});
</script>
