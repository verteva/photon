import PInputSlider from './InputSlider.vue';

export default {
  title: 'Forms/InputSlider',
  component: PInputSlider,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PInputSlider },
  props: Object.keys(argTypes),
  template: `
    <div class='ph-w-100'>
      <PInputSlider v-bind='$props' v-model='val' />
      <br />
      {{ val }}
    </div>
  `,
  data() {
    return {
      val: 565546,
    };
  }
});

export const InputSlider = Template.bind({});
InputSlider.args = {
  currency: true,
  min: 1415500,
  max: 1443315500,
};
