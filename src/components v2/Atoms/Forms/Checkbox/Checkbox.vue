<template>
  <label
    class="ph-checkbox-label"
    :class="[{ checked: value, disabled, focused }, size]"
  >
    <input
      :checked="value"
      :disabled="disabled"
      :name="name"
      type="checkbox"
      class="ph-checkbox-input"
      @input="$emit('input', $event.target.checked)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div class="ph-checkbox-toggle">
      <p-icon
        name="Checkmark"
        :type="iconType[size]"
        class="ph-checkbox-checkmark"
      />
    </div>
    {{ label }}
    <slot />
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
import { v4 as uuidv4 } from 'uuid';

export default Vue.extend({
  name: 'P2Checkbox',

  components: {
    PIcon,
  },

  props: {
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

    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    size: {
      type: String as PropType<string>,
      default: 'md',
    },
  },

  data() {
    return {
      id: uuidv4(),
      focused: false,
      iconType: {
        sm: 'xxs',
        md: 'xs',
      },
    };
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
.ph-checkbox-label {
  border: 1px dashed transparent;
  cursor: pointer;
  display: flex;
  position: relative;
  transition-property: color, border-color;
  transition-duration: 0.3s;
  color: var(--checkbox-default-label-color);

  .ph-checkbox-input {
    position: absolute;
    opacity: 0;
  }

  .ph-checkbox-toggle {
    border-radius: 4px;
    border: 1px solid;
    border-color: var(--checkbox-default-icon-color);
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .ph-checkbox-checkmark {
    opacity: 0;
    scale: 0;
    transition: all 0.3s;
    color: #fff !important;
  }

  &.checked {
    .ph-checkbox-toggle {
      background-color: var(--checkbox-checked-icon-color);
      border-color: var(--checkbox-checked-icon-color);
    }
    .ph-checkbox-checkmark {
      opacity: 1;
      scale: 1;
    }
  }

  &.disabled {
    cursor: not-allowed;
    color: var(--checkbox-disabled-label-color);
    .ph-checkbox-toggle {
      border-color: var(--checkbox-disabled-icon-color);
    }
  }

  &.disabled.checked {
    .ph-checkbox-toggle {
      background-color: var(--checkbox-disabled-icon-color);
      border-color: var(--checkbox-disabled-icon-color);
    }
    .ph-checkbox-checkmark {
      opacity: 1;
      scale: 1;
    }
  }

  &.focused {
    box-shadow: 0 0 0 4px var(--checkbox-focus-border-color);
  }

  &.sm {
    --checkbox-size: calc(
      var(--checkbox-sm-label-typography-fontSize) * 1px + 2px
    );
    padding-left: calc(var(--checkbox-size) + 10px);
    font-family: var(--checkbox-sm-label-typography-fontFamily);
    font-weight: var(--checkbox-sm-label-typography-fontWeight);
    font-size: calc(var(--checkbox-sm-label-typography-fontSize) * 1px);
    line-height: var(--checkbox-sm-label-typography-lineHeight);
    letter-spacing: var(--checkbox-sm-label-typography-letterSpacing);
    text-decoration: var(--checkbox-sm-label-typography-textDecoration);
    text-transform: var(--checkbox-sm-label-typography-textCase);
    border-radius: calc(var(--checkbox-sm-border-radius) * 1px);
    .ph-checkbox-toggle {
      margin-top: 2px;
      margin-left: 2px;
      width: var(--checkbox-size);
      height: var(--checkbox-size);
    }
  }

  &.md {
    --checkbox-size: calc(
      var(--checkbox-md-label-typography-fontSize) * 1px + 4px
    );
    padding-left: calc(var(--checkbox-size) + 10px);
    font-family: var(--checkbox-md-label-typography-fontFamily);
    font-weight: var(--checkbox-md-label-typography-fontWeight);
    font-size: calc(var(--checkbox-md-label-typography-fontSize) * 1px);
    line-height: var(--checkbox-md-label-typography-lineHeight);
    letter-spacing: var(--checkbox-md-label-typography-letterSpacing);
    text-decoration: var(--checkbox-md-label-typography-textDecoration);
    text-transform: var(--checkbox-md-label-typography-textCase);
    border-radius: calc(var(--checkbox-md-border-radius) * 1px);
    .ph-checkbox-toggle {
      margin-top: 2px;
      margin-left: 2px;
      width: var(--checkbox-size);
      height: var(--checkbox-size);
    }
  }
}
</style>
