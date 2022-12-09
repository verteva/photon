<template>
  <div class="ph-autocomplete-search">
    <span v-if="prefixIcon" class="ph-icon-wrapper ph-autocomplete-prefix-icon">
      <p-icon ref="prefixIcon" :name="prefixIcon" type="md" />
    </span>
    <input
      v-show="hideInputOnSelected"
      data-testid="autocomplete-input"
      class="vs__search"
      :disabled="disabled"
      :class="{
        'ph-autocomplete-select-indent': reducePrefixSpacing,
        'ph-autocomplete-search-indent': prefixIcon,
        'ph-autocomplete-disabled': disabled,
      }"
      v-bind="inputSearchAttributes"
      v-on="inputSearchEvents"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '@/components/Icon';
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  disabled,
  prefixIcon: {
    type: String as PropType<string>,
    default: '',
  },

  hideInputOnSelected: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  selected: {
    type: [Number, String, Object] as PropType<any>,
    default: null,
  },

  inputSearchAttributes: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },

  inputSearchEvents: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  reducePrefixSpacing: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};

export default Vue.extend({
  name: 'InputSearch',
  components: {
    PIcon,
  },
  props,

  methods: {
    onFocus() {
      this.$emit('focus');
    },

    onBlur() {
      this.$emit('blur');
    },
  },
});
</script>

<style lang="scss" scoped>
.ph-autocomplete-search {
  display: flex;
  flex: 1 1 0%;
  height: 40px;
  .ph-icon-wrapper {
    color: var(--vselect-inputSearch-base-icon-color);
  }
  .ph-autocomplete-prefix-icon {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: auto;
    margin-bottom: auto;

    .vs__search {
      &:focus {
        padding-left: 20px;
      }
    }
  }

  .vs__search {
    height: var(--autocomplete-input-base-height);
    flex: 1 1 0%;
    opacity: 1 !important;
    line-height: var(--autocomplete-input-base-height);
    padding-top: 2px;
    padding-bottom: 2px;
    margin: 0;
    border-width: 0px;
    text-indent: 12px;
    &:focus {
      padding-top: 2px;
      padding-bottom: 2px;
      border-width: 0px;
      padding-left: 20px;
    }
  }
  .ph-autocomplete-search-indent {
    text-indent: 8px;
  }
  .ph-autocomplete-select-indent {
    text-indent: 0px;
  }
  &.ph-autocomplete-disabled {
    cursor: not-allowed;
  }
}
</style>
