import PInfoCard from './InfoCard.vue';

export default {
  title: 'Components/InfoCard',
  component: PInfoCard,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PInfoCard },
  props: Object.keys(argTypes),
  template: `
    <p-info-card v-bind='$props'>
      Some content...
    </p-info-card>
  `,
});

export const InfoCard = Template.bind({});
InfoCard.args = {
  heading: 'Some heading',
  icon: 'Medical',
  iconBg: 'brand2',
  contentBg: 'grey6',
};
