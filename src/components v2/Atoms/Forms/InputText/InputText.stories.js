import PLabel from '@/components v2/Atoms/Forms/Label';
import PInputText from '@/components v2/Atoms/Forms/InputText';
import PButton from '@/components v2/Atoms/Components/Button';
import { PText } from '@/components/Typography';

export default {
  title: 'v2/Atoms/Forms/InputText',
  component: PInputText,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { PInputText, PLabel, PButton, PText },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-text
        v-bind='$props'
        :errors="errs"
        v-model="name"
      >            
      </p-input-text>
      <p-text xs class="ph-mb-5">Name: {{ name }}</p-text>
      
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
        this.errs = ['Inline validation error'];
      }
    },
  },
});
const Currency = (args, { argTypes }) => ({
  components: { PInputText, PLabel, PButton, PText },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-text
        v-bind='$props'
        :errors="errs"
        v-model="name"
        currency
        icon-left='Dollar'
      >            
      </p-input-text>
      <p-text xs class="ph-mb-5">Name: {{ name }}</p-text>
      
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
        this.errs = ['Inline validation error'];
      }
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  // Props to be passed....
};
export const Dollar = Currency.bind({});
Dollar.args = {
  // Props to be passed....
};
