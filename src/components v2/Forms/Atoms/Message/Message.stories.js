import P2InputMessage from './Message.vue';

export default {
  title: 'v2/Forms/Atoms/InputMessage',
  component: P2InputMessage,
};

const Template = (args, { argTypes }) => ({
  components: { P2InputMessage },
  props: Object.keys(argTypes),
  template: `
    <P2InputMessage v-bind='$props' />`,
});

export const InputMessage = Template.bind({});
InputMessage.args = {
  message: 'New phone who dis?',
};
