<template>
  <div class="ph-autocomplete">
    <div class="ph-autocomplete__field">
      <v-select
        ref="autocomplete"
        v-model="selected"
        v-bind="conditionalProps"
        class="ph-autocomplete__v-select"
        :value="initInput"
        :options="optionItems"
        :label="labelVar"
        :placeholder="placeHolder"
        :class="'ph-autocomplete-open' && toggleMenu"
        :clearable="!hideClearBtn"
        @input="onInput"
        @search="onSearch"
        @search:blur="$emit('blur')"
        @open="onOpen"
        @close="onClose"
        @blur="onBlur"
        @option:selected="onSelected"
      >
        <template #search="{ attributes, events }">
          <InputSearch
            :prefix-icon="prefixIcon"
            :hide-input-on-selected="!selected ? true : !hideInputOnSelected"
            :selected="selected"
            :attributes="attributes"
            :events="events"
          />
        </template>
        <template v-if="!disableFilter" #selected-option="option">
          <SelectedOption
            :allow-option-icon="allowOptionIcon"
            :show-selected-icon="showSelectedIcon"
            :validate-icon="
              validateIcon(option) ? validateIcon(option) : prefixIcon
            "
            :prefix-icon="prefixIcon"
            :option="option"
          />
        </template>
        <template
          v-else
          #selected-option-container="{ option, deselect, multiple, disabled }"
        >
          <SelectedOption
            :allow-option-icon="allowOptionIcon"
            :show-selected-icon="showSelectedIcon"
            :validate-icon="validateIcon(option)"
            :prefix-icon="prefixIcon"
            :deselect="deselect"
            :multiple="multiple"
            :disabled="disabled"
            :option="option"
          />
        </template>
        <template #open-indicator="{ attributes }">
          <div>
            <Indicator
              :attributes="attributes"
              :hide-open-indicator="hideOpenIndicator"
              :open-indicator-icon="openIndicatorIcon"
            />
          </div>
        </template>
        <template #option="option">
          <div>
            <Option
              :allow-option-icon="allowOptionIcon"
              :validate-icon="validateIcon(option)"
              :option-leading="optionLeading"
              :option="option"
              :label-var="labelVar"
              :custom-label-var="customLabelVar"
            ></Option>
          </div>
        </template>
        <template #no-options>
          <NoOptions :no-options-text="noOptionsText" />
        </template>
        <template #list-footer>
          <Footer :show-footer="showFooter" :add-footer="addFooter" />
        </template>
      </v-select>
    </div>
    <LoadingBar :loading="loading" />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import vSelect from 'vue-select';

import {
  LeadingTight,
  LeadingSnug,
  LeadingNormal,
  LeadingLoose,
  LeadingMax,
  InputValueType,
} from './types';

import NoOptions from './NoOptions.vue';
import Footer from './Footer.vue';
import Option from './Option.vue';
import Indicator from './Indicator.vue';
import InputSearch from './Inputsearch.vue';
import SelectedOption from './SelectedOption.vue';
import LoadingBar from './LoadingBar.vue';

Vue.component('vSelect', vSelect);

export default Vue.extend({
  name: 'PAutoComplete',

  components: {
    vSelect,
    NoOptions,
    Footer,
    Option,
    Indicator,
    InputSearch,
    SelectedOption,
    LoadingBar,
  },

  props: {
    optionItems: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
    placeHolder: {
      type: String as PropType<string>,
      default: '',
    },
    noOptionsText: {
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
    prefixIcon: {
      type: String as PropType<string>,
      default: '',
    },
    hideOpenIndicator: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    optionLeading: {
      type: String as PropType<string>,
      default: 'normal',
      validator(value: string): boolean {
        return (
          [
            LeadingTight,
            LeadingSnug,
            LeadingNormal,
            LeadingLoose,
            LeadingMax,
          ].indexOf(value) !== -1
        );
      },
    },
    showFooter: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    openIndicatorIcon: {
      type: String as PropType<string>,
      default: 'ChevronDown',
    },
    value: {
      type: [Number, String, Object] as PropType<InputValueType>,
      default: null,
    },
    selectedBy: {
      type: String as PropType<string>,
      default: 'label',
    },
    labelVar: {
      type: String as PropType<string>,
      default: 'label',
    },
    customLabelVar: {
      type: String as PropType<string>,
      default: 'custom_label',
    },
    noDropOnStart: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    hideClearBtn: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    initInput: {
      type: [Number, String, Object] as PropType<InputValueType>,
      default: null,
    },
    errors: {
      type: Array,
      default: () => [],
    },
    hideInputOnSelected: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disableFilter: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    defaultFilter: {
      type: Function,
      default: options => {
        return options;
      },
    },
  },
  data() {
    return {
      focused: false,
      selected: '',
      searchText: '',
      toggleMenu: false,
    };
  },
  computed: {
    addFooter() {
      return this.optionItems.length > 0;
    },
    conditionalProps() {
      let props = {};
      if (this.noDropOnStart) {
        props['dropdown-should-open'] = () =>
          this.optionItems.length > 0 && this.$data.toggleMenu;
      }
      if (this.disableFilter) {
        props['filter'] = () => this.defaultFilter(this.optionItems);
      }
      return props;
    },
  },
  created() {
    const selected = (this as any).getSelected(this.initInput);
    this.$data.selected = selected
      ? selected[this.labelVar] || ''
      : this.initInput;
  },
  mounted() {
    this.$emit('selectedObj', (this as any).getSelected(this.initInput));
  },
  methods: {
    getSelected(input: string) {
      const option = (this as any).optionItems.filter(
        item => item[this.selectedBy] === input
      )[0];
      return option ? option : null;
    },
    validateIcon(option: { icon: string }) {
      return option.icon ? option.icon : null;
    },
    onSearch(search: string) {
      this.$data.searchText = search;
      this.$emit('update:searchInput', search);
    },
    onInput(val: string) {
      this.$emit('blur');
      this.$data.toggleMenu = false;
      this.$emit('update:selected', this.$data.selected);
      this.$emit('update:value', val);
    },
    onFocus() {
      this.$data.focused = true;
      this.$emit('onFocus');
    },
    onOpen() {
      (this as any).focused = true;
      (this as any).toggleMenu = true;
      this.$emit('onFocus');
    },
    onBlur() {
      (this as any).focused = false;
      this.$emit('onBlur');
    },
    onClose() {
      (this as any).focused = false;
      (this as any).toggleMenu = false;
      this.$emit('onBlur');
    },
    onSelected(selectedOption: any) {
      this.$emit('selectedObj', selectedOption);
    },
  },
});
</script>

<style lang="scss">
.ph-autocomplete__v-select {
  --vs-search-input-color: var(--autocomplete-input-base-text-color);
  --vs-search-input-bg: var(--autocomplete-input-base-background-color);

  --vs-border-color: var(--autocomplete-input-base-border-color);
  --vs-border-width: var(--autocomplete-input-base-border-width);
  --vs-border-radius: var(--autocomplete-input-base-border-radius);
  --vs-search-input-placeholder-color: var(
    --autocomplete-input-base-placeholder-color
  );
}

// original styling
.vs__dropdown-toggle {
  border-radius: 0.5rem;
  padding-bottom: 0;
}
.vs__selected {
  margin: 0px 2px 0;
  border-width: 0px;
  height: 30px;
}
.vs__selected {
  color: var(--autocomplete-input-base-text-color);
}
.vs__selected + .ph-autocomplete-search .ph-autocomplete-prefix-icon {
  display: none;
}
.vs__selected-options {
  flex-wrap: nowrap;

  input {
    padding-left: 1.25rem;
    color: currentColor;
    -webkit-appearance: none;
    &::placeholder {
      color: var(--autocomplete-input-base-placeholder-color);
      text-indent: 10px;
    }
  }
}

.ph-autocomplete__v-select .vs__dropdown-toggle {
  border-color: var(--autocomplete-input-base-border-color);
  background-color: var(--autocomplete-input-base-background-color);
}

.ph-autocomplete__v-select .vs__dropdown-toggle:focus-within {
  border-color: var(--autocomplete-input-focus-border-color);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.ph-autocomplete__v-select .vs__dropdown-toggle:focus-within svg {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  color: var(--autocomplete-input-focus-svg-icon-color);
}
.ph-autocomplete-open .vs__dropdown-toggle {
  border-color: var(--autocomplete-input-focus-border-color);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.vs__dropdown-option--highlight {
  background-color: var(--autocomplete-input-focus-background-color);
  color: var(--autocomplete-input-base-text-color);
}

.vs__open-indicator {
  color: var(--autocomplete-input-focus-svg-icon-color);
}

.vs__actions {
  // padding-right: var(--openIndicatorIndent);
}

.ph-autocomplete__option .af_hl {
  display: inline-block;
  padding: 1px;
  margin: 0;
  border-radius: 0.5rem;
  background: var(--autocomplete-input-background-color);
  color: var(--autocomplete-input-base-text-color);
}

.vs__no-options {
  padding-left: 1rem;
  text-align: left;
}

.vs__dropdown-menu {
  padding-left: 0px !important;
  margin-top: 0.125rem;
  padding: 0;
  padding-top: 0.75rem;
  margin-top: 2px !important;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  max-height: 304px;
}

.vs__actions {
  color: var(--autocomplete-input-focus-text-color);
}
.vs__clear {
  fill: currentColor;
}

.ph-autocomplete-selected
  + .ph-autocomplete-search
  .ph-autocomplete-prefix-icon {
  display: none;
}
.ph-option-leading-loose {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.ph-option-leading-max {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.vs__clear {
  position: relative;
  width: 24px;
  height: 24px;
  color: var(--autocomplete-input-focus-text-color);
  margin-right: 8px;
}

.vs__clear::after {
  content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" id="footer-sample-full" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--mdi"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" fill="#009EDE"></path></svg>');
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
}

.vs__clear svg {
  visibility: hidden;
}
</style>
