<template>
  <p-input :errors="errors" class="ph-relative">
    <label
      class="switch-label ph-relative ph-flex"
      :for="id"
      :style="{
        '--width': width,
        '--height': height
      }"
    >
      <input
        :id="id"
        v-model="innerValue"
        :name="name"
        type="checkbox"
        class="switch-input ph-checkbox ph-absolute ph-opacity-0"
        @change="onChange"
      />
      <span
        class="slider round ph-absolute ph-top-0 ph-right-0 ph-left-0 ph-bottom-0 ph-transition ph-cursor-pointer ph-bg-grey4 ph-bg-gradient-brand2"
        :class="innerValue && 'input-checked'"
        :style="scaleHeight"
      >
      </span>
    </label>
    -----{{ scaleHeight }}-----
  </p-input>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import PInput from '../Input';
export default Vue.extend({
  name: 'Toggle',
  components: { PInput },
  props: {
    errors: {
      type: Array,
      default: (): [] => []
    },
    value: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    name: {
      type: String as PropType<string>,
      default: ''
    },
    width: {
      type: String as PropType<string>,
      default: '51px'
    },
    height: {
      type: String as PropType<string>,
      default: '31px'
    }
  },
  data() {
    return {
      id: uuidv4()
    };
  },

  computed: {
    innerValue: {
      get() {
        return (this as any).value;
      },
      set(val) {
        (this as any).$emit('input', val);
      }
    },
    scaleHeight() {
      const heightValue = +this.height.replace('px', '');
      return {
        '--height-after': Math.round(heightValue / 1.15) + 'px',
        '--width': this.width,
        '--height': this.height
      };
    }
  },

  methods: {
    onChange(event) {
      (this as any).$emit('change', event);
    }
  }
});
</script>

<style lang="postcss" scoped>
.test-child {
  width: var(--width);
  transform: scale(0.8888);
  height: var(--height);
}
.switch-label {
  width: var(--width, 51px);
  height: var(--height, 31px);
}
.slider.round {
  border-radius: 31px;
  border-color: rgba(0, 158, 222, 0.4);
  width: var(--width, 51px);
  height: var(--height, 31px);
}
input:checked + .slider:after {
  transform: translateX(20px);
  @apply ph-bg-white;
}
input:checked + .slider:before {
  @apply ph-bg-grey4;
  @apply ph-bg-opacity-0;
}
.switch-label .slider.round:after {
  @apply ph-rounded-full;
  @apply ph-absolute;
  @apply ph-shadow;
  @apply ph-bg-white;
  @apply ph-transition;
  content: '';
  height: var(--height-after, 27px);
  width: var(--height-after, 27px);
  left: 2px;
  bottom: 2px;
}
.slider.round:before {
  @apply ph-rounded-full;
  @apply ph-absolute;
  @apply ph-transition;
  @apply ph-border-transparent;
  @apply ph-bg-grey4;
  @apply ph-opacity-100;
  content: '';
  width: var(--width, 51px);
  height: var(--height, 31px);
  box-shadow: 0;
  transition: box-shadow 0.25s;
}
.switch-label:hover .slider.round:before,
.switch-label:focus-within .slider.round:before,
.switch-label:focus-within .input-checked {
  @apply ph-border;
  border-color: rgba(0, 158, 222, 0.4);
  box-shadow: 0px 0px 0px 2px rgba(0, 158, 222, 0.4);
}
</style>
