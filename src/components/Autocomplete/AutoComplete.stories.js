import PAutoComplete from './AutoComplete.vue';

export default {
  title: 'Components/AutoComplete',
  component: PAutoComplete,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
    placeHolder: '',
  },
  args: {
    backgroundColor: '#ffffff',
  }
};

const Template = (args, { argTypes }) => ({
  components: { PAutoComplete },
  props: Object.keys(argTypes),
  template: '<PAutoComplete v-bind="$props" />',
});

export const AutocompleteMain = Template.bind({});
AutocompleteMain.args = {
  label: 'Autocomplete',
  optionItems: [
    {code: '001', label: '<span class="af_hl">highlight</span> test1', icon: 'Checkmark'},
    {code: '002', label: '<span class="af_hl">highlight</span> test2', icon: 'Checkmark'},
  ]
};

export const AutocompleteAddress = Template.bind({});
AutocompleteAddress.args = {
  label: 'Autocomplete Address',
  allowIcon: true,
  hideOpenIndicator: true,
  placeHolder: 'Search for your property',
  defaultIcon: 'LocationSimple',
  footer: `Can't find your address? Click <a href='#'>here</a>`,
  optionItems: [
    {code: '001', label: '<span class="af_hl">1</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803', icon: 'LocationSimple'},
    {code: '002', label: '<span class="af_hl">3</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803', icon: 'LocationSimple'},
    {code: '003', label: '<span class="af_hl">5</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803', icon: 'LocationSimple'},
    {code: '004', label: '<span class="af_hl">7</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803', icon: 'LocationSimple'},
    {code: '005', label: '<span class="af_hl">9</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803', icon: 'LocationSimple'},
    {code: '006', label: '<span class="af_hl">11</span> <span class="af_hl">An</span>bar Mews, HALLAM VIC 3803', icon: 'LocationSimple'},
    {code: '007', label: '<span class="af_hl">13</span> <span class="af_hl">24</span> Station Street, WEST RYDE NSW 2114', icon: 'LocationSimple'},
    {code: '008', label: '<span class="af_hl">15</span> <span class="af_hl">26</span> Station Street, WEST RYDE NSW 2114', icon: 'LocationSimple'},
  ]
};