import PLabel from './Label.vue';

export default {
  title: 'Forms/Label',
  component: PLabel,
  argTypes: {
    // Configurable component options in SB UI...
  }
};

const Template = (args, { argTypes }) => ({
  components: { PLabel },
  props: Object.keys(argTypes),
  template: '<PLabel>A field label</PLabel>'
});

export const Label = Template.bind({});
Label.args = {
  // Props to be passed....
};
