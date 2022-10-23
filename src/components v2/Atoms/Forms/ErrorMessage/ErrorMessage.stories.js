import PInputError from './ErrorMessage.vue';

export default {
  title: 'v2/Atoms/Forms/ErrorMessage',
  component: PInputError,
  argTypes: {
    error: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
  args: {
    size: 'md',
  },
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
