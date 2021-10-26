<template>
  <p-input
    :errors="errors"
    class="ph-relative"
  >
    <label
      class="switch-label ph-relative ph-flex"
      :for="id"
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
      >
      </span>
    </label>
  </p-input>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { v4 as uuidv4 } from "uuid";
import PInput from "../Input";
export default Vue.extend({
  name: "Toggle",
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
      default: "",
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
        return (this as any).value;
      },
      set(val) {
        (this as any).$emit("input", val);
      },
    },
  },
  watch: {},

  methods: {
    onChange(event) {
      (this as any).$emit("change", event);
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
}
input:checked + .slider:after {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
  @apply ph-bg-white;
}
input:checked + .slider:before {
  @apply ph-bg-grey4;
  opacity: 0;
}

.slider.round:after {
  @apply ph-rounded-full;
  position: absolute;
  content: "";
  height: 27px;
  width: 27px;
  left: 2px;
  bottom: 2px;
  @apply ph-shadow;
  @apply ph-bg-white;
  @apply ph-transition;
}
.slider.round:before {
  @apply ph-rounded-full;
  position: absolute;
  content: "";
  width: 51px;
  height: 31px;
  @apply ph-bg-grey4;
  opacity: 1;
  @apply ph-transition;
  @apply ph-border-transparent;
  box-shadow: 0;
  transition: box-shadow 0.25s;
}
.switch-label:hover .slider.round:before,
.switch-label:focus-within .slider.round:before, 
.switch-label:focus-within .input-checked, 
.switch-label:hover .input-checked {
  @apply ph-border;
  border-color: rgba(0, 158, 222, 0.4);
  box-shadow: 0px 0px 0px 2px rgba(0, 158, 222, 0.4);
}
</style>
