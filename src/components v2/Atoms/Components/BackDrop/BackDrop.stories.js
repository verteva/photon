import P2BackDrop from './BackDrop.vue';

export default {
  title: 'V2/Atoms/Components/BackDrop',
  component: P2BackDrop,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2BackDrop },
  props: Object.keys(argTypes),
  template: `
    <p2-back-drop v-bind='$props' />
  `,
});

export const Default = Template.bind({});
Default.args = {};
