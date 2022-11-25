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
        :reduce="
          !simple && !returnObj
            ? (content) => content[labelVar]
            : (content) => content
        "
        :placeholder="placeHolder"
        :class="[
          'ph-autocomplete-drop' + dropType,
          { 'ph-autocomplete-open': toggleMenu },
        ]"
        :clearable="!hideClearBtn"
        :style="{
          '--bgColor': backgroundColor,
          '--textColor': textColor,
          '--borderColor': borderColor,
          '--highlightBgColor': highlightBackgroundColor,
          '--borderFocusColor': borderFocusColor,
          '--openIndicatorColor': openIndicatorColor,
          '--openIndicatorIndent': openIndicatorIndent,
          '--maxHeight': maxHeight,
          '--placeHolderColor': placeHolderColor,
          '--clearPadding': hideOpenIndicator ? '0px' : '8px',
        }"
        :append-to-body="!lazyFocus"
        :calculate-position="lazyFocus ? null : withPopper"
        v-on="$listeners"
        @input="onInput"
        @search="onSearch"
        @search:blur="$emit('blur')"
        @open="onOpen"
        @close="onClose"
        @option:selected="onSelected"
      >
        <template #search="{ attributes, events }">
          <div class="ph-autocomplete-search ph-flex ph-flex-1">
            <p-icon
              v-if="prefixIcon"
              ref="prefixIcon"
              class="ph-autocomplete-prefix-icon ph-my-auto ph-mx-4"
              :class="(!iconColor && 'ph-text-grey2') || ''"
              :style="{ color: iconColor || 'inherit' }"
              :name="prefixIcon"
              type="med"
            ></p-icon>
            <input
              v-show="!selected ? true : !hideInputOnSelected"
              ref="input"
              class="vs__search ph-flex-1"
              :style="{ '--inputIndent': prefixIcon ? '8px' : '12px' }"
              v-bind="attributes"
              v-on="events"
              @focus="onFocus"
              @blur="onBlur"
            />
          </div>
        </template>
        <template v-if="!disableFilter" #selected-option="option">
          <div class="ph-autocomplete__selected ph-flex">
            <p-icon
              v-if="allowOptionIcon && showSelectedIcon"
              class="ph-my-auto ph-mx-4 ph-text-brand2"
              :name="validateIcon(option) ? validateIcon(option) : prefixIcon"
              type="med"
            ></p-icon>
            <span v-else class="ph-w-3"></span>
            <label
              class="ph-h-10 ph-overflow-hidden ph-whitespace-normal"
              style="line-height: 40px"
              v-html="
                option[customLabelVar]
                  ? option[customLabelVar]
                  : option[labelVar]
              "
            ></label>
          </div>
        </template>
        <template
          v-else
          #selected-option-container="{ option, deselect, multiple, disabled }"
        >
          <div class="ph-autocomplete__selected ph-flex ph-py-0.5">
            <p-icon
              v-if="allowOptionIcon && showSelectedIcon"
              class="ph-my-auto ph-mx-4 ph-text-brand2"
              :name="validateIcon(option) ? validateIcon(option) : prefixIcon"
              type="med"
              :data-deselect="deselect"
              :data-multiple="multiple"
              :data-disabled="disabled"
            ></p-icon>
            <span v-else class="ph-w-3"></span>
            <label
              class="ph-h-10 ph-overflow-hidden ph-whitespace-normal ph-pt-0.5"
              style="line-height: 40px"
              v-html="
                option[customLabelVar]
                  ? option[customLabelVar]
                  : option[labelVar]
              "
            ></label>
          </div>
        </template>
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <p-icon
              v-if="!hideOpenIndicator"
              class="openIndicator"
              :name="openIndicatorIcon"
              :type="openIndicatorIconSize"
            />
          </span>
        </template>
        <template #option="option">
          <div class="ph-autocomplete__option ph-flex">
            <p-icon
              v-if="allowOptionIcon && validateIcon(option)"
              class="ph-my-auto ph-mr-4"
              :style="{ color: option.iconColor }"
              :name="validateIcon(option)"
              :type="optionIconSize"
            ></p-icon>
            <label
              class="ph-whitespace-normal"
              :class="[
                'ph-option-leading-' + optionLeading,
                'ph-text-' + optionFontSize,
              ]"
              v-html="
                option[customLabelVar]
                  ? option[customLabelVar]
                  : option[labelVar]
              "
            ></label>
          </div>
        </template>
        <template #no-options>
          <label class="ph-pl-1 noOptionnsText" v-html="noOptionsText"></label>
        </template>
        <template #list-footer>
          <div
            v-if="showFooter"
            class="
              ph-opacity-0 ph-transition
              ph-autocomplete__option--footer
              ph-flex
              ph-m-0
              ph-px-5
              ph-py-2
              ph-text-sm
              ph-sticky
              ph-bottom-0
              ph-z-1
              ph-bg-white
            "
            :class="addFooter ? 'ph-opacity-100' : ''"
          >
            <slot name="list-footer"> </slot>
          </div>
        </template>
      </v-select>
      <div
        ref="progressBar"
        class="ph-autocomplete-progress"
        :class="{ 'ph-progress-loading': loading }"
      >
        <div class="ph-progress-bar-short-ltr"></div>
        <div class="ph-progress-bar-long-ltr"></div>
      </div>
      <div class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import vSelect from 'vue-select';
import PIcon from '../Icon';
import {
  IconXSmall,
  IconSmall,
  IconMedium,
  IconLarge,
  FontXSmall,
  FontSmall,
  FontBase,
  FontLarge,
  LeadingTight,
  LeadingSnug,
  LeadingNormal,
  LeadingLoose,
  LeadingMax,
  DropDown,
  DropUp,
  InputValueType,
} from './types';
import { createPopper } from '@popperjs/core';

Vue.component('VSelect', vSelect);

export default Vue.extend({
  name: 'PAutoComplete',

  components: {
    vSelect,
    PIcon,
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
    placeHolderColor: {
      type: String as PropType<string>,
      default: 'currentColor',
    },
    noOptionsText: {
      type: String as PropType<string>,
      default: '',
    },
    allowOptionIcon: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    optionIconSize: {
      type: String as PropType<string>,
      default: 'xs',
      validator(value: string): boolean {
        return (
          [IconXSmall, IconSmall, IconMedium, IconLarge].indexOf(value) !== -1
        );
      },
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
    optionFontSize: {
      type: String as PropType<string>,
      default: 'base',
      validator(value: string): boolean {
        return (
          [FontXSmall, FontSmall, FontBase, FontLarge].indexOf(value) !== -1
        );
      },
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
    backgroundColor: {
      type: String as PropType<string>,
      default: '#FFFFFF',
    },
    autoCompleteStyle: {
      type: String as PropType<string>,
      default: '',
    },
    showFooter: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    textColor: {
      type: String as PropType<string>,
      default: '#323232',
    },
    highlightBackgroundColor: {
      type: String as PropType<string>,
      default: '#eeeeee',
    },
    borderColor: {
      type: String as PropType<string>,
      default: '#e0e0e0',
    },
    iconColor: {
      type: String as PropType<string>,
      default: '',
    },
    borderFocusColor: {
      type: String as PropType<string>,
      default: '#009EDE',
    },
    openIndicatorIcon: {
      type: String as PropType<string>,
      default: 'ChevronDown',
    },
    openIndicatorIconSize: {
      type: String as PropType<string>,
      default: 'xs',
      validator(value: string): boolean {
        return (
          [IconXSmall, IconSmall, IconMedium, IconLarge].indexOf(value) !== -1
        );
      },
    },
    openIndicatorColor: {
      type: String as PropType<string>,
      default: '#009EDE',
    },
    openIndicatorIndent: {
      type: String as PropType<string>,
      default: '10px',
    },
    searchInput: {
      type: String as PropType<string>,
      default: null,
    },
    value: {
      type: [Number, String, Object] as PropType<InputValueType>,
      default: null,
    },
    maxHeight: {
      type: String as PropType<string>,
      default: '304px',
    },
    returnObj: {
      type: Boolean as PropType<boolean>,
      default: false,
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
    dropType: {
      type: String as PropType<string>,
      default: 'down',
      validator(value: string): boolean {
        return [DropUp, DropDown].indexOf(value) !== -1;
      },
    },
    lazyFocus: {
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
      default: (options) => {
        return options;
      },
    },
    simple: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    darkMode: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  data() {
    return {
      baseClassList: [
        'ph-text-brand2',
        'ph-group',
        'ph-relative',
        'ph-transition',
        'ph-rounded-4',
        'focus:ph-outline-none',
        'focus:ph-underline',
        'focus:ph-text-brandh2',
        'hover:ph-text-brandh2',
      ],
      focused: false,
      selected: '',
      searchText: '',
      manualInput: '',
      toggleMenu: false,
      placement: this.dropType === DropDown ? 'bottom' : 'top',
    };
  },
  computed: {
    needAppendToBody() {
      return this.dropType === DropUp;
    },
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
        (item) => item[this.selectedBy] === input
      )[0];
      return option ? option : null;
    },
    validateIcon(option: { icon: string }) {
      return option.icon ? option.icon : null;
    },
    classList(): string[] {
      const a: string[] = [
        ...this.$data.baseClassList,
        ...this.autoCompleteStyle,
        ...('ph-autocomplete-drop' + this.dropType),
      ];
      return a;
    },
    onSearch(search: string) {
      this.$data.searchText = search;
      this.$emit('update:searchInput', search);
      //loading(true);
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
      this.$data.focused = true;
      this.$data.toggleMenu = true;
      this.$emit('onFocus');
    },
    onBlur() {
      this.$data.focused = false;
      this.$emit('onBlur');
    },
    onClose() {
      this.$data.focused = false;
      this.$data.toggleMenu = false;
      this.$emit('onBlur');
    },
    onSelected(selectedOption: any) {
      this.$emit('selectedObj', selectedOption);
    },
    withPopper(dropdownList, component, { width }) {
      /**
       * We need to explicitly define the dropdown width since
       * it is usually inherited from the parent with CSS.
       */
      dropdownList.style.width = width;

      /**
       * Here we position the dropdownList relative to the $refs.toggle Element.
       *
       * The 'offset' modifier aligns the dropdown so that the $refs.toggle and
       * the dropdownList overlap by 1 pixel.
       *
       * The 'toggleClass' modifier adds a 'drop-up' class to the Vue Select
       * wrapper so that we can set some styles for when the dropdown is placed
       * above.
       */
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

      /**
       * To prevent memory leaks Popper needs to be destroyed.
       * If you return function, it will be called just before dropdown is removed from DOM.
       */
      return () => popper.destroy();
    },
  },
});
</script>

<style lang="postcss" scoped>
@import '~vue-select/dist/vue-select.css';

.ph-autocomplete__v-select {
  --maxHeight: 304px;
}

.vs__dropdown-toggle {
  @apply ph-rounded-lg;
  @apply ph-pb-0;
}

.vs__selected {
  margin: 0px 2px 0;
  border-width: 0px;
}
.vs__selected-options {
  @apply ph-flex-nowrap;
}
.vs__selected-options input {
  @apply ph-px-5;
  padding-left: var(--inputIndent) !important;
  cursor: text;
}

.vs__selected-options input::placeholder {
  color: var(--placeHolderColor);
}

.vs__selected-options input {
  color: currentColor;
  -webkit-appearance: none;
}

.vs__search {
  @apply ph-h-10;
  padding-left: 0px !important;
}

.vs__search,
.vs__search:focus {
  @apply ph-py-0.5;
  margin: 0;
  border-width: 0px;
}

.ph-autocomplete__v-select .vs__dropdown-toggle {
  border-color: var(--borderColor);
  background-color: var(--bgColor);
}

.ph-autocomplete-open .vs__dropdown-toggle {
  border-color: var(--borderFocusColor, #009ede);
  @apply ph-rounded-bl-lg;
  @apply ph-rounded-br-lg;
}

.ph-autocomplete__v-select .vs__dropdown-toggle:focus-within {
  border-color: var(--borderFocusColor, #009ede);
  @apply ph-rounded-bl-lg;
  @apply ph-rounded-br-lg;
}

.ph-autocomplete__v-select .vs__dropdown-toggle:focus-within svg {
  @apply ph-transition;
  @apply ph-text-brand2;
}

.vs__dropdown-option--highlight {
  background-color: var(--highlightBgColor, #eeeeee);
  color: var(--textColor);
}

.vs__open-indicator {
  color: var(--openIndicatorColor);
}

.vs__search {
  opacity: 1 !important;
}

.vs__selected {
  color: var(--textColor);
}

.vs__actions {
  padding-right: var(--openIndicatorIndent);
}

.ph-autocomplete__option .af_hl {
  @apply ph-inline-block;
  @apply ph-m-0;
  @apply ph-p-px;
  @apply ph-rounded-lg;
  @apply ph-bg-grey5;
  @apply ph-text-grey1;
}

.vs__no-options {
  @apply ph-text-left;
  @apply ph-pl-4;
}

.vs__dropdown-menu {
  padding-left: 0px !important;
  @apply ph-mt-0.5;
  @apply ph-p-0;
  @apply ph-pt-3;
  margin-top: 2px !important;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  max-height: var(--maxHeight, 304px);
}

.ph-autocomplete-dropup .vs__dropdown-menu {
  top: auto;
  bottom: calc(100% + 10px);
}
.vs__actions {
  @apply ph-text-brand2;
}
.vs__clear {
  @apply ph-fill-current;
}
.vs__selected + .ph-autocomplete-search .ph-autocomplete-prefix-icon {
  display: none;
}
.ph-autocomplete__selected
  + .ph-autocomplete-search
  .ph-autocomplete-prefix-icon {
  display: none;
}
.ph-option-leading-loose {
  @apply ph-py-2;
}
.ph-option-leading-max {
  @apply ph-py-3;
}

.vs__clear {
  position: relative;
  width: 24px;
  height: 24px;
  @apply ph-text-brand2;
  margin-right: var(--clearPadding, 8px);
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

.ph-autocomplete-progress {
  @apply ph-w-full;
  @apply ph-overflow-hidden;
  @apply ph-relative;
}

.ph-progress-loading {
  @apply ph-h-px;
}

.ph-autocomplete-progress-load-bar {
}

.ph-progress-bar-long-ltr {
  background-color: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: auto;
  top: 0;
  width: auto;
  will-change: left, right;
  @apply ph-h-0.5;
  @apply ph-bg-brand2;
  animation-name: progress-linear-long-ltr;
  animation-duration: 2.2s;
  animation-iteration-count: infinite;
}

.ph-progress-bar-short-ltr {
  background-color: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: auto;
  top: 0;
  width: 50%;
  will-change: left, right;
  @apply ph-h-0.5;
  @apply ph-bg-brand2;
  animation-name: progress-linear-short-ltr;
  animation-duration: 2.2s;
  animation-iteration-count: infinite;
}

@keyframes progress-linear-short-ltr {
  0% {
    eft: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}

@keyframes progress-linear-long-ltr {
  0% {
    left: -90%;
    right: 100%;
  }

  60% {
    left: -90%;
    right: 100%;
  }

  100% {
    left: 100%;
    right: -35%;
  }
}
</style>
