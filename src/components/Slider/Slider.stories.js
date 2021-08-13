import PSlider from './Slider.vue';
import PInputText from '../InputText';

export default {
  title: 'Forms/Slider',
  component: PSlider,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const SliderTypes = (args, { argTypes }) => ({
  components: { PSlider, PInputText },
  props: Object.keys(argTypes),
  template: `<p-slider v-bind='$props' v-model="val" />`,
  data() {
    return {
      val: 0.5,
    };
  },
});

export const Types = SliderTypes.bind({});
Types.args = {
};
const SliderPlayground = (args, { argTypes }) => ({
  components: { PSlider, PInputText },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-w-100">
      <p-slider v-bind='$props' v-model="val" />
      <br />
      Slider %: {{ val }}
    </div>
  `,
  data() {
    return {
      val: 0.5,
    };
  },
});

export const Playground = SliderPlayground.bind({});
Playground.args = {
};
