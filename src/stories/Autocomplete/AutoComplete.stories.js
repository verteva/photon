import PAutoComplete from './AutoComplete.vue';

export default {
  title: 'Photon/AutoComplete',
  component: PAutoComplete,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args, { argTypes }) => ({
  components: { PAutoComplete },
  props: Object.keys(argTypes),
  template: '<PAutoComplete v-bind="$props" />',
});

export const AutocompleteMain = Template.bind({});
AutocompleteMain.args = {
  label: 'Autocomplete',
};
