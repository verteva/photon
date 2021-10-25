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
          <p-label>Input Phone<span class="ph-text-xs ph-text-grey3 ph-ml-1 ph-font-normal"></span></p-label>
        </template>        
      </p-input-phone>
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