<template>
  <div class="ph-checkbox-item">
    <input
      :id="id"
      :checked="value"
      :disabled="disabled"
      :name="name"
      type="checkbox"
      class="ph-checkbox-input"
      @input="$emit('input', $event.target.checked)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <label
      :for="id"
      class="ph-checkbox-label"
      :class="[{ checked: value, disabled, focused }, size]"
    >
      <div class="ph-checkbox-icon-container">
        <font-awesome-icon
          :icon="value ? ['fas', 'square-check'] : ['fal', 'square']"
          class="ph-checkbox-icon"
        />
      </div>
      <span>
        {{ label }}
      </span>
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';
import { v4 as uuidv4 } from 'uuid';

const { size, disabled } = formProps;

export const props = {
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

  disabled,
  size,
};

export default Vue.extend({
  name: 'P2Checkbox',

  components: {},

  props,

  data() {
    return {
      id: uuidv4(),
      focused: false,
    };
  },

  created() {
    const $this = this as any;
    if (Boolean($this.label) && $this.$slots.default) {
      console.warn(
        'Checkbox label and Checkbox slot(default) are both defined and will be rendered together. This is probably not intended.'
      );
    }
  },

  methods: {
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-checkbox-input {
  display: none;
  pointer-events: none;

  &:focus + label {
    box-shadow: 0 0 0 4px var(--sd-checkbox-focus-border-color);
  }
}

.ph-checkbox-icon-container {
  width: var(--sd-checkbox-icon-container-size);
  height: var(--sd-checkbox-icon-container-size);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
}

.ph-checkbox-icon {
  color: var(--sd-checkbox-default-icon-color);
  font-size: var(--sd-checkbox-icon-size);
  width: var(--sd-checkbox-icon-size);
  height: var(--sd-checkbox-icon-size);
  transition: all 0.3s;
}

.ph-checkbox-label {
  --sd-checkbox-icon-size: 20px;
  --sd-checkbox-icon-container-size: 24px;
  border: 1px dashed transparent;
  cursor: pointer;
  display: flex;
  position: relative;
  transition-property: color, border-color;
  transition-duration: 0.3s;
  color: var(--sd-checkbox-default-label-color);

  &.checked {
    .ph-checkbox-icon {
      color: var(--sd-checkbox-checked-icon-color);
    }
  }

  &.disabled {
    cursor: not-allowed;
    color: var(--sd-checkbox-disabled-label-color);
    .ph-checkbox-icon {
      color: var(--sd-checkbox-disabled-icon-color);
    }
  }

  &.disabled.checked {
    .ph-checkbox-icon {
      color: var(--sd-checkbox-disabled-icon-color);
    }
  }

  &.focused {
    box-shadow: 0 0 0 4px var(--sd-checkbox-focus-border-color);
  }

  &.sm {
    --sd-checkbox-icon-size: calc(
      var(--sd-checkbox-sm-label-typography-fontSize, 14px) * 1.25
    );
    --sd-checkbox-icon-container-size: calc(
      var(--sd-checkbox-sm-label-typography-fontSize, 14px) * 1.5
    );
    padding-left: calc(var(--sd-checkbox-icon-container-size) + 8px);
    font-family: var(--sd-checkbox-sm-label-typography-fontFamily);
    font-weight: var(--sd-checkbox-sm-label-typography-fontWeight);
    font-size: var(--sd-checkbox-sm-label-typography-fontSize, 14px);
    line-height: var(--sd-checkbox-sm-label-typography-lineHeight);
    letter-spacing: var(--sd-checkbox-sm-label-typography-letterSpacing);
    text-decoration: var(--sd-checkbox-sm-label-typography-textDecoration);
    text-transform: var(--sd-checkbox-sm-label-typography-textCase);
    border-radius: var(--sd-checkbox-sm-border-radius);
  }

  &.md {
    --sd-checkbox-icon-size: calc(
      var(--sd-checkbox-md-label-typography-fontSize, 16px) * 1.25
    );
    --sd-checkbox-icon-container-size: calc(
      var(--sd-checkbox-md-label-typography-fontSize, 16px) * 1.5
    );
    padding-left: calc(var(--sd-checkbox-icon-container-size) + 8px);
    font-family: var(--sd-checkbox-md-label-typography-fontFamily);
    font-weight: var(--sd-checkbox-md-label-typography-fontWeight);
    font-size: var(--sd-checkbox-md-label-typography-fontSize, 16px);
    line-height: var(--sd-checkbox-md-label-typography-lineHeight);
    letter-spacing: var(--sd-checkbox-md-label-typography-letterSpacing);
    text-decoration: var(--sd-checkbox-md-label-typography-textDecoration);
    text-transform: var(--sd-checkbox-md-label-typography-textCase);
    border-radius: var(--sd-checkbox-md-border-radius);
  }
}
</style>
