import P2InputMessage from './InputMessage.vue';

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
