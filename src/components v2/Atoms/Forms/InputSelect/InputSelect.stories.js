import PInputSelect from './InputSelect.vue';

export default {
  title: 'v2/Atoms/Forms/InputSelect',
  component: PInputSelect,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { PInputSelect },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PInputSelect v-model="test" v-bind="$props"/>
      {{test}}
    </div>`,
  data() {
    return {
      test: {
        code: '000',
        label: 'Please select...',
        icon: 'Checkmark',
      },
    };
  },
});

export const Default = Template.bind({});
Default.args = {
  openIndicatorIcon: 'chevron-down',
  optionLabelVar: 'label',
  optionCustomLabelVar: 'label',
  selectedOptionLabelVar: 'label',
  selectedOptionCustomLabelVar: 'label',
  reduceValue: true,
  disabled: true,
  items: [
    {
      code: '000',
      label: 'Please select...',
      icon: 'Checkmark',
    },
    {
      code: '001',
      label: '<span class="af_hl">highlight</span> test1',
      icon: 'Checkmark',
    },
    {
      code: '002',
      label: '<span class="af_hl">highlight</span> test2',
      icon: 'Checkmark',
    },
  ],
};

export const Interactive = Template.bind({});
Interactive.args = {
  openIndicatorIcon: 'chevron-down',
  reduceValue: false,
  disabled: false,
  optionLabelVar: 'label',
  optionCustomLabelVar: 'label',
  selectedOptionLabelVar: 'label',
  selectedOptionCustomLabelVar: 'label',
  items: [
    { value: 'Weekly', label: 'Weekly', text: 'Weekly' },
    { value: 'Fortnightly', label: 'Fortnightly', text: 'Fortnightly' },
    { value: 'Monthly', label: 'Monthly', text: 'Monthly' },
    { value: 'Quarterly', label: 'Quarterly', text: 'Quarterly' },
    { value: 'Half-yearly', label: 'Half-yearly', text: 'Half-yearly' },
    { value: 'Yearly', label: 'Yearly', text: 'Yearly' },
  ],
};

export const SimpleList = Template.bind({});
SimpleList.args = {
  openIndicatorIcon: 'chevron-down',
  reduceValue: false,
  disabled: false,
  items: [
    'Sell property other than my home',
    'Use super to pay the remaining balance',
    'Sell shares or investments',
    'Downsize my home to unlock equity',
    'Car / inheritance / other asset sale',
    'Value in own business',
    'Other',
  ],
};
