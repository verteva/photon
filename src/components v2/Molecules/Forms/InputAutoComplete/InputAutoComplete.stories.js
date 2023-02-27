import AutoComplete from './InputAutoComplete.vue';

export default {
  title: 'v2/Molecules/Forms/InputAutoComplete',
  component: AutoComplete,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { AutoComplete },
  props: Object.keys(argTypes),
  template: `
    <div>
      <AutoComplete v-bind="$props" @selectedObj="selectedOption">
        <template #list-footer> I am a Footer </template> 
      </AutoComplete>
      <div>selected option: {{selected}}</div> 
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
  prefixIcon: 'LocationSimple',
  placeHolder: 'Search for your property',
  inlineText: 'Mr inline text',
  isRequired: true,
  extraMessage: 'This is an extra message',
  iconLeft: '',
  size: 'md',
  messageIcon: '',
  error: '',
  simple: true,
  openIndicatorIcon: 'MenuDown',
  optionItems: ['item1', 'item2'],
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
  prefixIcon: 'LocationSimple',
  disableFilter: false,
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
      icon: 'LocationSimple',
    },
    {
      code: '002',
      label_test: '3 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">3</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '003',
      label_test: '5 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">5</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '004',
      label_test: '7 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">7</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '005',
      label_test: '9 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">9</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '006',
      label_test: '11 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">11</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '007',
      label_test: '13 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">13</span> <span class="af_hl">24</span> Station Street, WEST RYDE NSW 2114',
      icon: 'LocationSimple',
    },
    {
      code: '008',
      label_test: '15 An bar Mews, HALLAM VIC 3803',
      custom_label_test:
        '<span class="af_hl">15</span> <span class="af_hl">26</span> Station Street, WEST RYDE NSW 2114',
      icon: 'LocationSimple',
    },
  ],
};
