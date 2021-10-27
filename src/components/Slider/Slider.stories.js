import PSlider from './Slider.vue';
import PInputText from '../InputText';

export default {
  title: 'Forms/Slider',
  component: PSlider,
  argTypes: {
    // Configurable component options in SB UI...
  }
};

const SliderDocs = (args, { argTypes }) => ({
  components: { PSlider, PInputText },
  props: Object.keys(argTypes),
  template: '<p-slider v-bind=\'$props\' v-model="val" />',
  data() {
    return {
      val: 0.5
    };
  }
});

export const Docs = SliderDocs.bind({});
Docs.args = {};

const SliderPlayground = (args, { argTypes }) => ({
  components: { PSlider, PInputText },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-w-full">
      <p-slider v-bind='$props' v-model="pct" :steps="false" />
      <br />
      Slider %: {{ pct }}
      <br /><br /><br />
      <p-slider v-bind='$props' v-model="val" />
      <br />
      Slider %: {{ val }}
    </div>
  `,
  data() {
    return {
      pct: 0.5,
      val: 150
    };
  }
});

export const Playground = SliderPlayground.bind({});
Playground.args = {
  steps: true,
  stepData: {
    increment: 5,
    min: 100,
    max: 200
  }
};
