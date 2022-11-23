import P2NoOptions from './NoOptions.vue';

export default {
  title: 'v2/Atoms/Components/VSelect/NoOptions',
  component: P2NoOptions,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { P2NoOptions },
  props: Object.keys(argTypes),
  template: '<P2NoOptions v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'No options here buddy',
};
