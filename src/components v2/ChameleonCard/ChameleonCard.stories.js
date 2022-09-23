import ChameleonCard from './index';

export default {
  title: 'Chameleon/Card',
  component: ChameleonCard,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { ChameleonCard },
  props: Object.keys(argTypes),
  template: `
    <ChameleonCard v-bind='$props'>
      Hello
    </ChameleonCard>
  `,
});

export const Default = Template.bind({});
Default.args = {};
