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
        v-model='foodOptions'
        label="Tick your favourtite fruit..."
      />
      {{ foodOptions }} 
    </div>
  `,
  // :errors="optIn === false && ['Required'] || []"
  data() {
    return {
      foodOptions: [
        { label: 'Apples', value: false },
        { label: 'Bananas', value: true },
        { label: 'Oranges', value: false },
      ],
    };
  },
});

export const CheckboxGroup = Template.bind({});
CheckboxGroup.args = {};
