import PLoanFiguresCard from './LoanFiguresCard.vue';

export default {
  title: 'Components/LoanFiguresCard',
  component: PLoanFiguresCard,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PLoanFiguresCard },
  props: Object.keys(argTypes),
  template: "<PLoanFiguresCard v-bind='$props' />",
});

export const CurrentLoan = Template.bind({});
CurrentLoan.args = {
  background: 'ph-bg-brand1',
  title: 'Current Loan',
  loading: false,
  darkMode: false,
  icon: 'Rent',
  value: 200000,
};
