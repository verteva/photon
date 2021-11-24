<template>
  <p-input :errors="errors">
    <p-label>
      {{ label }}
      <slot />
    </p-label>
    {{ innerValue }}
    <div
      v-for="val in items"
      :key="val.label"
      class="ph-relative ph-pl-7 ph-flex ph-flex-col ph-my-3"
    >
      <input
        :id="val.value"
        v-model="innerValue"
        :value="val.value"
        :name="name"
        type="checkbox"
        class="ph-checkbox ph-absolute ph-opacity-0"
        @change="onChange($event)"
      />
      <label
        :for="val.label"
        class="ph-pl-2 ph-transition ph-duration-500 ph-cursor-pointer"
      >
        <div
          class="ph-checkbox-toggle ph-w-6 ph-h-6 ph-rounded-md ph-border ph-absolute ph-left-0 ph-flex ph-items-center ph-justify-center ph-transition"
          :class="
            innerValue.includes(val.value)
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
              innerValue.includes(val.value)
                ? 'ph-opacity-1 ph-scale-100'
                : 'ph-opacity-0 ph-scale-0'
            "
          />
        </div>
        {{ val.label }}
      </label>
    </div>
  </p-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import PInput from '../Input';
import PLabel from '../Label';
import { v4 as uuidv4 } from 'uuid';

export default Vue.extend({
  name: 'CheckboxGroup',

  components: {
    PIcon,
    PInput,
    PLabel,
  },

  props: {
    errors: {
      type: Array,
      default: (): [] => [],
    },

    value: {
      type: Array,
      default: (): [] => [],
    },

    items: {
      type: Array,
      default: (): [] => [],
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

  created() {
    const $this = this as any;
    if (!!$this.label && $this.$slots.default) {
      console.warn(
        'Checkbox label and Checkbox slot(default) are both defined and will be rendered together. This is probably not intended.'
      );
    }
  },

  methods: {
    onChange(event) {
      const value = event.target.id;

      let newModel = [...(this as any).innerValue];
      if (newModel.includes(value)) {
        newModel = (this as any).innerValue.filter(a => a !== value);
      } else {
        newModel.push(value);
      }

      (this as any).$emit('input', newModel);
    },
  },
});
</script>

<style lang="postcss" scoped>
.ph-checkbox:focus + label .ph-checkbox-toggle {
  border: 2px solid var(--focus-border-color, #3dd6c7) !important;
}
</style>
