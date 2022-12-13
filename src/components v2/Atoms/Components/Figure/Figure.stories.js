import P2Figure from './Figure.vue';

export default {
  title: 'V2/Atoms/Components/Figure',
  component: P2Figure,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2Figure },
  props: Object.keys(argTypes),
  template: `
    <p2-figure v-bind='$props' />
  `,
});

export const Default = Template.bind({});
Default.args = {};
