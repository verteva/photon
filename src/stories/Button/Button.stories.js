import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import CTAButton from './Button.vue';
import '../../assets/css/main.css'

Vue.use(VueCompositionApi);

export default {
  title: 'Photon/CTAButton',
  component: CTAButton,
  argTypes: {
    disabled: { control: { type: 'boolean', options: [true, false] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    buttonStyle: { control: { type: 'select', options: ['primary', 'secondary', 'outline']}},
    type: { control: { type: 'select', options: ['submit', 'button']}},
    onClick: {},
  },
  args: {
    disabled: false,
    type: 'submit',
    size: 'small',
  },
};

const Template = (args, { argTypes }) => ({
  components: { CTAButton },
  props: Object.keys(argTypes),
  template: '<CTAButton v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  buttonStyle: 'primary',
  size: 'small',
  type: 'submit'
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  label: 'Button',
  type: 'secondary',
  size: 'small',
};
