import PFiguresCard from './FiguresCard.vue';

export default {
  title: 'Components/FiguresCard',
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
  background: 'ph-bg-brand1',
  title: 'Current Loan',
  loading: false,
  isCurrency: true,
  textColor: 'ph-text-white',
  icon: 'Rent',
  iconSize: 'xxl',
  value: 200000,
};
