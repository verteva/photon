import PInput from './Input.vue';

export default {
  title: 'Forms/Input',
  component: PInput,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PInput },
  props: Object.keys(argTypes),
  template: `
    <PInput
      v-bind='$props'
      icon-left='Dollar'
      icon-right='Boat'
      placeholder='Add....'
      label="Field name"
      value='Enter your address'
    />
  `,
});

export const Input = Template.bind({});
Input.args = {
  // Props to be passed....
};
