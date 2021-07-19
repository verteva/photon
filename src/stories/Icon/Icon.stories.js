import PIcon from './Icon.vue';

export default {
  title: 'Photon/PIcon',
  component: PIcon,
  // argTypes: {
  //   disabled: { options: [true, false] },
  //   submitting: { options: [true, false] },
  //   size: { type: 'select', options: ['small', 'medium', 'large'] },
  //   buttonStyle: { type: 'select', options: ['primary', 'secondary', 'outline'] },
  //   type: { type: 'select', options: ['submit', 'button'] },
  //   onClick: {},
  // },
  // args: {
  //   disabled: false,
  //   type: 'submit',
  //   size: 'small',
  // },
};

const Template = (args, { argTypes }) => ({
  components: { PIcon },
  props: Object.keys(argTypes),
  template: '<PIcon v-bind="$props" />',
});

export const Checkmark = Template.bind({});
Checkmark.args = {
  type: 'Checkmark'
};
export const ChevronRight = Template.bind({});
ChevronRight.args = {
  type: 'ChevronRight'
};