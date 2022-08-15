<template>
  <p-input
    class="ph-input-basic-select"
    :class="{ 'ph-input-error-content': errors.length }"
    :errors="errors"
  >
    <p-label>
      {{ label }}
      <slot v-if="!label" name="label" />
    </p-label>
    <div>
      <v-select
        :value="value"
        :searchable="false"
        class="ph-input-basic-select__v-select"
        :options="items"
        :reduce="!returnObj ? content => content[labelVar] : content => content"
        :placeholder="placeholder"
        :label="customLabelVar"
        :class="[
          'ph-input-basic-select-drop' + dropType,
          { 'ph-input-basic-select-open': isOpen },
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
          '--placeholderColor': placeholderColor,
          '--clearPadding': hideOpenIndicator ? '0px' : '8px',
        }"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @open="onOpen"
        @close="onClose"
      >
        <template #selected-option="option">
          <div class="ph-input-basic-select__selected ph-flex">
            <p-icon
              v-if="allowOptionIcon && showSelectedIcon"
              class="ph-my-auto ph-mx-4 ph-text-brand2"
              :name="validateIcon(option) ? validateIcon(option) : prefixIcon"
              type="med"
            />
            <span v-else class="ph-w-3" />
            <label
              class="ph-h-10 ph-overflow-hidden ph-whitespace-normal"
              style="line-height: 40px;"
              v-html="
                option[customLabelVar]
                  ? option[customLabelVar]
                  : option[labelVar]
              "
            />
          </div>
        </template>
        <template #option="option">
          <div class="ph-input-basic-select__option ph-flex">
            <p-icon
              v-if="allowOptionIcon && validateIcon(option)"
              class="ph-my-auto ph-mr-4"
              :style="{ color: option.iconColor }"
              :name="validateIcon(option)"
              :type="optionIconSize"
            />
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
            />
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
      </v-select>
    </div>
  </p-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import vSelect from 'vue-select';
import PLabel from '../Label';
import PInput from '../Input';
import { InputSelectData, InputValueType } from './types';
import {
  FontBase,
  FontLarge,
  FontSmall,
  FontXSmall,
  LeadingLoose,
  LeadingMax,
  LeadingNormal,
  LeadingSnug,
  LeadingTight,
} from '../Autocomplete/types';

export default Vue.extend({
  name: 'PInputBasicSelect',
  components: {
    vSelect,
    PLabel,
    PInput,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
    errors: {
      type: Array as PropType<string[]>,
      default: (): [] => [],
    },
    value: {
      type: [Number, String, Object] as PropType<InputValueType>,
      default: null,
    },
    placeholder: {
      type: String as PropType<string>,
      default: '',
    },
    placeholderColor: {
      type: String as PropType<string>,
      default: '#c4c4c4',
    },
    backgroundColor: {
      type: String as PropType<string>,
      default: '#FFFFFF',
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
    borderFocusColor: {
      type: String as PropType<string>,
      default: '#009EDE',
    },
    hideClearBtn: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    // Open indicator
    hideOpenIndicator: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    openIndicatorIcon: {
      type: String as PropType<string>,
      default: 'ChevronDown',
    },
    openIndicatorIconSize: {
      type: String as PropType<string>,
      default: 'xs',
    },
    openIndicatorColor: {
      type: String as PropType<string>,
      default: '#009EDE',
    },
    openIndicatorIndent: {
      type: String as PropType<string>,
      default: '10px',
    },

    customLabelVar: {
      type: String as PropType<string>,
      default: 'label',
    },
    returnObj: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    dropType: {
      type: String as PropType<string>,
      default: 'down',
    },
    // Option
    allowOptionIcon: {
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
    showSelectedIcon: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    maxHeight: {
      type: String as PropType<string>,
      default: '304px',
    },
  },
  data(): InputSelectData {
    return {
      isFocused: false,
      isOpen: false,
      id: '',
    };
  },
  mounted() {
    this.id = 'photon_input_' + this._uid;
  },
  methods: {
    validateIcon(option: { icon: string }) {
      return option.icon ? option.icon : null;
    },

    onInput(value: string) {
      console.log('Input change value', value);
      this.$emit('input', value);
    },

    onFocus(e: InputEvent) {
      this.isFocused = true;
      this.$emit('focus', e);
    },

    onBlur(e: InputEvent) {
      this.isFocused = false;
      this.$emit('blur', e);
    },

    onOpen() {
      this.isFocused = true;
      this.isOpen = true;
      this.$emit('onFocus');
    },

    onClose() {
      this.isFocused = false;
      this.isOpen = false;
      this.$emit('onBlur');
    },
  },
});
</script>

<style lang="postcss">
@import '~vue-select/dist/vue-select.css';

.ph-input-basic-select__v-select {
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

.vs__search::placeholder {
  @apply ph-ml-3;
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
  @apply ph-pl-3;
  color: var(--placeholderColor);
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

.ph-input-basic-select__v-select .vs__dropdown-toggle {
  border-color: var(--borderColor);
  background-color: var(--bgColor);
}

.ph-input-basic-select-open .vs__dropdown-toggle {
  border-color: var(--borderFocusColor, #009ede);
  @apply ph-rounded-bl-lg;
  @apply ph-rounded-br-lg;
}

.ph-input-basic-select__v-select .vs__dropdown-toggle:focus-within {
  border-color: var(--borderFocusColor, #009ede);
  @apply ph-rounded-bl-lg;
  @apply ph-rounded-br-lg;
}

.ph-input-basic-select__v-select .vs__dropdown-toggle:focus-within svg {
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

.ph-input-basic-select__option .af_hl {
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

.ph-input-basic-select-dropup .vs__dropdown-menu {
  top: auto;
  bottom: calc(100% + 10px);
}
.vs__actions {
  @apply ph-text-brand2;
}
.vs__clear {
  @apply ph-fill-current;
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

.ph-input-error-content input,
.ph-input-error-content svg {
  @apply ph-text-alert2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
