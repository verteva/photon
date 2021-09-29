import PInputPhone from './InputPhone.vue';
import PLabel from '../Label';
import PButton from '../Button';
import { PText } from '../Typography';

export default {
  title: 'Forms/InputPhone',
  component: PInputPhone,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  components: { PInputPhone, PLabel, PButton, PText },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-phone
        v-bind='$props'
        :errors="errs"
      >        
        <template v-slot:label>
          <p-label>Password<span class="ph-text-xs ph-text-grey3 ph-ml-1 ph-font-normal">(min 6 characters)</span></p-label>
        </template>        
      </p-input-phone>

      <p-text xs class="ph-mb-5">Name: {{ name }}</p-text>
      <p-button :disabled="false" @click="showError">Toggle inline errors</p-button>

      <p-text xs class="ph-mt-10">Simple text field</p-text>
      <p-input-text simple class="ph-mt-2"/>
    </div>
  `,
  data() {
    return {
      name: null,
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

export const InputPhone = Template.bind({});
InputPhone.args = {
  // Props to be passed....
};
