<template>
  <label class="switch-label" :class="{ disabled }">
    <input
      :id="id"
      :name="name"
      data-testid="toggle"
      type="checkbox"
      class="switch-input"
      :checked="value"
      :disabled="disabled"
      @change="$emit('input', $event.target.checked)"
    />
    <span class="slider" :class="value && 'input-checked'" />
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'P2Toggle',
  props: {
    value: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    name: {
      type: String as PropType<string>,
      default: '',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    id: {
      type: String as PropType<string>,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.switch-label {
  width: 51px;
  height: 31px;
  position: relative;
  display: flex;
  border-radius: 31px;

  .switch-input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    border-radius: 31px;
    border-color: rgba(0, 158, 222, 0.4);
    width: 51px;
    height: 31px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background: var(--toggle-active-background);

    &:after {
      // handle
      border-radius: 27px;
      position: absolute;
      background-color: var(--toggle-handle-background);
      transition: all 0.3s ease-in-out;
      content: '';
      height: 27px;
      width: 27px;
      left: 2px;
      bottom: 2px;
    }

    &:before {
      // background
      border-radius: 27px;
      position: absolute;
      background-color: var(--toggle-base-background);
      border: 1px solid transparent;
      opacity: 1;
      content: '';
      width: 51px;
      height: 31px;
      box-shadow: none;
      transition: all 0.3s ease-in-out;
    }
  }

  input {
    &:checked {
      + .slider:after {
        // handle move 20 px;
        transform: translateX(20px);
      }
      + .slider:before {
        // background fade out
        opacity: 0;
      }
    }
  }

  &:hover,
  &:focus-within {
    .slider {
      box-shadow: var(--toggle-focus-box-shadow);
    }
  }

  &.disabled {
    cursor: not-allowed;
    .slider {
      box-shadow: none;
      background: var(--toggle-disabled-active-background);
      &:before {
        cursor: not-allowed;
        background-color: var(--toggle-disabled-background);
      }
      &:after {
        cursor: not-allowed;
        background-color: var(--toggle-disabled-handle-background);
      }
    }
  }
}
</style>
