import PForm from './Form.vue';
import PInputText from '../InputText';

export default {
  title: 'Forms/Form',
  argTypes: {
  },
};


const Template = (args, { argTypes }) => ({
  components: {PForm, PInputText},
  props: Object.keys(argTypes),
  template: '<p-form disabled><p-input-text/></p-form>',
});

export const Input = Template.bind({});
Input.args = {
};