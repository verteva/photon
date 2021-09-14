import PRate from './Rate.vue';

export default {
  title: 'Components/Rate',
  component: PRate,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PRate },
  props: Object.keys(argTypes),
  template: "<p-rate v-bind='$props' />",
});

export const InterestRate = Template.bind({});
InterestRate.args = {
  loading: false,
  name: 'Principal & Interest',
  rate: '2.49',
};

export const SavingsRate = Template.bind({});
SavingsRate.args = {
  loading: false,
  name: 'Repayments',
  rate: '$2,345',
  currency: true,
};
