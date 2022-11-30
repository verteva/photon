<template>
  <div class="ph-input-autocomplete-select">
    <P2Autocomplete
      :show-footer="showFooter"
      :custom-label-var="customLabelVar"
      :open-indicator-icon="openIndicatorIcon"
      :option-items="items"
      :init-input="value"
      :value="value"
      :disabled="disabled"
      hide-clear-btn
      @input="$emit('input', selected)"
      @update:selected="selected = $event"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import P2Autocomplete from '@/components v2/Atoms/Forms/InputAutoComplete';
import { InputSelectData, InputValueType } from './types';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  disabled,
  items: {
    type: Array,
    default: () => [],
  },
  value: {
    type: [Number, String, Object] as PropType<InputValueType>,
    default: null,
  },
  showFooter: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  customLabelVar: {
    type: String as PropType<string>,
    default: 'label',
  },
  openIndicatorIcon: {
    type: String as PropType<string>,
    default: 'ChevronDown',
  },
};

export default Vue.extend({
  name: 'PInputSelect',
  components: {
    P2Autocomplete,
  },
  props,
  data(): InputSelectData {
    return {
      inFocus: false,
      selected: '',
    } as InputSelectData;
  },

  methods: {
    updateValue(value: string) {
      this.$emit('input', value);
    },

    onFocus(e: InputEvent) {
      this.inFocus = true;
      this.$emit('focus', e);
    },

    onBlur(e: InputEvent) {
      this.inFocus = false;
      this.$emit('blur', e);
    },
  },
});
</script>
<style lang="scss">
.ph-input-autocomplete-select {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
