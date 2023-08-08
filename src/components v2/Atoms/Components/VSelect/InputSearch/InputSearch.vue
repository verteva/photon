<template>
  <div
    class="ph-autocomplete-search"
    :class="hasPrefixIcon && 'has-prefix-icon'"
  >
    <span v-if="prefixIcon" class="ph-icon-wrapper ph-autocomplete-prefix-icon">
      <font-awesome-icon
        ref="prefixIcon"
        :icon="[iconFamily, prefixIcon]"
        class="ph-input-search-prefix-icon"
        :class="['fa-fw', iconClasses]"
      />
    </span>
    <input
      v-show="hideInputOnSelected"
      data-testid="autocomplete-input"
      class="vs__search"
      :disabled="disabled"
      :class="{
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
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

export const props = {
  disabled,
  prefixIcon: {
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
};

export default Vue.extend({
  name: 'InputSearch',
  components: {},
  props,

  computed: {
    hasPrefixIcon(): boolean {
      return this.prefixIcon;
    },
  },

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

  .ph-icon-wrapper {
    color: var(--sd-input-text-default-icon-color);
  }

  .ph-autocomplete-prefix-icon {
    margin-left: var(--sd-input-text-md-padding-left);
    margin-right: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  .vs__search {
    flex: 1 1 0%;
    opacity: 1 !important;
    margin: 0;
    border-width: 0px;
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
  }

  &.ph-autocomplete-disabled {
    cursor: not-allowed;
  }
}
</style>
