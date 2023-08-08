<template>
  <label class="toggle-label" :class="{ disabled }">
    <input
      :id="id"
      :name="name"
      data-testid="toggle"
      type="checkbox"
      class="toggle-input"
      :checked="value"
      :disabled="disabled"
      @change="$emit('input', $event.target.checked)"
    />
    <span class="slider" :class="value && 'input-checked'" />
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  value: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  name: {
    type: String as PropType<string>,
    default: '',
  },
  id: {
    type: String as PropType<string>,
    default: '',
  },
  // Global props
  disabled,
};

export default Vue.extend({
  name: 'P2Toggle',
  props,
});
</script>

<style lang="scss" scoped>
.toggle-label {
  --toggle-width: calc(
    (var(--sd-toggle-md-handle-size) * 2) +
      (var(--sd-toggle-default-background-padding) * 2)
  );
  --toggle-height: calc(
    var(--sd-toggle-md-handle-size) +
      (var(--sd-toggle-default-background-padding) * 2)
  );
  width: var(--toggle-width);
  height: var(--toggle-height);
  position: relative;
  display: flex;
  border-radius: var(--sd-toggle-md-background-width);

  .toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    border-radius: var(--toggle-height);
    width: var(--toggle-width);
    height: var(--toggle-height);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background: var(--sd-toggle-off-background-color);

    // handle
    &:after {
      border-radius: var(--sd-toggle-md-handle-size);
      position: absolute;
      background-color: var(--sd-toggle-handle-background-color);
      transition: all 0.3s ease-in-out;
      content: '';
      height: var(--sd-toggle-md-handle-size);
      width: var(--sd-toggle-md-handle-size);
      left: var(--sd-toggle-default-background-padding);
      bottom: var(--sd-toggle-default-background-padding);
      top: var(--sd-toggle-default-background-padding);
    }
  }

  input {
    &:checked {
      + .slider {
        background: var(--sd-toggle-on-background-color);

        &:after {
          left: calc(
            100% - var(--sd-toggle-md-handle-size) -
              var(--sd-toggle-default-background-padding)
          );
        }
      }
    }
  }

  &:focus,
  &:focus-within {
    .slider {
      box-shadow: 0 0 0 4px var(--sd-theme-input-focus-box-shadow-color);
    }
  }

  &.disabled {
    cursor: not-allowed;

    .slider {
      box-shadow: none;
      background: var(--sd-theme-input-disabled-color);
    }

    input {
      &:checked {
        + .slider {
          background: var(--sd-theme-input-disabled-color);
        }
      }
    }
  }
}
</style>
