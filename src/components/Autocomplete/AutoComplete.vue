<template>
  <div class="ph-autocomplete">
    <div class="ph-autocomplete__field">
      <v-select
        v-model="selected"
        class="ph-autocomplete__v-select"
        :dropdown-should-open="() => showMenu"
        :options="optionItems"
        label="label"
        :reduce="content => content.label"
        :placeholder="placeHolder"
        :class="classList"
        :style="{ 
          '--bgColor': backgroundColor, 
          '--textColor': textColor, 
          '--borderColor': borderColor, 
          '--highlightBgColor': highlightBackgroundColor, 
          '--borderFocusColor': borderFocusColor, 
          '--maxHeight': maxHeight
        }"
        v-on="$listeners"
        @input="onInput"
        @search="onSearch"
      >
        <template #search="{ attributes, events }">
          <div class="ph-autocomplete-search ph-flex ph-flex-1">
            <p-icon
              v-if="allowIcon"
              class="ph-autocomplete-prefix-icon ph-my-auto ph-mx-4 ph-text-grey2"
              :name="defaultIcon"
              type="sm"
            ></p-icon>
            <input
              class="vs__search ph-flex-1"
              :style="{ '--inputIndent': allowIcon ? '0px' : '12px' }"
              v-bind="attributes"
              v-on="events"
            />
          </div>
        </template>
        <template #selected-option-container="{ option }">
          <div class="ph-autocomplete__selected ph-flex">
            <p-icon
              v-if="allowIcon && prefixIcon(option)"
              class="ph-my-auto ph-mx-4 ph-text-brand2"
              :name="prefixIcon(option)"
              type="sm"
            ></p-icon>
            <span
              v-else
              class="ph-w-4"
            ></span>
            <label
              class="ph-h-11 ph-pt-3"
              v-html="option.custom_label"
            ></label>
          </div>
        </template>
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <p-icon
              v-if="!hideOpenIndicator"
              name="ChevronDown"
              type="sm"
            />
          </span>
        </template>
        <template #option="option">
          <div
            class="ph-autocomplete__option ph-flex"
          >
            <p-icon
              v-if="allowIcon && prefixIcon(option)"
              class="ph-my-auto ph-mr-4"
              :name="prefixIcon(option)"
              type="xs"
            ></p-icon>
            <label v-html="option.custom_label"></label>
          </div>
        </template>
        <template #no-options>
          <label class="ph-pl-1 ph-" v-html="noOptionsText"></label>
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
    placeHolder: {
      type: String as PropType<string>,
      default: '',
    },
    noOptionsText: {
      type: String as PropType<string>,
      default: '',
    },
    allowIcon: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    defaultIcon: {
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
    showMenu () {
      return this.$data.searchText !== '';
    }
  },
  methods: {
    prefixIcon (option: { icon: string; }) {
      return option.icon? option.icon : this.defaultIcon;
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
      this.$emit('update:value', val);
    },
    
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