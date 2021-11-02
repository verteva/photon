import PBrandGradientText from './BrandGradientText.vue';

export default {
  title: 'Components/BrandGradientText',
  component: PBrandGradientText,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PBrandGradientText },
  props: Object.keys(argTypes),
  template: "<PBrandGradientText v-bind='$props' />",
});

export const BrandGradientText = Template.bind({});
BrandGradientText.args = {
  // Props to be passed....
};
