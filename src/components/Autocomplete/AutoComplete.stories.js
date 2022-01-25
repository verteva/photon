import PAutoComplete from './AutoComplete.vue';

export default {
  title: 'Components/AutoComplete',
  component: PAutoComplete,
  argTypes: {
    backgroundColor: { control: 'color' },
    placeHolder: '',
  },
  args: {},
};

const Template = (args, { argTypes }) => ({
  components: { PAutoComplete },
  props: Object.keys(argTypes),
  template:
    '<div><PAutoComplete v-model="selected" @selectedObj="selectedOption" v-bind="$props" />selected option:{{$data.selected}}</div>',
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

export const AutocompleteSimple = Template.bind({});
AutocompleteSimple.args = {
  label: 'Autocomplete',
  dropType: 'up',
  openIndicatorIcon: 'MenuDown',
  openIndicatorIconSize: 'med',
  simple: true,
  optionItems: ['item1', 'item2'],
};

export const AutocompleteMain = Template.bind({});
AutocompleteMain.args = {
  label: 'Autocomplete',
  dropType: 'up',
  openIndicatorIcon: 'MenuDown',
  openIndicatorIconSize: 'med',
  customLabelVar: 'label',
  initInput: '001',
  selectedBy: 'id',
  optionItems: [
    {
      id: '001',
      label: '<span class="af_hl">highlight</span> test1',
      icon: 'Checkmark',
    },
    {
      id: '002',
      label: '<span class="af_hl">highlight</span> test2',
      icon: 'Checkmark',
    },
  ],
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
