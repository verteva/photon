<template>
  <div class="photon-input-number">
    <p2-button
      ref="decrease"
      icon-left="minus"
      class="ph-number-input-button minus"
      :class="{
        disabled: disabled || value === minVal,
      }"
      @click="!(disabled || value === minVal) && $emit('change:subtract')"
    />
    <p2-input-text
      :id="id"
      ref="input"
      type="number"
      :value="value"
      :disabled="disabled"
      class="ph-number-input-text-field"
      centered
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @input="$emit('input', $event)"
    />
    <p2-button
      ref="increase"
      icon-left="plus"
      class="ph-number-input-button plus"
      :class="{
        disabled: disabled || value === maxVal,
      }"
      @click="!(disabled || value === maxVal) && $emit('change:add')"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Button from '@/components v2/Atoms/Components/Button';
import P2InputText from '@/components v2/Atoms/Forms/InputText';
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
  components: { P2Button, P2InputText },
  props,
});
</script>

<style lang="scss">
.photon-input-number {
  display: flex;

  .ph-number-input-button {
    position: relative;
    z-index: 1;

    &.minus {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &.plus {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .ph-number-input-text-field input {
    border-radius: 0 !important;
    position: relative;
    z-index: 0;
  }
}
</style>
