<template>
  <div class="ph-autocomplete">
    <div class="ph-autocomplete__field">
      <v-select
        ref="autocomplete"
        v-model="selected"
        v-bind="conditionalProps"
        data-testid="autocomplete"
        class="ph-autocomplete__v-select"
        :value="initInput"
        :options="optionItems"
        :label="labelVar"
        :reduce="
          !simple && !returnObj
            ? content => content[labelVar]
            : content => content
        "
        append-to-body
        :placeholder="placeHolder"
        :class="'ph-autocomplete-open' && toggleMenu"
        :clearable="!hideClearBtn"
        v-on="$listeners"
        @input="onInput"
        @search="onSearch"
        @search:blur="$emit('blur')"
        @open="onOpen"
        @close="onClose"
        @option:selected="onSelected"
      >
        <template #search="{ attributes, events }">
          <InputSearch
            ref="input"
            :prefix-icon="prefixIcon"
            :hide-input-on-selected="!selected ? true : !hideInputOnSelected"
            :selected="selected"
            :attributes="attributes"
            :events="events"
            :disabled="disabled"
            @focus="onFocus"
            @blur="onBlur"
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
            :validate-icon="
              validateIcon(option) ? validateIcon(option) : prefixIcon
            "
            :deselect="deselect"
            :multiple="multiple"
            :disabled="disabled"
            :option="option"
            :label-var="labelVar"
            :custom-label-var="customLabelVar"
          />
        </template>
        <template #open-indicator="{ attributes }">
          <Indicator
            :attributes="attributes"
            :hide-open-indicator="hideOpenIndicator"
            :open-indicator-icon="openIndicatorIcon"
          />
        </template>
        <template #option="option">
          <Option
            :allow-option-icon="allowOptionIcon"
            :validate-icon="validateIcon(option)"
            :option="option"
            :label-var="labelVar"
            :custom-label-var="customLabelVar"
          />
        </template>
        <template #no-options>
          <NoOptions :no-options-text="noOptionsText" />
        </template>
        <template #list-footer>
          <Footer :show-footer="showFooter" :add-footer="addFooter">
            <slot name="list-footer" />
          </Footer>
        </template>
      </v-select>
    </div>
    <LoadingBar :loading="loading" />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import vSelect from 'vue-select';

import Footer from '@/components v2/Atoms/Components/VSelect/Footer';
import Indicator from '@/components v2/Atoms/Components/VSelect/Indicator';
import InputSearch from '@/components v2/Atoms/Components/VSelect/InputSearch';
import NoOptions from '@/components v2/Atoms/Components/VSelect/NoOptions';
import Option from '@/components v2/Atoms/Components/VSelect/Option';
import SelectedOption from '@/components v2/Atoms/Components/VSelect/SelectedOption';
import LoadingBar from '@/components v2/Atoms/Components/VSelect/LoadingBar';

export const props = {
  optionItems: {
    type: Array,
    default: () => [],
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
  showFooter: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  openIndicatorIcon: {
    type: String as PropType<string>,
    default: 'ChevronDown',
  },
  value: {
    type: [Number, String, Object] as PropType<string | number>,
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
    type: [Number, String, Object] as PropType<string | number>,
    default: null,
  },
  hideInputOnSelected: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  disableFilter: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  simple: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  returnObj: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  defaultFilter: {
    type: Function,
    default: options => {
      return options;
    },
  },
  lazyFocus: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};
Vue.component('vSelect', vSelect);

export default Vue.extend({
  name: 'P2InputAutoComplete',

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

  props,
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
@import '~vue-select/dist/vue-select.css';

.ph-autocomplete__v-select {
  --vs-search-input-color: var(--autocomplete-input-base-text-color);
  --vs-search-input-bg: var(--autocomplete-input-base-background-color);

  --vs-border-color: var(--autocomplete-input-base-border-color);
  --vs-border-width: var(--autocomplete-input-base-border-width);
  --vs-border-radius: var(--autocomplete-input-base-border-radius);
  --vs-search-input-placeholder-color: var(
    --autocomplete-input-base-placeholder-color
  );
  .vs__dropdown-toggle {
    border-radius: var(--autocomplete-input-base-border-radius);
    padding-bottom: 0;
    border-color: var(--autocomplete-input-base-border-color);
    background-color: var(--autocomplete-input-base-background-color);

    &:focus-within {
      border-color: var(--autocomplete-input-focus-border-color);
      border-bottom-left-radius: var(--autocomplete-input-base-border-radius);
      border-bottom-right-radius: var(--autocomplete-input-base-border-radius);
      svg {
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform;
        color: var(--autocomplete-input-focus-svg-icon-color);
      }
    }
  }
}

.vs__selected {
  margin: 0px 2px 0;
  border-width: 0px;
  height: var(--autocomplete-input-base-height);
  color: var(--autocomplete-input-base-text-color);
  & + .ph-autocomplete-search .ph-autocomplete-prefix-icon {
    display: none;
  }
}

.vs__selected-options {
  flex-wrap: nowrap;

  input {
    padding-left: 20px;
    color: currentColor;
    -webkit-appearance: none;
    &::placeholder {
      color: var(--autocomplete-input-base-placeholder-color);
      text-indent: var(--autocomplete-input-base-placeholder-indent);
    }
  }
}

.vs__actions {
  color: var(--autocomplete-input-focus-text-color);
}

.vs__no-options {
  padding-left: 16px;
  text-align: left;
}

.vs__dropdown-menu {
  padding: 0;
  padding-top: 12px;
  margin-top: 2px;
  margin-top: 2px;
  max-height: 304px;
}

.vs__clear {
  fill: currentColor;
  position: relative;
  width: 24px;
  height: 24px;
  color: var(--autocomplete-input-focus-text-color);
  margin-right: 8px;

  svg {
    visibility: hidden;
  }

  &::after {
    content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" id="footer-sample-full" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--mdi"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" fill="#009EDE"></path></svg>');
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
  }
}
</style>
