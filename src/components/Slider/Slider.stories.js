import PSlider from './Slider.vue';

export default {
  title: 'Forms/Slider',
  component: PSlider,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PSlider },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-w-80">
      <p-slider v-bind='$props' v-model="a" />
      <br />
      <br />
      <p-slider v-bind='$props' v-model="b" />
      
    </div>
  `,
  data() {
    return {
      a: 0.5,
      b: 0.8,
    };
  },
});

export const Slider = Template.bind({});
Slider.args = {
  // Props to be passed....
};
