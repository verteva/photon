<template>
  <p-input :errors="errors" class="ph-relative ph-pl-7 ph-flex ph-flex-col">
    <input
      :id="id"
      v-model="innerValue"
      :name="name"
      type="checkbox"
      class="ph-checkbox ph-absolute ph-opacity-0"
      @change="onChange"
    />
    <label
      :for="id"
      class="ph-pl-2 ph-transition ph-duration-500 ph-cursor-pointer"
    >
      <div
        class="ph-checkbox-toggle ph-w-6 ph-h-6 ph-rounded-md ph-border ph-absolute ph-left-0 ph-flex ph-items-center ph-justify-center ph-transition"
        :class="
          value
            ? 'ph-bg-brand2 ph-border-brand2'
            : 'ph-bg-grey6 ' + darkBorder
            ? 'ph-border-grey4'
            : 'ph-border-grey5'
        "
      >
        <p-icon
          name="Checkmark"
          type="xs"
          class="ph-text-white ph-transition ph-duration-300 ph-transform"
          :class="
            value ? 'ph-opacity-1 ph-scale-100' : 'ph-opacity-0 ph-scale-0'
          "
        />
      </div>

      {{ label }}
    </label>
  </p-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import PInput from '../Input';
import { v4 as uuidv4 } from 'uuid';

export default Vue.extend({
  name: 'Checkbox',

  components: {
    PIcon,
    PInput,
  },

  props: {
    errors: {
      type: Array,
      default: (): [] => [],
    },

    value: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    label: {
      type: String as PropType<string>,
      default: '',
    },

    name: {
      type: String as PropType<string>,
      default: '',
    },
    darkBorder: {
      type: Boolean as PropType<boolean>,
      default: false,
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
        (this as any).$emit('input', val);
      },
    },
  },

  methods: {
    onChange(event) {
      (this as any).$emit('change', event);
    },
  },
});
</script>

<style lang="postcss">
.ph-checkbox:focus + label .ph-checkbox-toggle {
  border: 2px solid #3dd6c7 !important;
}
</style>
