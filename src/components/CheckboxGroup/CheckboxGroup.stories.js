import PCheckboxGroup from './CheckboxGroup.vue';

export default {
  title: 'Forms/CheckboxGroup',
  component: PCheckboxGroup,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PCheckboxGroup },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PCheckboxGroup
        v-bind='$props'
        v-model='selected'
        label="Tick your favourtite fruit..."
        :items="foodOptions"
        :errors="['Required']"
      />
      {{ foodOptions }} 
    </div>
  `,
  data() {
    return {
      selected: ['Bananas'],
      foodOptions: [
        { label: 'Apples', value: 'Apples' },
        { label: 'Bananas', value: 'Bananas' },
        { label: 'Oranges', value: 'Oranges' },
      ],
    };
  },
});

export const CheckboxGroup = Template.bind({});
CheckboxGroup.args = {};
