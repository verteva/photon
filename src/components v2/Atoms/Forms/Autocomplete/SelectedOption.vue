<template>
  <div class="ph-autocomplete-selected">
    <p-icon
      v-if="allowOptionIcon && showSelectedIcon"
      class="ph-selected-icon"
      :name="validateIcon"
      type="med"
      :data-deselect="deselect"
      :data-multiple="multiple"
      :data-disabled="disabled"
    ></p-icon>
    <span v-else class="ph-autocomplete-spacing"> </span>
    <label class="ph-autocomplete-selected-label" v-html="option.label"></label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';

export default Vue.extend({
  name: 'SelectedOption',
  components: {
    PIcon,
  },
  props: {
    option: {
      type: Object as PropType<any>,
      default: () => ({}),
    },
    validateIcon: {
      type: String as PropType<string>,
      default: '',
    },
    prefixIcon: {
      type: String as PropType<string>,
      default: '',
    },
    allowOptionIcon: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    showSelectedIcon: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    deselect: {
      type: Function,
      default: options => {
        return options;
      },
    },
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-autocomplete-selected {
  display: flex;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  .ph-selected-icon {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: auto;
    margin-bottom: auto;
    color: #009ede;
  }
  .ph-autocomplete-spacing {
    width: 0.75rem;
  }
  .ph-autocomplete-selected-label {
    overflow: hidden;
    padding-top: 0.125rem;
    white-space: normal;
    height: 2.5rem;
    line-height: 40px;
  }
}
</style>
