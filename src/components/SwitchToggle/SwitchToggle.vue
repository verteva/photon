<template>
  <p-input
    :errors="errors"
    class="ph-relative"
    :class="hideWarning && 'hide-input-error'"
  >
    <label class="switch-label ph-relative ph-flex" :for="id">
      <input
        :id="id"
        v-model="innerValue"
        :name="name"
        type="checkbox"
        class="switch-input ph-checkbox ph-absolute ph-opacity-0"
        :disabled="disabled"
        @change="onChange"
      />
      <span
        class="slider round ph-absolute ph-top-0 ph-right-0 ph-left-0 ph-bottom-0 ph-transition ph-cursor-pointer ph-bg-grey4 ph-bg-gradient-brand2"
        :class="innerValue && 'input-checked'"
      >
      </span>
    </label>
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
      default: (): [] => [],
    },
    value: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    name: {
      type: String as PropType<string>,
      default: '',
    },
    width: {
      type: String as PropType<string>,
      default: '51px',
    },
    height: {
      type: String as PropType<string>,
      default: '31px',
    },
    reverseVal: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    hideWarning: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  data() {
    return {
      id: uuidv4(),
    };
  },

  computed: {
    innerValue: {
      get() {
        const $this = this as any;
        return $this.reverseVal ? !$this.value : $this.value;
      },
      set(val) {
        const $this = this as any;
        if ($this.disabled) return;
        const value = $this.reverseVal ? !val : val;
        $this.$emit('input', value);
      },
    },
  },

  methods: {
    onChange(event) {
      const $this = this as any;
      if (!$this.disabled) $this.$emit('change', event);
    },
  },
});
</script>

<style lang="postcss" scoped>
.switch-label {
  width: 51px;
  height: 31px;
}

.slider.round {
  border-radius: 31px;
  border-color: rgba(0, 158, 222, 0.4);
  width: 51px;
  height: 31px;
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
  @apply ph-bg-white;
  @apply ph-transition;
  content: '';
  height: 27px;
  width: 27px;
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
  width: 51px;
  height: 31px;
  box-shadow: 0;
  transition: box-shadow 0.25s;
}
.switch-label:hover .slider.round:before,
.switch-label:focus-within .slider.round:before,
.switch-label:focus-within .input-checked:before {
  @apply ph-border;
  border-color: rgba(0, 158, 222, 0.4);
  box-shadow: 0px 0px 0px 2px rgba(0, 158, 222, 0.4);
}
</style>
// TODO: Look to fix this on a component level
<style>
.hide-input-error .photon-input-error {
  display: none !important;
}
</style>
