import P2InputSearch from './InputSearch.vue';

export default {
  title: 'v2/Atoms/Components/VSelect/InputSearch',
  component: P2InputSearch,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { P2InputSearch },
  props: Object.keys(argTypes),
  template: '<P2InputSearch v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  prefixIcon: 'location-dot',
  hideInputOnSelected: true,
  selected: 'Item1',
};
