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
  template: "<PLink v-bind='$props' />",
});

export const Link = Template.bind({});
Link.args = {
  // Props to be passed....
};
