import PLink from './Link.vue';

export default {
  title: 'Components/Link',
  component: PLink,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PLink },
  props: Object.keys(argTypes),
  template:
    "<p>This is a paragraph and this is <PLink v-bind='$props'>the link component</Plink>. It is designed to be used inline</p>",
});

export const Link = Template.bind({});
Link.args = {
  // Props to be passed....
};
