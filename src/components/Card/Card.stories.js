import PCard from './Card.vue';

export default {
  title: 'Components/Card',
  component: PCard,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PCard },
  props: Object.keys(argTypes),
  template: `
    <p-card v-bind='$props'>
      Hello
    </p-card>
  `,
});

export const Card = Template.bind({});
Card.args = {
  light: true,
  shadow: true,
};
