<template>
  <div class="ph-autocomplete__option">
    <font-awesome-icon
      v-if="allowOptionIcon && validateIcon"
      :icon="[
        option['iconFamily'] || iconFamily,
        option['icon'] || validateIcon,
      ]"
      class="ph-option-icon"
      :class="['fa-fw', option['iconClasses'] || iconClasses]"
      :style="option['iconColor'] && { color: option['iconColor'] }"
    />
    <label
      class="ph-autocomplete-option-text"
      v-html="
        option[customLabelVar] ? option[customLabelVar] : option[labelVar]
      "
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

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
};

export default Vue.extend({
  name: 'Option',
  components: {},
  props,
});
</script>

<style lang="scss" scoped>
.vs__dropdown-option--highlight {
  background-color: var(--sd-dropdown-item-hover-background-color);
}
.ph-autocomplete__option {
  padding-bottom: var(--sd-input-text-md-padding-bottom);
  padding-left: var(--sd-input-text-md-padding-left);
  padding-right: var(--sd-input-text-md-padding-right);
  padding-top: var(--sd-input-text-md-padding-top);
  display: flex;
  white-space: normal;
  display: flex;
  cursor: pointer;

  .af_hl {
    display: inline-block;
    padding: 1px;
    margin: 0;
    border-radius: 8px;
    /*
    background: var(--vselect-option-base-background-color);
    color: var(--vselect-option-base-text-color);
    */
  }
}
.ph-autocomplete-option-text {
  cursor: pointer;
}
.ph-option-icon {
  margin: auto var(--sd-input-text-md-padding-left) auto 0;
}
</style>
