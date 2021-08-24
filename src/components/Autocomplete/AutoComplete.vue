<template>
  <div
    class="ph-autocomplete"
    @focus="onFocus"
  >
    <div class="ph-autocomplete__field">
      <v-select
        v-model="selected"
        v-bind="conditionalProps"
        class="ph-autocomplete__v-select"
        :options="optionItems"
        :label="labelVar"
        :reduce="!returnObj?content => content[labelVar]:content => content"
        :placeholder="placeHolder"
        :class="classList"
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
          '--fixedMode': stickyTopOnMobile? 'fixed':'relative',
        }"
        v-on="$listeners"
        @input="onInput"
        @search="onSearch"
      >
        <template #search="{ attributes, events }">
          <div class="ph-autocomplete-search ph-flex ph-flex-1">
            <p-icon
              v-if="prefixIcon"
              class="ph-autocomplete-prefix-icon ph-my-auto ph-mx-4 ph-text-grey2"
              :name="prefixIcon"
              type="sm"
            ></p-icon>
            <input
              class="vs__search ph-flex-1"
              :style="{ '--inputIndent': prefixIcon ? '8px' : '12px' }"
              v-bind="attributes"
              v-on="events"
              @focus="onFocus"
            />
          </div>
        </template>
        <template #selected-option-container="{ option }">
          <div class="ph-autocomplete__selected ph-flex">
            <p-icon
              v-if="allowOptionIcon && validateIcon(option) && showSelectedIcon"
              class="ph-my-auto ph-mx-4 ph-text-brand2"
              :name="validateIcon(option)"
              type="sm"
            ></p-icon>
            <span
              v-else
              class="ph-w-4"
            ></span>
            <label
              class="ph-h-11 ph-pt-3"
              v-html="option[customLabelVar]"
            ></label>
          </div>
        </template>
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <p-icon
              v-if="!hideOpenIndicator"
              name="ChevronDown"
              type="xs"
            />
          </span>
        </template>
        <template #option="option">
          <div
            class="ph-autocomplete__option ph-flex"
          >
            <p-icon
              v-if="allowOptionIcon && validateIcon(option)"
              class="ph-my-auto ph-mr-4"
              :style="{color: option.iconColor}"
              :name="validateIcon(option)"
              :type="optionIconSize"
            ></p-icon>
            <label v-html="option[customLabelVar]?option[customLabelVar]:option[labelVar]"></label>
          </div>
        </template>
        <template #no-options>
          <label
            class="ph-pl-1 ph-"
            v-html="noOptionsText"
          ></label>
        </template>
        <template #list-footer>
          <div
            v-if="showFooter"
            class="ph-opacity-0 ph-transition ph-autocomplete__option--footer ph-flex ph-m-0 ph-px-5 ph-py-2 ph-text-sm ph-sticky ph-bottom-0 ph-z-1 ph-bg-white"
            :class="addFooter? 'ph-opacity-100': ''"
          >
            <label v-html="footer"></label>
          </div>
        </template>
      </v-select>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue, { PropType } from 'vue';
import vSelect from 'vue-select';
import PIcon from '../Icon';
import {
  IconXSmall,
  IconSmall,
  IconMedium,
  IconLarge,
} from "./types";
import 'vue-select/dist/vue-select.css';

Vue.component('vSelect', vSelect);

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
      default: false
    },
    optionIconSize: {
      type: String as PropType<string>,
      default: IconSmall,
      validator(value: string): boolean {
        return [IconXSmall, IconSmall, IconMedium, IconLarge].indexOf(value) !== -1;
      },
    },
    showSelectedIcon:{
      type: Boolean as PropType<boolean>,
      default: false
    },
    prefixIcon: {
      type: String as PropType<string>,
      default: '',
    },
    hideOpenIndicator: {
      type: Boolean as PropType<boolean>,
      default: false
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
      default: true
    },
    footer: {
      type: String as PropType<string>,
      default: ``,
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
    openIndicatorColor: {
      type: String as PropType<string>,
      default: '#009EDE',
    },
    openIndicatorIndent:{
      type: String as PropType<string>,
      default: '10px',
    },
    searchInput: {
      type: String as PropType<string>,
      default: null,
    },
    value: {
      type: String as PropType<string>,
      default: null,
    },
    maxHeight: {
      type: String as PropType<string>,
      default: '',
    },
    returnObj: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    codeVar: {
      type: String as PropType<string>,
      default: 'code',
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
      default: false
    },
    hideClearBtn: {
      type: Boolean as PropType<boolean>,
      default: false
    }

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
      selected: '',
      searchText: '',
      manualInput: '',
    };
  },

  computed: {
    addFooter () {
      return this.$data.searchText !== '';
    },
    conditionalProps() {
      let props = {};
      if(this.noDropOnStart){
        props['dropdown-should-open'] = () => this.$data.searchText !== '';
      }
      return props;
    }
  },
  methods: {
    validateIcon (option: { icon: string; }) {
      return option.icon? option.icon : this.prefixIcon;
    },
    classList(): string[] {
      const a: string[] = [
        ...this.$data.baseClassList,
        ...this.autoCompleteStyle,
      ];
      return a;
    },
    onSearch (search: string ) {
      this.$data.searchText = search;
      this.$emit('update:searchInput', search);
      //loading(true);
    },
    onInput (val: string) {
      this.$emit('update:selected', this.$data.selected);
      this.$emit('update:value', val);
    },
    onFocus () {
      this.$emit("onFocus");
    }
  },
});
</script>

<style lang="postcss">
.vs__dropdown-toggle{
  @apply ph-rounded-xl;
}
.vs__selected-options input {
  @apply ph-px-5;
  padding-left: var(--inputIndent)!important;
}

.vs__selected-options input::placeholder {
  color: var(--placeHolderColor);
}
.vs__dropdown-option {
  @apply ph-py-1;
}

.vs__search{
  @apply ph-h-10;
  padding-left: 0px!important;
}

.ph-autocomplete__v-select .vs__dropdown-toggle{
  border-color: var(--borderColor);
  background-color: var(--bgColor);
}
.ph-autocomplete__v-select .vs__dropdown-toggle:focus-within{
  border-color: var(--borderFocusColor);
  @apply ph-rounded-bl-xl;
  @apply ph-rounded-br-xl;
}

.ph-autocomplete__v-select .vs__dropdown-toggle:focus-within svg{
  @apply ph-transition;
  @apply ph-text-brand2;
}

.vs__dropdown-option--highlight{
  background-color: var(--highlightBgColor);
  color: var(--textColor);
}

.vs__open-indicator{
  color: var(--openIndicatorColor);
}

.vs__actions{
  padding-right: var(--openIndicatorIndent);
}

.ph-autocomplete__option .af_hl{
  @apply ph-inline-block;
  @apply ph-m-0;
  @apply ph-p-px;
  @apply ph-rounded-xl;
  @apply ph-bg-grey5;
  @apply ph-text-grey1;
}

.vs__no-options{
  @apply ph-text-left;
  @apply ph-pl-4;
}

.vs__dropdown-menu{
  padding-left:0px!important;
  @apply ph-mt-0.5;
  @apply ph-p-0;
  @apply ph-pt-3;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  max-height: var(--maxHeight);
}
.vs__actions{
  @apply ph-text-brand2;
}
.vs__clear{
  @apply ph-fill-current;
}
.ph-autocomplete__selected + .ph-autocomplete-search .ph-autocomplete-prefix-icon{
  display: none;
}
</style>