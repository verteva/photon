<template>
  <div class="ph-input-text">
    <div v-if="iconLeft" class="ph-input-text-icon ph-input-text-icon-left">
      <p-icon :name="iconLeft" type="lg" />
    </div>
    <input
      :id="id"
      class="ph-input-text-input"
      :class="{
        'ph-input-text-input-icon-left': iconLeft,
        'ph-input-text-icon-right': iconRight,
        'ph-input-text-icon-center': centered,
      }"
      :placeholder="placeholder"
      :type="$attrs.type"
      :disabled="$attrs.disabled"
      tabindex="0"
      @keydown="validatePress"
      @wheel="$event.preventDefault()"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="iconRight" class="ph-input-text-icon">
      <p-icon :name="iconRight" type="lg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
import { InputTextData } from './types';
import { isNumber, isAllowedKey } from '@/utils';

export default Vue.extend({
  name: 'PInputText',

  components: {
    PIcon,
  },

  props: {
    centered: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    simple: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    number: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    placeholder: {
      type: String as PropType<string>,
      default: '',
    },
    iconLeft: {
      type: String as PropType<string>,
      default: '',
    },
    iconRight: {
      type: String as PropType<string>,
      default: '',
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
  },

  data(): InputTextData {
    return {
      currencyOptions: {
        currency: null,
        precision: 0,
        valueRange: { min: 0 },
        allowNegative: false,
      },
      id: '',
    } as InputTextData;
  },

  mounted() {
    this.id = 'photon_input_' + this._uid;
  },

  methods: {
    validatePress(event: KeyboardEvent) {
      /* 
        TODO: As an enhacement, add keycode checks
        to allow for a user select all (cmd + a)
        in the text input
      */
      console.log('hello world', event);
      if (this.number && !isNumber(event) && !isAllowedKey(event)) {
        return event.preventDefault();
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.ph-input-text {
  position: relative;
  .ph-input-text-input {
    padding: var(--input-text-base-padding);
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    width: 100%;
    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
    background: var(--input-text-base-background-color);
    &:focus {
      outline: none;
      border: var(--input-text-focus-border);
    }
    &.ph-input-text-input-icon-left {
      left: 0.25rem;
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    &.ph-input-text-icon-right {
      padding-right: 2.5rem;
    }
    &.ph-input-text-icon-center {
      text-align: center;
    }
  }
  .ph-input-text-icon {
    right: 0.25rem;
    display: flex;
    position: absolute;
    top: 0;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 200ms;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 100%;
    &.ph-input-text-icon-left {
      left: 0.25rem;
      // padding-right: 2.5rem;
      // padding-left: 2.5rem;
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
