import PInfoCard from './InfoCard.vue';

export default {
  title: 'v2/Atoms/Components/InfoCard',
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
      <p-info-card v-bind='$props'>
        Some content...
      </p-info-card>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  heading: '',
  icon: '',
  iconBg: '',
  contentBg: 'secondary',
  border: 'primary',
  brandBar: false,
};

export const Heading = Template.bind({});
Heading.args = {
  heading: 'Some headline',
  icon: '',
  iconBg: '',
  contentBg: 'secondary',
  border: 'primary',
  brandBar: false,
};

export const Branded = Template.bind({});
Branded.args = {
  heading: 'Some headline',
  icon: '',
  iconBg: 'primary',
  contentBg: 'secondary',
  border: 'primary',
  brandBar: true,
};

export const Icon = Template.bind({});
Icon.args = {
  heading: 'Some headline',
  icon: 'Medical',
  iconBg: 'primary',
  contentBg: 'secondary',
  border: 'primary',
  brandBar: true,
};
