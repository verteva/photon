import P2Form from './Form.vue';
import P2CheckboxGroup from '@/components v2/Atoms/Forms/CheckboxGroup';
import P2Button from '@/components v2/Atoms/Components/Button';
import { PText } from '@/components/Typography';

export default {
  title: 'v2/Atoms/Forms/Form',
};

const Template = (args, { argTypes }) => ({
  components: { P2Form, P2Button, PText, P2CheckboxGroup },
  props: Object.keys(argTypes),
  data() {
    return {
      result: null,
      showValue: false,
      foodOptions: [
        { label: 'Apples', value: false },
        { label: 'Bananas', value: false },
        { label: 'Oranges', value: false },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.showValue = true;
      this.result = this.foodOptions
        .filter((option) => option.value === true)
        .map((option) => option.label);
    },
    onChange({ index, value }) {
      this.foodOptions[index].value = value;
    },
  },

  template: `
      <p2-form v-bind="$props" @submit.prevent="onSubmit">
        <p2-checkboxGroup :items="foodOptions"
        label="Tick your favourite fruit..."
        @input="onChange" />
        <p2-button type="submit" label="Submit"/>
        <p-text>Result: {{ result }}</p-text>
      </p2-form>
      `,
});

export const CheckBox = Template.bind({});
CheckBox.args = {};
