<template>
  <div class="photon-input-number">
    <div
      ref="decrease"
      class="photon-input-number-button minus"
      :class="{
        disabled: disabled || value === minVal,
      }"
      @click="!(disabled || value === minVal) && $emit('change:subtract')"
    >
      -
    </div>
    <p-input-text
      :id="id"
      ref="input"
      type="number"
      :value="value"
      :disabled="disabled"
      centered
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @input="$emit('input', $event)"
    />
    <div
      ref="increase"
      class="photon-input-number-button plus"
      :class="{
        disabled: disabled || value === maxVal,
      }"
      @click="!(disabled || value === maxVal) && $emit('change:add')"
    >
      +
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PInputText from '@/components v2/Atoms/Forms/InputText';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  id: {
    type: String as PropType<string>,
    default: '',
  },
  value: {
    type: Number as PropType<number>,
    default: 0,
  },
  minVal: {
    type: Number as PropType<number>,
    default: 0,
  },
  maxVal: {
    type: Number as PropType<number>,
    default: 999999999,
  },
  disabled,
};

export default Vue.extend({
  name: 'P2NumberInput',
  components: { PInputText },
  props,
});
</script>

<style lang="scss" scoped>
@import './src/assets/scss/_themehelpers.scss';

@function getInputNumberThemeProperty($property, $state, $fallback: '') {
  @return getThemeProperty(
    'input-number',
    $property,
    'base',
    $state,
    $fallback
  );
}

@function getInputNumberButtonThemeProperty($property, $state, $fallback: '') {
  @return getThemeProperty(
    'input-number-buttons',
    $property,
    'base',
    $state,
    $fallback
  );
}

.photon-input-number {
  display: flex;

  .photon-input-number-button {
    font-size: getInputNumberButtonThemeProperty('font-size', '', 2.25rem);
    line-height: getInputNumberThemeProperty('line-height', '', 2.5rem);
    color: getInputNumberButtonThemeProperty('color', '', grey);
    cursor: pointer;

    &.plus {
      margin-left: getInputNumberButtonThemeProperty('margin', '', 0);
    }

    &.minus {
      margin-right: getInputNumberButtonThemeProperty('margin', '', 0);
    }

    &:hover {
      color: getInputNumberButtonThemeProperty('color', 'hover', gray);
    }

    &.disabled {
      cursor: not-allowed;
      color: getInputNumberButtonThemeProperty('color', 'disabled', gray);
    }
  }
}
</style>
