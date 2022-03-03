import PLoanFigures from './LoanFigures.vue';

export default {
  title: 'Components/LoanFigures',
  component: PLoanFigures,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PLoanFigures },
  props: Object.keys(argTypes),
  template: "<PLoanFigures v-bind='$props' />",
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
