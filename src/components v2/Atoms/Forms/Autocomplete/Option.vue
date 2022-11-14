<template>
  <div class="ph-autocomplete__option ph-flex">
    <p-icon
      v-if="allowOptionIcon && validateIcon"
      class="ph-my-auto ph-mr-4"
      :name="validateIcon"
      type="xs"
    ></p-icon>
    <label
      class="ph-autocomplete-option"
      v-html="
        option[customLabelVar] ? option[customLabelVar] : option[labelVar]
      "
    ></label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
export default Vue.extend({
  name: 'Footer',
  components: {
    PIcon,
  },
  props: {
    allowOptionIcon: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    optionLeading: {
      type: String as PropType<string>,
      default: 'left',
    },
    option: {
      type: Object as PropType<any>,
      default: () => ({}),
    },
    validateIcon: {
      type: String as PropType<string>,
      default: '',
    },
    customLabelVar: {
      type: String as PropType<string>,
      default: '',
    },
    labelVar: {
      type: String as PropType<string>,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-autocomplete-option {
  white-space: normal;
}
</style>
