import P2SelectedOption from './SelectedOption.vue';

export default {
  title: 'v2/Atoms/Components/VSelect/SelectedOption',
  component: P2SelectedOption,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { P2SelectedOption },
  props: Object.keys(argTypes),
  template: '<P2SelectedOption v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  option: { label: 'Option 1' },
  validateIcon: '',
  prefixIcon: '',
  allowOptionIcon: false,
  showSelectedIcon: false,
};

export const LongText = Template.bind({});
LongText.args = {
  option: {
    label:
      'Option 1 this is a very long text to show how an overflow should be handled.',
  },
  validateIcon: '',
  prefixIcon: '',
  allowOptionIcon: false,
  showSelectedIcon: false,
};
