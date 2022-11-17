import P2Footer from './Footer.vue';

export default {
  title: 'v2/Atoms/Components/VSelect/Footer',
  component: P2Footer,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { P2Footer },
  props: Object.keys(argTypes),
  template: '<P2Footer v-bind="$props">This is Mr Footer</P2Footer>',
});

export const Default = Template.bind({});
Default.args = {
  showFooter: true,
  addFooter: true,
};
