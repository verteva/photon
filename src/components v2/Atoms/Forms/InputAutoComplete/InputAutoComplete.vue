<template>
  <div class="ph-autocomplete">
    <div class="ph-autocomplete__field">
      <v-select
        ref="autocomplete"
        v-model="selected"
        data-testid="autocomplete"
        class="ph-autocomplete__v-select"
        :value="initInput"
        :options="optionItems"
        :label="selectedOptionLabelVar"
        :reduce="
          !simple && !returnObj
            ? content => content[selectedOptionLabelVar]
            : content => content
        "
        append-to-body
        :placeholder="placeHolder"
        :class="'ph-autocomplete-open' && toggleMenu"
        :clearable="!hideClearBtn"
        :dropdown-should-open="dropdownShouldOpen"
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
            :prefix-icon="prefixIcon"
            :option="option"
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
            :validate-icon="validateIcon(option)"
            :option="option"
            :label-var="optionLabelVar"
            :custom-label-var="optionCustomLabelVar"
          />
        </template>
        <template #no-options>
          <NoOptions :text="text" />
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
const {
  hideOpenIndicator,
  openIndicatorIcon,
  indicatorAttributes,
} = IndicatorProps;

const {
  prefixIcon,
  inputSearchAttributes,
  inputSearchEvents,
} = InputSearchProps;

const { text } = NoOptionsProps;
const {
  allowOptionIcon: optionAllowOptionIcon,
  option,
  labelVar: optionLabelVar,
  customLabelVar: optionCustomLabelVar,
} = OptionProps;
const {
  deselect,
  multiple,
  showSelectedIcon,
  labelVar: selectedOptionLabelVar,
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
  text,
  // option props
  option,
  optionLabelVar,
  optionCustomLabelVar,
  optionAllowOptionIcon,
  // selected option props
  deselect,
  multiple,
  showSelectedIcon,
  selectedOptionLabelVar,
  selectedOptionCustomLabelVar,
  selectedOptionAllowOptionIcon,
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
  simple: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  returnObj: {
    type: Boolean as PropType<boolean>,
    default: false,
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
      return (this as any).optionItems.length > 0;
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
      return VueSelect.open && this.optionItems.length > 0;
    },

    getSelected(input: string) {
      const option = (this as any).optionItems.filter(
        item => item[(this as any).selectedBy] === input
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
