<template>
  <div
    class="ph-radio-item"
    :class="[disabled && 'ph-radio-disabled']"
    role="radio"
    :aria-checked="checked ? 'true' : 'false'"
  >
    <input
      :id="id"
      ref="radioInputItem"
      type="radio"
      class="ph-radio-input"
      :name="name"
      :checked="checked"
      @click="$emit('click')"
      @focus="onFocus"
      @blur="onBlur"
    />
    <label
      :for="id"
      class="ph-radio-label"
      :class="[
        disabled,
        focused,
        bottomBar && 'ph-radio-bar-bottom-brand',
        centered && 'ph-radio-label-centered',
      ]"
    >
      <div v-if="icon" class="ph-radio-button-icon-container">
        <font-awesome-icon
          :icon="[iconFamily, icon]"
          class="ph-radio-button-icon"
          :class="['fa-fw', iconClasses]"
        />
      </div>
      <div v-if="!icon" class="ph-radio-button-icon-container">
        <font-awesome-icon
          :icon="
            checked
              ? [checkedIconFamily, 'circle-dot']
              : [uncheckedIconFamily, 'circle']
          "
          class="ph-radio-button-icon fa-fw"
          :class="iconClasses"
        />
      </div>
      <div class="ph-radio-label-text">{{ label }}</div>
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  name: {
    type: String as PropType<string>,
    default: '',
  },
  label: {
    type: String as PropType<string>,
    default: '',
  },
  id: {
    type: String as PropType<string>,
    default: '',
  },
  icon: {
    type: String as PropType<string>,
    default: '',
  },
  iconFamily: {
    type: String as PropType<string>,
    default: 'fal',
  },
  iconClasses: {
    type: String as PropType<string>,
    default: '',
  },
  bottomBar: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  centered: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  checked: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // Global props
  disabled,
};

export default Vue.extend({
  name: 'InputRadio',
  components: {},
  mixins: ['fontAwesomeWeightToFamily'],
  props,
  computed: {
    uncheckedIconFamily(): any {
      /*
      let iconWeight =
        typeof this.$store?.theme !== 'undefined'
          ? this.$store.theme.tokens['radio-button'].default['icon-font-weight']
          : 'Light';
      */
      let iconWeight = 'Light';
      return this.fontAwesomeWeightToFamily(iconWeight);
    },
    checkedIconFamily(): any {
      /*
      let iconWeight =
        typeof this.$store?.theme !== 'undefined'
          ? this.$store.theme.tokens['radio-button'].checked['icon-font-weight']
          : 'Regular';
      */
      let iconWeight = 'Regular';
      return this.fontAwesomeWeightToFamily(iconWeight);
    },
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
.ph-radio-item {
  --sd-radio-button-icon-container-width: 1.25em;
  --sd-radio-button-icon-container-height: 1.25em;
  position: relative;

  @media screen and (max-width: 639px) {
    grid-column: auto / span 1 !important;
  }

  // Disabled
  &.ph-radio-disabled {
    .ph-radio-label {
      cursor: not-allowed;
      pointer-events: none;
      background: var(--sd-radio-button-disabled-background-color);
      border-color: var(--sd-radio-button-disabled-border-color);
      color: var(--sd-radio-button-disabled-text-color);
    }
    .ph-radio-button-icon {
      color: var(--sd-radio-button-disabled-icon-color);
    }
  }
}

.ph-radio-label {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  height: 100%;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  cursor: pointer;
  color: var(--sd-radio-button-default-text-color);
  background: var(--sd-radio-button-default-background-color);
  // Typography
  font-family: var(--sd-radio-button-default-font-family);
  font-weight: var(--sd-radio-button-default-text-font-weight);
  font-size: var(--sd-radio-button-md-typography-font-size);
  letter-spacing: var(--sd-radio-button-md-typography-letter-spacing);
  line-height: var(--sd-radio-button-md-typography-line-height);
  text-transform: var(--sd-radio-button-md-typography-text-case);
  text-decoration: var(--sd-radio-button-md-typography-text-decoration);
  // Border
  border-width: 1px;
  border-style: solid;
  border-radius: var(--sd-radio-button-md-border-radius);
  border-color: var(--sd-radio-button-default-border-color);
  // Spacing
  padding-bottom: var(--sd-radio-button-md-padding-bottom);
  padding-left: var(--sd-radio-button-md-padding-left);
  padding-right: var(--sd-radio-button-md-padding-right);
  padding-top: var(--sd-radio-button-md-padding-top);

  &.ph-radio-label-centered {
    justify-content: center;
  }
}

.ph-radio-input {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  bottom: 50%;
  margin-top: -0.5rem;
  width: 0;
  height: 0;
  opacity: 0;

  // Focused
  &:focus,
  &:focus-visible,
  &.focused {
    outline: none;

    + .ph-radio-label {
      box-shadow: 0 0 0 4px var(--sd-radio-button-focus-box-shadow-color);
    }
  }

  // Checked
  &:checked {
    + .ph-radio-label {
      background: var(--sd-radio-button-checked-background-color);
      border-color: var(--sd-radio-button-checked-border-color);
      color: var(--sd-radio-button-checked-text-color);

      .ph-radio-label-text {
        color: var(--sd-radio-button-checked-text-color);
      }

      .ph-radio-button-icon {
        color: var(--sd-radio-button-checked-icon-color);
      }
    }

    ~ .ph-radio-bar-bottom-brand:after {
      background-color: var(--sd-radio-button-checked-icon-color);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transform-origin: 50% 100%;
      content: '';
      height: 3px;
      animation: expandLine 0.35s cubic-bezier(0.3, 0.28, 0.26, 0.81);
      animation-fill-mode: both;
    }
  }
}

.ph-radio-button-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--sd-radio-button-md-gap);
}

.ph-radio-button-icon {
  transition: all 0.3s;
}

@keyframes expandLine {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(100%);
  }
}
</style>
