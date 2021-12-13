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
    <div>
      <p-info-card v-bind='$props' brand-bar>
        Some content...
      </p-info-card>
      <br /><br />
      <p-info-card v-bind='$props' border='brand2'>
        Some content...
      </p-info-card>
    </div>
  `,
});

export const InfoCard = Template.bind({});
InfoCard.args = {
  heading: 'Some headline',
  icon: 'Medical',
  iconBg: 'brand2',
  contentBg: 'grey6',
};
