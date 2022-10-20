import P2InputMessage from './InputMessage.vue';
import Icons from '@/components/Icon/icons';

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
        type: 'select',
        options: [...Icons, ''],
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
  icon: 'Telecommunications',
  size: 'md',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  message: 'New phone who dis?',
  icon: 'Telecommunications',
  size: 'sm',
};
