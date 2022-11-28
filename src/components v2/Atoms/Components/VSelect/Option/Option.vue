<template>
  <div class="ph-autocomplete__option">
    <p-icon
      v-if="allowOptionIcon && validateIcon"
      class="ph-option-icon ph-mr-4"
      :name="validateIcon"
      type="xs"
    />
    <label
      class="ph-autocomplete-option"
      v-html="
        option[customLabelVar] ? option[customLabelVar] : option[labelVar]
      "
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';

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
};

export default Vue.extend({
  name: 'Option',
  components: {
    PIcon,
  },
  props,
});
</script>

<style lang="scss" scoped>
.vs__dropdown-option--highlight {
  background-color: var(--vselect-option-base-highlight-background-color);
}
.ph-autocomplete__option {
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  white-space: normal;
  display: flex;
  .af_hl {
    display: inline-block;
    padding: 1px;
    margin: 0;
    border-radius: 8px;
    background: var(--vselect-option-base-background-color);
    color: var(--vselect-option-base-text-color);
  }
}
.ph-option-icon {
  margin: auto 8px auto 0;
}
</style>
