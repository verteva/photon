<template>
  <div class="ph-autocomplete-selected">
    <p-icon
      v-if="allowOptionIcon && showSelectedIcon"
      class="ph-selected-icon"
      :name="validateIcon"
      type="md"
      :data-deselect="deselect"
      :data-multiple="multiple"
      :data-disabled="disabled"
    />
    <span
      v-else
      class="ph-autocomplete-spacing"
      :class="{
        'ph-autocomplete-extra-spacing':
          (allowOptionIcon && showSelectedIcon) || reducePrefixSpacing,
      }"
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
import PIcon from '@/components/Icon';
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

  reducePrefixSpacing: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  disabled,
};

export default Vue.extend({
  name: 'SelectedOption',
  components: {
    PIcon,
  },
  props,
});
</script>

<style lang="scss" scoped>
.ph-autocomplete-selected {
  display: flex;
  padding-top: 2px;
  padding-bottom: 2px;
  .ph-selected-icon {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: auto;
    margin-bottom: auto;
    color: var(--autocomplete-focus-svg-icon-color);
  }
  .ph-autocomplete-spacing {
    width: 32px;
    &.ph-autocomplete-extra-spacing {
      width: 12px;
    }
  }
  .ph-autocomplete-selected-label {
    overflow: hidden;
    padding-top: 2px;
    white-space: normal;
    line-height: 40px;
  }

  + .ph-autocomplete-search .ph-autocomplete-prefix-icon {
    display: none;
  }
}
</style>
