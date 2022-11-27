import P2Indicator from './Indicator.vue';

export default {
  title: 'v2/Atoms/Components/VSelect/Indicator',
  component: P2Indicator,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { P2Indicator },
  props: Object.keys(argTypes),
  template:
    '<P2Indicator v-bind="$props" ref="openIndicator" role="presentation" class="vs__open-indicator"/>',
});

export const Default = Template.bind({});
Default.args = {
  hideOpenIndicator: false,
  openIndicatorIcon: 'Apartment',
  attributes: {
    ref: 'openIndicator',
    role: 'presentation',
    class: 'vs__open-indicator',
  },
};
