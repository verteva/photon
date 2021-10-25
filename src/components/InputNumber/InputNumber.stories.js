import PInputNumber from './InputNumber.vue';
import PButton from '../Button';
export default {
  title: 'Forms/InputNumber',
  component: PInputNumber,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PInputNumber, PButton },
  props: Object.keys(argTypes),
  template: `<div>
    <PInputNumber v-bind='$props' v-model='innerValue' :errors='errs'>  
    <template v-slot:label>
        <p-label>Input Phone<span class="ph-text-xs ph-text-grey3 ph-ml-1 ph-font-normal"></span></p-label>
    </template>   
    </PInputNumber>  
    <p-button :disabled="false" @click="showError">Toggle inline errors</p-button>
    </div>`,
  data() {
    return {
      innerValue: 0,
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
  },
});

export const InputNumber = Template.bind({});
InputNumber.args = {
  label: 'Photon label',
};
