<template>
  <div class="ph-autocomplete-selected">
    <font-awesome-icon
      v-if="allowOptionIcon && showSelectedIcon && validateIcon"
      :icon="[iconFamily, validateIcon]"
      class="ph-selected-icon"
      :class="['fa-fw', iconClasses]"
      :data-deselect="deselect"
      :data-multiple="multiple"
      :data-disabled="disabled"
    />
    <label
      class="ph-autocomplete-selected-label"
      v-html="
        option[customLabelVar] ? option[customLabelVar] : option[labelVar]
      "
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  option: {
    type: Object as PropType<any>,
    default: () => ({}),
  },

  labelVar: {
    type: String as PropType<string>,
    default: 'label',
  },

  customLabelVar: {
    type: String as PropType<string>,
    default: 'customLabel',
  },

  allowOptionIcon: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  validateIcon: {
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

  deselect: {
    type: Function,
    default: (select) => {
      return select;
    },
  },

  multiple: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  showSelectedIcon: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  disabled,
};

export default Vue.extend({
  name: 'SelectedOption',
  components: {},
  props,
});
</script>

<style lang="scss">
.ph-autocomplete-selected {
  display: flex;
  padding: 0;
  max-width: 100%;
  padding-bottom: var(--sd-input-text-md-padding-bottom);
  padding-left: var(--sd-input-text-md-padding-left);
  padding-right: var(--sd-input-text-md-padding-right);
  padding-top: var(--sd-input-text-md-padding-top);
  font-family: var(--sd-input-text-md-typography-font-family);
  font-size: var(--sd-input-text-md-typography-font-size);
  font-weight: var(--sd-input-text-md-typography-font-weight);
  letter-spacing: var(--sd-input-text-md-typography-letter-spacing);
  line-height: var(--sd-input-text-md-typography-line-height);
  text-transform: var(--sd-input-text-md-typography-text-case);
  text-decoration: var(--sd-input-text-md-typography-text-decoration);

  .ph-selected-icon {
    margin-left: 0;
    margin-right: var(--sd-input-text-md-padding-right);
    margin-top: auto;
    margin-bottom: auto;
    color: var(--autocomplete-focus-svg-icon-color);
  }

  .ph-autocomplete-selected-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  + .ph-autocomplete-search .ph-autocomplete-prefix-icon {
    display: none;
  }
}
</style>
