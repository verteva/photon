import InputAutoComplete from './InputAutoComplete.vue';

export default {
  title: 'v2/Molecules/Forms/InputAutoComplete',
  component: InputAutoComplete,
  argTypes: {},
  args: {
    reduceValue: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputAutoComplete },
  props: Object.keys(argTypes),
  template: `
    <div>
      <InputAutoComplete v-model="selected" v-bind="$props" @selectedObj="selectedOption">
        <template #list-footer>I am a Footer</template>
      </InputAutoComplete>
      <br />
      <div>selected option: {{ selected }}</div>
    </div>
  `,
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    selectedOption(selectedOption) {
      this.$data.selected = selectedOption;
    },
  },
});

const TemplateMobile = (args, { argTypes }) => ({
  components: { InputAutoComplete },
  props: Object.keys(argTypes),
  template: `
    <div>
      Container set to max-width: 260px;
      <div style="width: 30%;">
      <div style="background: #eee; padding: 32px; border: 1px solid #999;">
        <InputAutoComplete v-model="selected" v-bind="$props" @selectedObj="selectedOption">
          <template #list-footer>I am a Footer</template>
        </InputAutoComplete>
        <br />
        <div>selected option: {{ selected }}</div>
      </div>
      </div>
    </div>
  `,
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    selectedOption(selectedOption) {
      this.$data.selected = selectedOption;
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'This is a autocomplete component with label',
  placeHolder: 'Search for your property',
  inlineText: 'Mr inline text',
  isRequired: true,
  prefixIcon: 'house',
  extraMessage: 'This is an extra message',
  messageIcon: '',
  error: '',
  optionLabelVar: 'label',
  optionCustomLabelVar: 'label',
  selectedOptionLabelVar: 'label',
  openIndicatorIcon: 'chevron-down',
  reduceValue: false,
  initInput: '001',
  selectedBy: 'id',
  optionItems: [
    {
      id: '001',
      label: 'Apple',
    },
    {
      id: '002',
      label: 'Orange',
    },
    {
      id: '003',
      label: 'Eggplant',
    },
    {
      id: '004',
      label: 'Banana',
    },
    {
      id: '005',
      label: 'Watermelon',
    },
  ],
};

export const AutocompleteAddress = Template.bind({});
AutocompleteAddress.args = {
  loading: true,
  allowOptionIcon: true,
  hideOpenIndicator: true,
  hideInputOnSelected: true,
  hideClearBtn: false,
  noDropOnStart: true,
  showSelectedIcon: true,
  placeHolder: 'Search for your property',
  text: 'Search for your <b>property</b>',
  prefixIcon: 'location-dot',
  footer: "Can't find your address? <a href='#'>Enter it manually</a>",
  noOptionsText: 'No results found',
  optionLabelVar: 'label_test',
  selectedOptionLabelVar: 'label_test',
  selectedOptionCustomLabelVar: 'custom_label_test',
  optionCustomLabelVar: 'custom_label_test',
  optionItems: [
    {
      code: '001',
      label_test: '1 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">1</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'location-dot',
    },
    {
      code: '002',
      label_test: '3 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">3</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'location-dot',
    },
    {
      code: '003',
      label_test: '5 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">5</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'location-dot',
    },
    {
      code: '004',
      label_test: '7 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">7</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'location-dot',
    },
    {
      code: '005',
      label_test: '9 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">9</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'location-dot',
    },
    {
      code: '006',
      label_test: '11 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">11</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'location-dot',
    },
    {
      code: '007',
      label_test: '13 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">13</span> <span class="af_hl">24</span> Station Street, WEST RYDE NSW 2114',
      icon: 'location-dot',
    },
    {
      code: '008',
      label_test: '15 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">15</span> <span class="af_hl">26</span> Station Street, WEST RYDE NSW 2114',
      icon: 'location-dot',
    },
  ],
};

export const LongOptionsMobileWidths = TemplateMobile.bind({});
LongOptionsMobileWidths.storyName = 'Long Options at Mobile Widths';
LongOptionsMobileWidths.args = {
  //loading: false,
  //allowOptionIcon: true,
  //hideOpenIndicator: true,
  //hideInputOnSelected: true,
  //hideClearBtn: true,
  //noDropOnStart: true,
  showSelectedIcon: true,
  placeHolder: 'Search for your property',
  text: 'Search for your <b>property</b>',
  footer: "Can't find your address? <a href='#'>Enter it manually</a>",
  noOptionsText: 'No results found',
  optionLabelVar: 'label_test',
  selectedOptionLabelVar: 'label_test',
  selectedOptionCustomLabelVar: 'custom_label_test',
  optionCustomLabelVar: 'custom_label_test',
  optionItems: [
    'Home improvements',
    'Equity contribution for property purchase',
    'Personal assets purchase (e.g. car, boat)',
    'Investment assets purchase (e.g. shares, managed fund)',
  ],
};
