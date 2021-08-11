import PButton from './Button.vue';
import '../../assets/scss/main.scss';

export default {
  title: 'Button & Tags/Button',
  component: PButton,
  argTypes: {
    disabled: { options: [true, false] },
    submitting: { options: [true, false] },
    size: { type: 'select', options: ['xs', 'small', 'medium', 'large'] },
    buttonStyle: { type: 'select', options: ['primary', 'secondary', 'plain'] },
    type: { type: 'select', options: ['submit', 'button'] },
    onClick: {},
  },
  args: {
    disabled: false,
    type: 'submit',
    size: 'small',
  },
};

const Template = (args, { argTypes }) => ({
  components: { PButton },
  props: Object.keys(argTypes),
  template: '<PButton v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  submitting: false,
  buttonStyle: 'primary',
  size: 'small',
  type: 'submit'
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  label: 'Button',
  buttonStyle: 'secondary',
  size: 'small',
};

export const Plain = Template.bind({});
Plain.args = {
  buttonStyle: 'plain',
};
