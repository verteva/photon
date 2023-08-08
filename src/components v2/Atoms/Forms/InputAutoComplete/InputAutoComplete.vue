<template>
  <div class="ph-autocomplete">
    <div class="ph-autocomplete__field" :data-im="dataIm">
      <v-select
        ref="autocomplete"
        v-model="selected"
        data-testid="autocomplete"
        class="ph-autocomplete__v-select"
        :value="initInput"
        :options="optionItems"
        :label="optionLabelVar"
        :calculate-position="withPopper"
        :reduce="
          reduceValue
            ? (content) => content[optionLabelVar]
            : (content) => content
        "
        append-to-body
        :placeholder="placeHolder"
        :class="'ph-autocomplete-open' && toggleMenu"
        :clearable="!hideClearBtn"
        :dropdown-should-open="dropdownShouldOpen"
        v-bind="filter"
        :searchable="!disableFilter"
        @input="onInput"
        @search="onSearch"
        @search:blur="$emit('blur')"
        @open="onOpen"
        @close="onClose"
        @option:selected="onSelected"
        v-on="$listeners"
      >
        <template #search="{ attributes, events }">
          <InputSearch
            ref="input"
            :prefix-icon="prefixIcon"
            :hide-input-on-selected="!selected ? true : !hideInputOnSelected"
            :selected="selected"
            :input-search-attributes="attributes"
            :input-search-events="events"
            :disabled="disabled"
            @focus="onFocus"
            @blur="onBlur"
          />
        </template>
        <template v-if="!disableFilter" #selected-option="option">
          <SelectedOption
            :allow-option-icon="selectedOptionAllowOptionIcon"
            :show-selected-icon="showSelectedIcon"
            :validate-icon="
              validateIcon(option) ? validateIcon(option) : prefixIcon
            "
            :label-var="selectedOptionLabelVar"
            :custom-label-var="selectedOptionCustomLabelVar"
            :prefix-icon="prefixIcon"
            :option="option"
            :icon-family="selectedOptionIconFamily"
            :icon-classes="selectedOptionIconClasses"
          />
        </template>
        <template
          v-else
          #selected-option-container="{ option, deselect, multiple, disabled }"
        >
          <SelectedOption
            :allow-option-icon="selectedOptionAllowOptionIcon"
            :show-selected-icon="showSelectedIcon"
            :validate-icon="
              validateIcon(option) ? validateIcon(option) : prefixIcon
            "
            :deselect="deselect"
            :multiple="multiple"
            :disabled="disabled"
            :option="option"
            :label-var="selectedOptionLabelVar"
            :custom-label-var="selectedOptionCustomLabelVar"
            :icon-family="selectedOptionIconFamily"
            :icon-classes="selectedOptionIconClasses"
          />
        </template>
        <template #open-indicator="{ attributes }">
          <Indicator
            :indicator-attributes="attributes"
            :hide-open-indicator="hideOpenIndicator"
            :open-indicator-icon="openIndicatorIcon"
          />
        </template>
        <template #option="option">
          <Option
            :allow-option-icon="optionAllowOptionIcon"
            :validate-icon="
              validateIcon(option) ? validateIcon(option) : prefixIcon
            "
            :option="option"
            :label-var="optionLabelVar"
            :custom-label-var="optionCustomLabelVar"
            :icon-family="optionIconFamily"
            :icon-classes="optionIconClasses"
          />
        </template>
        <template #no-options>
          <NoOptions :text="noOptionsText" />
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
import { formProps } from '@/components v2/Atoms/Forms/globalProps';

const { disabled } = formProps;

import Footer, {
  props as FooterProps,
} from '@/components v2/Atoms/Components/VSelect/Footer';
import Indicator, {
  props as IndicatorProps,
} from '@/components v2/Atoms/Components/VSelect/Indicator';
import InputSearch, {
  props as InputSearchProps,
} from '@/components v2/Atoms/Components/VSelect/InputSearch';
import NoOptions, {
  props as NoOptionsProps,
} from '@/components v2/Atoms/Components/VSelect/NoOptions';
import Option, {
  props as OptionProps,
} from '@/components v2/Atoms/Components/VSelect/Option';
import SelectedOption, {
  props as SelectedOptionProps,
} from '@/components v2/Atoms/Components/VSelect/SelectedOption';
import LoadingBar, {
  props as LoadingBarProps,
} from '@/components v2/Atoms/Components/VSelect/LoadingBar';

const { showFooter } = FooterProps;
const { hideOpenIndicator, openIndicatorIcon, indicatorAttributes } =
  IndicatorProps;

const { prefixIcon, inputSearchAttributes, inputSearchEvents } =
  InputSearchProps;

const { noOptionsText } = NoOptionsProps;
const {
  allowOptionIcon: optionAllowOptionIcon,
  option,
  labelVar: optionLabelVar,
  customLabelVar: optionCustomLabelVar,
  iconFamily: optionIconFamily,
  iconClasses: optionIconClasses,
} = OptionProps;
const {
  deselect,
  multiple,
  showSelectedIcon,
  labelVar: selectedOptionLabelVar,
  iconFamily: selectedOptionIconFamily,
  iconClasses: selectedOptionIconClasses,
  customLabelVar: selectedOptionCustomLabelVar,
  allowOptionIcon: selectedOptionAllowOptionIcon,
} = SelectedOptionProps;
const { loading } = LoadingBarProps;

export const props = {
  // form props
  disabled,
  // footer props
  showFooter,
  // indicator props
  hideOpenIndicator,
  openIndicatorIcon,
  indicatorAttributes,
  // input search props
  prefixIcon,
  inputSearchAttributes,
  inputSearchEvents,
  // no options props
  noOptionsText,
  // option props
  option,
  optionLabelVar,
  optionCustomLabelVar,
  optionAllowOptionIcon,
  optionIconFamily,
  optionIconClasses,
  // selected option props
  deselect,
  multiple,
  showSelectedIcon,
  selectedOptionLabelVar,
  selectedOptionCustomLabelVar,
  selectedOptionAllowOptionIcon,
  selectedOptionIconFamily,
  selectedOptionIconClasses,
  // loading bar props
  loading,
  optionItems: {
    type: Array,
    default: () => [],
  },
  hideInputOnSelected: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  placeHolder: {
    type: String as PropType<string>,
    default: '',
  },
  value: {
    type: [Number, String, Object] as PropType<string | number>,
    default: null,
  },
  selectedBy: {
    type: String as PropType<string>,
    default: 'label',
  },
  noDropOnStart: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  hideClearBtn: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  initInput: {
    type: [Number, String, Object] as PropType<string | number>,
    default: null,
  },
  disableFilter: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  reduceValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  lazyFocus: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  defaultFilter: {
    type: Function,
    default: (options) => {
      return options;
    },
  },
  dataIm: {
    type: String as PropType<string>,
    default: '',
  },
};
Vue.component('VSelect', vSelect);
import { createPopper } from '@popperjs/core';

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
      placement: 'top',
    };
  },
  computed: {
    addFooter() {
      return (this as any).optionItems.length > 0;
    },
    filter() {
      let props = {};
      if (!this.disableFilter) {
        // This line breaks filtering
        // props['filter'] = () => (this as any).defaultFilter(this.optionItems);
      }
      return props;
    },
  },
  created() {
    const selected = (this as any).getSelected((this as any).initInput);
    this.$data.selected = selected
      ? selected[(this as any).optionLabelVar] || ''
      : (this as any).initInput;
  },
  mounted() {
    this.$emit(
      'selectedObj',
      (this as any).getSelected((this as any).initInput)
    );
  },
  methods: {
    dropdownShouldOpen(VueSelect) {
      if (
        this.noDropOnStart &&
        this.optionItems.length > 0 &&
        this.$data.toggleMenu
      ) {
        return VueSelect.open;
      }
      return VueSelect.open && !this.disabled && this.optionItems.length > 0;
    },

    getSelected(input: string) {
      const option = (this as any).optionItems.filter(
        (item) => item[(this as any).selectedBy] === input
      )[0];
      return option || null;
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
      let returnSelectedObj = this.reduce
        ? selectedOption[this.optionLabelVar]
        : selectedOption;
      this.$emit('selectedObj', returnSelectedObj);
    },
    withPopper(dropdownList, component, { width }) {
      dropdownList.style.width = width;
      const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: this.$data.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -1],
            },
          },
          {
            name: 'toggleClass',
            enabled: true,
            phase: 'write',
            fn({ state }) {
              component.$el.classList.toggle(
                'drop-up',
                state.placement === 'top'
              );
            },
          },
        ],
      });
      return () => popper.destroy();
    },
  },
});
</script>

<style lang="scss">
@import '~vue-select/dist/vue-select.css';

.ph-autocomplete__v-select {
  --vs-search-input-color: var(--sd-input-text-default-text-color);
  --vs-search-input-bg: var(--sd-input-text-default-background-color, white);
  --vs-line-height: var(--sd-input-text-md-typography-line-height);
  --vs-border-color: var(--sd-theme-input-border-color);
  --vs-border-width: 1px;
  --vs-border-radius: var(--sd-input-md-border-radius);
  --vs-search-input-placeholder-color: var(
    --sd-input-text-default-placeholder-color
  );
  --vs-selected-border-style: solid;
  --vs-dropdown-option-padding: var(--sd-input-text-md-padding-top)
    var(--sd-input-text-md-padding-right) var(--sd-input-text-md-padding-bottom)
    var(--sd-input-text-md-padding-left);
  --vs-actions-padding: 4px 6px 0 3px;
  --vs-actions-padding: 0px var(--sd-input-text-md-padding-right);

  .vs__dropdown-toggle {
    border-radius: var(--sd-input-md-border-radius);
    padding-bottom: 0;
    border-color: var(--sd-theme-input-border-color);
    background-color: var(--sd-input-text-default-background-color, white);

    &:focus-within {
      outline: none;
      color: var(--sd-input-text-focus-text-color);
      background: var(--sd-input-text-focus-background-color);
      box-shadow: var(--sd-input-text-focus-box-shadow);
      border-color: var(--sd-input-text-focus-border-color);

      svg {
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform;
        color: var(--sd-input-text-focus-icon-color);
      }
    }
  }
}

.vs__selected {
  margin: 0;
  padding: 0;
  border-width: 0px;
  min-width: 0;
  max-width: 100%;
  color: var(--sd-theme-input-text-color);

  & + .ph-autocomplete-search .ph-autocomplete-prefix-icon {
    display: none;
  }
}

.vs__selected-options {
  flex-wrap: nowrap;
  min-width: 0;
  padding: 0;

  input {
    -webkit-appearance: none;
    color: currentColor;
    padding-left: var(--sd-input-text-md-padding-left);
    padding-right: var(--sd-input-text-md-padding-right);

    &:focus {
      padding-left: var(--sd-input-text-md-padding-left);
      padding-right: var(--sd-input-text-md-padding-right);
    }

    &::placeholder {
      color: var(--sd-input-text-default-placeholder-color);
      opacity: 1;
    }
  }
}

.vs__dropdown-menu {
  padding: 0;
  margin: 0;
  max-height: 304px;
  border-radius: var(--sd-input-md-border-radius);
}

.vs__dropdown-option {
  padding: 0;
  cursor: pointer;
  background: var(--sd-dropdown-item-default-background-color);
  color: var(--sd-dropdown-item-default-text-color);
  font-family: var(--sd-input-text-md-typography-font-family);
  font-size: var(--sd-input-text-md-typography-font-size);
  font-weight: var(--sd-input-text-md-typography-font-weight);
  letter-spacing: var(--sd-input-text-md-typography-letter-spacing);
  line-height: var(--sd-input-text-md-typography-line-height);
  text-transform: var(--sd-input-text-md-typography-text-case);
  text-decoration: var(--sd-input-text-md-typography-text-decoration);
}

.vs__dropdown-option--highlight {
  background-color: var(--sd-dropdown-item-hover-background-color);
  color: var(--sd-dropdown-item-hover-text-color);
}

.vs__actions {
  color: var(--sd-input-text-default-icon-color);
}

.vs__clear {
  position: relative;
  width: 20px;
  height: 20px;
  color: var(--sd-input-text-default-icon-color);
  fill: var(--sd-input-text-default-icon-color);
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    visibility: hidden;
  }

  &:after {
    content: ' ';
    -webkit-mask: url('data:image/svg+xml,<svg data-v-51aee7a5="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="button-icon button-icon-left svg-inline--fa fa-xmark"><path data-v-51aee7a5="" fill="currentColor" d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z" class=""></path></svg>');
    mask: url('data:image/svg+xml,<svg data-v-51aee7a5="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="button-icon button-icon-left svg-inline--fa fa-xmark"><path data-v-51aee7a5="" fill="currentColor" d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z" class=""></path></svg>');
    -webkit-mask-size: contain;
    mask-size: contain;
    mask-position: center;
    position: absolute;
    left: 4px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 12px;
    height: 16px;
    background: var(--sd-input-text-default-icon-color);
  }
}
</style>
