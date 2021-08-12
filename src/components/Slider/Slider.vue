<template>   
  <div
    :id="`ph-slider-${id}`"
    class="ph-w-full ph-relative"
  >
    <div
      :id="`ph-track-${id}`"
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
import { gsap } from "gsap";
import TweenMax from "gsap";
import { Draggable } from "gsap/Draggable";
import { v4 as uuidv4 } from 'uuid';

export default Vue.extend({
  name: 'PSlider',

  components: {
  },

  props: {
    value: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      daggable: Draggable,
      id: uuidv4(),
      pressed: false,
    };
  },

  mounted() {
    // Put this inside of your mounted function
    gsap.registerPlugin(Draggable);
    
    document.addEventListener('mouseup', this.onRelease, false);
    window.addEventListener('resize', this.onResize, false);
    
    const slider = this as any;
    this.daggable = Draggable.create(`#ph-handle-${this.id}`, {
      type:"x",
      bounds: `#ph-track-${this.id}`,
      onDrag: function() {
        const pct = (this.x - this.minX) / (this.maxX - this.minX);               
        slider.$emit("input", pct);
        console.log(this);
        
      },      
    })[0];

    this.setHandle();
  },

  destroyed() {
    document.removeEventListener('mouseup', this.onRelease);
    window.removeEventListener('resize', this.onResize);
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
      ];
    },
    handleClassList():string[] {
      return [
        'ph-group',
        'ph--mt-4',
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
        'ph-duration-300',
        'ph-scale-50',
        'ph-ease-out',
        this.pressed && 'ph-scale-60' || '',
      ];
    },
  },  

  methods: {
    setHandle() {
      const { minX, maxX } = this.daggable;        
      TweenMax.set(`#ph-handle-${this.id}`, { x: (maxX - minX) * this.innerValue });
    },
    onResize() {      
      const track = document.getElementById(`ph-track-${this.id}`);
      const { width } = track && track.getBoundingClientRect();
      TweenMax.set(`#ph-handle-${this.id}`, { x: (width * this.innerValue) -2 });      
    },
    onRelease() {
      this.pressed = false;
    }
  },
});
</script>
