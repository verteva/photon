import P2LoadingBar from './LoadingBar.vue';

export default {
  title: 'v2/Atoms/Components/VSelect/LoadingBar',
  component: P2LoadingBar,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { P2LoadingBar },
  props: Object.keys(argTypes),
  template: '<P2LoadingBar v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  loading: true,
};
