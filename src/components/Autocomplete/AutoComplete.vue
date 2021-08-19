<template>
  <div class="ph-autocomplete">
    <div class="ph-autocomplete__field">
      <v-select
        class="ph-autocomplete__v-select"
        :options="optionItems"
        label="label"
        :reduce="content => content.code"
        :placeholder="placeHolder"
        :class="classList"
        :style="{ '--bgColor': backgroundColor, '--textColor': textColor, '--borderColor': borderColor, '--highlightBgColor': highlightBackgroundColor, '--borderFocusColor': borderFocusColor}"
        v-on="$listeners"
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
              v-html="option.label"
            ></label>
          </div>
        </template>
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <p-icon
              v-if="showOpenIndicator"
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
            <label v-html="option.label"></label>
          </div>
        </template>
        <template #list-footer>
          <div
            v-if="showFooter"
            class="ph-autocomplete__option--footer ph-flex ph-mx-4 ph-my-2 ph-text-sm"
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
    allowIcon: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    defaultIcon: {
      type: String as PropType<string>,
      default: '',
    },
    showOpenIndicator: {
      type: Boolean as PropType<boolean>,
      default: true
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
      manualInput: '',
    };
  },

  computed: {
    
  },

  methods: {
    prefixIcon (option: { icon: string; }) {
      return option.icon? option.icon : this.defaultIcon;
    },
    classList(): string[] {
      const a: string[] = [
        ...this.baseClassList,
        ...this.autoCompleteStyle,
      ];
      return a;
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

.ph-autocomplete__selected + .ph-autocomplete-search .ph-autocomplete-prefix-icon{
  display: none;
}

.ph-autocomplete__option--footer a{
  @apply ph-text-brand2;
}

</style>