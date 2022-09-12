import P2Form from './Form.vue';
import PInputText from '../../components/InputText';
import PButton from '../Button';
import { PText } from '../../components/Typography';

export default {
  title: 'v2/Forms/Form',
};

const Template = (args, { argTypes }) => ({
  components: { P2Form, PInputText, PButton, PText },
  props: Object.keys(argTypes),
  data() {
    return {
      result: null,
      value: null,
      showValue: false,
    };
  },
  methods: {
    onSubmit() {
      this.showValue = true;
      this.result = this.value;
    },
  },
  template: `
      <p2-form v-bind="$props" @submit.prevent="onSubmit">
        <p-input-text v-model="value"/>
        <p-button type="submit" label="Submit"/>
        <p-text xs class="ph-mt-5" :class="showValue?'ph-block':'ph-hidden'">Result: {{ result }}</p-text>
      </p2-form>
      `,
});

export const Inputs = Template.bind({});
Inputs.args = {
  disabled: false,
};
