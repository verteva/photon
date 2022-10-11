import PLabel from './Label.vue';

export default {
  title: 'v2/Forms/Atoms/Label',
  component: PLabel,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PLabel },
  props: Object.keys(argTypes),
  template: '<PLabel v-bind="$props"/>',
});

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
  isRequired: false,
  inlineText: '( extra text )',
};
