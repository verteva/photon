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

export const Inputs = Template.bind({});
Inputs.args = {
  error: 'This is an error message.',
};
