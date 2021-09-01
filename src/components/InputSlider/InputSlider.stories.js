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
    <div class='ph-w-90'>
      <PInputSlider v-bind='$props' v-model='val' :errors="errs" />
      <p-button :disabled="false" @click="showError">Show/Hide error</p-button>
    </div>
  `,
  data() {
    return {
      val: 500000,
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
  min: 250000,
  max: 750000,
  increment: 10000,
  label: "How much do you want to borrow?",
  errors: [],
};
