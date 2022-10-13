import P2CheckboxGroup from './CheckboxGroup.vue';

export default {
  title: 'V2/Forms/Atoms/Checkbox Group',
  component: P2CheckboxGroup,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2CheckboxGroup },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2CheckboxGroup
        v-bind='$props'
        :value="selected"
        :items="foodOptions"
        label="Tick your favourite fruit..."
        @change="onChange"
      />
      {{ foodOptions }}
    </div>
  `,
  data() {
    return {
      selected: ['Bananas'],
      foodOptions: [
        { label: 'Apples', id: 'Apples', value: 'Apples' },
        { label: 'Bananas', id: 'Bananas', value: 'Bananas' },
        { label: 'Oranges', id: 'Oranges', value: 'Oranges' },
      ],
    };
  },
  methods: {
    onChange({ id, value }) {
      console.log('onChange', id, value);
      if (this.selected.includes(value)) {
        this.selected = this.selected.filter(item => item !== value);
      } else {
        this.selected = [...this.selected, value];
      }
    },
  },
});

export const CheckboxGroup = Template.bind({});
CheckboxGroup.args = {};
