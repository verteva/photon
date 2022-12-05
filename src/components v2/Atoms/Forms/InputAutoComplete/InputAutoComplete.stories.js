import P2AutoComplete from './InputAutoComplete.vue';

export default {
  title: 'V2/Atoms/Forms/InputAutoComplete',
  component: P2AutoComplete,
  argTypes: {},
  args: {},
};

const Template = (args, { argTypes }) => ({
  components: { P2AutoComplete },
  props: Object.keys(argTypes),
  template:
    '<div><P2AutoComplete v-model="selected" @selectedObj="selectedOption" v-bind="$props"><template #list-footer> I am a Footer </template></P2AutoComplete>selected option:{{$data.selected}}</div>',
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
  initInput: '',
  openIndicatorIcon: 'ChevronDown',
  disabled: true,
  disableFilter: true,
  noDropOnStart: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeHolder: 'Search for your property',
  initInput: '',
  openIndicatorIcon: 'ChevronDown',
  disabled: true,
  disableFilter: true,
  noDropOnStart: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  initInput: '',
  openIndicatorIcon: 'ChevronDown',
  disabled: true,
  disableFilter: true,
  noDropOnStart: true,
};

export const DropDown = Template.bind({});
DropDown.args = {
  openIndicatorIcon: 'ChevronDown',
  customLabelVar: 'label',
  initInput: '001',
  selectedBy: 'id',
  optionItems: [
    {
      id: '001',
      label: '<span class="af_hl">highlight</span> test1',
    },
    {
      id: '002',
      label: '<span class="af_hl">highlight</span> test2',
    },
  ],
};

export const SimpleOption = Template.bind({});
SimpleOption.args = {
  openIndicatorIcon: 'ChevronDown',
  customLabelVar: 'label',
  simple: true,
  optionItems: ['item1', 'item2'],
};

export const OptionPrefixIcon = Template.bind({});
OptionPrefixIcon.args = {
  openIndicatorIcon: 'ChevronDown',
  customLabelVar: 'label',
  initInput: '001',
  selectedBy: 'id',
  allowOptionIcon: true,
  prefixIcon: 'LocationSimple',
  optionItems: [
    {
      id: '001',
      label: '<span class="af_hl">highlight</span> test1',
      icon: 'LocationSimple',
    },
    {
      id: '002',
      label: '<span class="af_hl">highlight</span> test2',
      icon: 'Apartment',
    },
  ],
};

export const InputPrefixIcon = Template.bind({});
InputPrefixIcon.args = {
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
  footer: "Can't find your address? <a href='#'>Enter it manually</a>",
  disableFilter: true,
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
