import PInputSlider from './InputSlider.vue';
import PButton from '../Button';

export default {
  title: 'Forms/InputSlider',
  component: PInputSlider,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PInputSlider, PButton },
  props: Object.keys(argTypes),
  template: `
    <div class='ph-w-80'>
      <PInputSlider v-bind='$props' v-model='val' :errors="errs" />
      <p-button :disabled="false" @click="showError">Toggle inline errors</p-button>

    </div>
  `,
  data() {
    return {
      val: 250000,
      errs: [],
    };
  },
  methods: {
    showError() {
      if (this.errs?.length) {
        this.errs = [];
      } else {
        this.errs = ['Inine validation error'];
      }
    },
  }
});

export const InputSlider = Template.bind({});
InputSlider.args = {
  currency: true,
  min: 100000,
  max: 1000000,
  label: "How much do you want to borrow?",
  errors: [],
};
