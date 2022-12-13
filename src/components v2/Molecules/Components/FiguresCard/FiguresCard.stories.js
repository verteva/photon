import PFiguresCard from './FiguresCard.vue';
import { CardStyles } from './types';

export default {
  title: 'v2/Molecules/Components/FiguresCard',
  component: PFiguresCard,
  argTypes: {
    cardStyle: {
      control: 'select',
      options: Object.values(CardStyles),
      defaultValue: CardStyles.PRIMARY,
    },
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
