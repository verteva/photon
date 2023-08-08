import P2InputMessage from './InputMessage.vue';

export default {
  title: 'v2/Atoms/Forms/InputMessage',
  component: P2InputMessage,
  argTypes: {
    message: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'text',
        default: '',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['md'],
      },
    },
  },
  args: {
    size: 'md',
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2InputMessage },
  props: Object.keys(argTypes),
  template: `
    <P2InputMessage v-bind='$props' />`,
});

export const Default = Template.bind({});
Default.args = {
  message: 'New phone who dis?',
  size: 'md',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  message: 'New phone who dis?',
  icon: 'triangle-exclamation',
  size: 'md',
};
