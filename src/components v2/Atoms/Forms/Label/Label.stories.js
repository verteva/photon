import PLabel from './Label.vue';

export default {
  title: 'v2/Atoms/Forms/Label',
  component: PLabel,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
  args: {
    size: 'md',
  },
};

const Template = (args, { argTypes }) => ({
  components: { PLabel },
  props: Object.keys(argTypes),
  template: '<PLabel v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  isRequired: false,
  inlineText: '',
  size: 'md',
};

export const IsRequired = Template.bind({});
IsRequired.args = {
  label: 'Label',
  isRequired: true,
  inlineText: '',
  size: 'md',
};

export const ExtraText = Template.bind({});
ExtraText.args = {
  label: 'Label',
  isRequired: false,
  inlineText: '(Optional)',
  size: 'md',
};

export const IsRequiredExtraText = Template.bind({});
IsRequiredExtraText.args = {
  label: 'Label',
  isRequired: true,
  inlineText: '(inline text)',
  size: 'md',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: 'Label',
  isRequired: true,
  inlineText: '(small)',
  size: 'sm',
};