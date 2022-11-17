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
      <AutoComplete v-bind="$props" @selectedObj="selectedOption" />
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
  inlineText: 'Mr inline text',
  isRequired: true,
  extraMessage: 'This is an extra message',
  iconLeft: '',
  size: 'md',
  messageIcon: '',
  error: '',
  openIndicatorIcon: 'MenuDown',
  optionItems: ['item1', 'item2'],
};

export const AutocompleteAddress = Template.bind({});
AutocompleteAddress.args = {
  label: 'Autocomplete Address',
  loading: true,
  allowOptionIcon: true,
  hideOpenIndicator: true,
  hideInputOnSelected: true,
  hideClearBtn: false,
  noDropOnStart: true,
  showSelectedIcon: true,
  disableFilter: true,
  maxHeight: '200px',
  placeHolder: 'Search for your property',
  noOptionsText: 'Search for your <b>property</b>',
  prefixIcon: 'LocationSimple',
  footer: "Can't find your address? <a href='#'>Enter it manually</a>",
  optionItems: [
    {
      code: '001',
      label: '1 An bar Mews, HALLAM VIC 3803',
      custom_label:
        '<span class="af_hl">1</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '002',
      label: '3 An bar Mews, HALLAM VIC 3803',
      custom_label:
        '<span class="af_hl">3</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '003',
      label: '5 An bar Mews, HALLAM VIC 3803',
      custom_label:
        '<span class="af_hl">5</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '004',
      label: '7 An bar Mews, HALLAM VIC 3803',
      custom_label:
        '<span class="af_hl">7</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '005',
      label: '9 An bar Mews, HALLAM VIC 3803',
      custom_label:
        '<span class="af_hl">9</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '006',
      label: '11 An bar Mews, HALLAM VIC 3803',
      custom_label:
        '<span class="af_hl">11</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803',
      icon: 'LocationSimple',
    },
    {
      code: '007',
      label: '13 An bar Mews, HALLAM VIC 3803',
      custom_label:
        '<span class="af_hl">13</span> <span class="af_hl">24</span> Station Street, WEST RYDE NSW 2114',
      icon: 'LocationSimple',
    },
    {
      code: '008',
      label: '15 An bar Mews, HALLAM VIC 3803',
      custom_label:
        '<span class="af_hl">15</span> <span class="af_hl">26</span> Station Street, WEST RYDE NSW 2114',
      icon: 'LocationSimple',
    },
  ],
};
