import PForm from './Form.vue';
import PInputText from '../InputText';
import PButton from '../Button';
import { PText } from '../Typography';

export default {
  title: 'Forms/Form',
};

const Template = (args, { argTypes }) => ({
  components: {PForm, PInputText, PButton, PText},
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
      <p-form v-bind="$props" @submit.prevent="onSubmit">
        <p-input-text v-model="value"/>
        <p-button type="submit" label="Submit"/>
        <p-text xs class="ph-mt-5" :class="showValue?'ph-block':'ph-hidden'">Result: {{ result }}</p-text>
      </p-form>
      `,
});

export const Inputs = Template.bind({});
Inputs.args = {
  disabled: false,
};