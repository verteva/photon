import PBrandGradientText from './BrandGradientText.vue';

export default {
  title: 'V2/Atoms/Components/BrandGradientText',
  component: PBrandGradientText,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PBrandGradientText },
  props: Object.keys(argTypes),
  template: `
  <PBrandGradientText>
      THIS IS Gradient Text
  </PBrandGradientText>`,
});

export const BrandGradientText = Template.bind({});
BrandGradientText.args = {
  // Props to be passed....
};
