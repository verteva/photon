import PFiguresCard from './FiguresCard.vue';

export default {
  title: 'v2/Molecules/Components/FiguresCard',
  component: PFiguresCard,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PFiguresCard },
  props: Object.keys(argTypes),
  template: "<PFiguresCard v-bind='$props' />",
});

export const CurrentLoan = Template.bind({});
CurrentLoan.args = {
  cardStyle: 'tertiary',
  title: 'Current Loan',
  loading: false,
  isCurrency: true,
  icon: 'Rent',
  iconSize: 'xxl',
  value: 200000,
};
