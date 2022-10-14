import PInputError from './ErrorMessage.vue';

export default {
  title: 'v2/Forms/Atoms/ErrorMessage',
  component: PInputError,
};

const Template = (args, { argTypes }) => ({
  components: { PInputError },
  props: Object.keys(argTypes),
  template: `
    <PInputError v-bind="$props" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  error: 'This is an error message.',
  size: 'md',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  error: 'This is a small error message.',
  size: 'sm',
};
