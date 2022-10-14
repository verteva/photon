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
    <div >
      <P2CheckboxGroup
        v-bind='$props'
      />
    </div>
  `,
});

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { P2CheckboxGroup },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2CheckboxGroup
        v-bind='$props'
        :items="foodOptions"
        label="Tick your favourite fruit..."
        @change="onChange"
      />
      {{ foodOptions }}
    </div>
  `,
  data() {
    return {
      foodOptions: [
        { label: 'Apples', value: false },
        { label: 'Bananas', value: false },
        { label: 'Oranges', value: false },
      ],
    };
  },
  methods: {
    onChange({ index, value }) {
      this.foodOptions[index].value = value;
    },
  },
});

const MultiLineTemplate = (args, { argTypes }) => ({
  components: { P2CheckboxGroup },
  props: Object.keys(argTypes),
  template: `
    <div :style="{ 'max-width': '300px' }">
      <P2CheckboxGroup v-bind='$props'/>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Apples', value: false },
    { label: 'Bananas', value: false },
    { label: 'Oranges', value: false },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  items: [
    { label: 'Apples', value: true },
    { label: 'Bananas', value: true },
    { label: 'Oranges', value: false },
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Apples', value: false },
    { label: 'Bananas', value: false },
    { label: 'Oranges', value: false },
  ],
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  items: [
    { label: 'Apples', value: true },
    { label: 'Bananas', value: true },
    { label: 'Oranges', value: false },
  ],
  disabled: true,
};

export const MultiLine = MultiLineTemplate.bind({});
MultiLine.args = {
  items: [
    {
      label:
        'Apples, The most delicious fruit out there. Better than all the other fruits.',
      value: true,
    },
    {
      label:
        'Bananas, The only fruit that is used for measurements. Banana for scale!',
      value: true,
    },
    {
      label:
        'Oranges, The only fruit that was named after a color. Or was the color named after it?',
      value: false,
    },
  ],
  disabled: false,
};

export const SizeSmall = MultiLineTemplate.bind({});
SizeSmall.args = {
  items: [
    {
      label:
        'Apples, The most delicious fruit out there. Better than all the other fruits.',
      value: true,
    },
    {
      label:
        'Bananas, The only fruit that is used for measurements. Banana for scale!',
      value: true,
    },
    {
      label:
        'Oranges, The only fruit that was named after a color. Or was the color named after it?',
      value: false,
    },
  ],
  disabled: false,
  size: 'sm',
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {};
