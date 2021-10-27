import PInputText from './InputText.vue';
import PLabel from '../Label';
import PButton from '../Button';
import { PText } from '../Typography';

export default {
  title: 'Forms/InputText',
  component: PInputText,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  components: { PInputText, PLabel, PButton, PText },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-text
        v-bind='$props'
        :errors="errs"
        currency
        type="password"
      >        
        <template v-slot:label>
          <p-label>Password<span class="ph-text-xs ph-text-grey3 ph-ml-1 ph-font-normal">(min 6 characters)</span></p-label>
        </template>        
      </p-input-text>

      <p-input-text
        v-model="name"
        v-bind='$props'
        currency
        icon-left='Dollar'
        placeholder="Enter your name..."
        label="Name"
        :errors="errs"
      />
      <p-text xs class="ph-mb-5">Name: {{ name }}</p-text>
      <p-button :disabled="false" @click="showError">Toggle inline errors</p-button>

      <p-text xs class="ph-mt-10">Simple text field</p-text>
      <p-input-text simple class="ph-mt-2"/>
    </div>
  `,
  data() {
    return {
      name: null,
      errs: []
    };
  },
  methods: {
    showError() {
      if (this.errs?.length) {
        this.errs = [];
      } else {
        this.errs = ['Inine validation error'];
      }
    }
  }
});

export const InputText = Template.bind({});
InputText.args = {
  // Props to be passed....
};
