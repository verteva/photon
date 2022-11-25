import P2options from './Option.vue';

export default {
  title: 'v2/Atoms/Components/VSelect/Option',
  component: P2options,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { P2options },
  props: Object.keys(argTypes),
  template: '<P2options v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  allowOptionIcon: true,

  option: { label: 'Option 1' },
  validateIcon: 'Apartment',
  customLabelVar: '',
  labelVar: 'label',
};
