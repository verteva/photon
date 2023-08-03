import P2Headline from './Headline.vue';

export default {
  title: 'V2/Atoms/Components/Headline',
  component: P2Headline,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2Headline },
  props: Object.keys(argTypes),
  template: `
    <p2-headline v-bind='$props'>
      Headline
    </p2-headline>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const DifferentHeadingElement = Template.bind({});
DifferentHeadingElement.args = {
  element: 'h4',
};
