import PCheckbox from './Checkbox.vue';

export default {
  title: 'Forms/Checkbox',
  component: PCheckbox,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PCheckbox },
  props: Object.keys(argTypes),
  template: "<PCheckbox v-bind='$props' v-model='optIn' :errors='optIn === false && [`Required`] || []' /><div>some texts</div>",
  data() {
    return {
      optIn: false,
    };
  },
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Photon is awesome'
};
