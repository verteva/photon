import PSlider from './Slider.vue';
import PInputText from '../InputText';

export default {
  title: 'Forms/Slider',
  component: PSlider,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PSlider, PInputText },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-w-100">
      <p-slider v-bind='$props' v-model="a" />
      <p-input-text v-model="a" icon-left="Dollar" />
      
    </div>
  `,
  data() {
    return {
      a: 0.8,
      b: 0.2,
    };
  },
});

export const Slider = Template.bind({});
Slider.args = {
  // Props to be passed....
};
