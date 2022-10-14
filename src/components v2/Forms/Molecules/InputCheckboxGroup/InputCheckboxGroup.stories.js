import InputCheckboxGroup from './InputCheckboxGroup.vue';
import Icons from '@/components/Icon/icons';

const textControl = {
  control: {
    type: 'text',
  },
};

const booleanControl = {
  control: {
    type: 'boolean',
  },
};

export default {
  title: 'v2/Forms/Molecules/InputCheckboxGroup',
  component: InputCheckboxGroup,
  argTypes: {
    label: {
      ...textControl,
      table: {
        category: 'FormControl',
      },
    },
    inlineText: {
      ...textControl,
      table: {
        category: 'FormControl',
      },
    },
    isRequired: {
      ...booleanControl,
      table: {
        category: 'FormControl',
      },
    },
    extraMessage: {
      ...textControl,
      table: {
        category: 'FormControl',
      },
    },
    messageIcon: {
      control: {
        type: 'select',
        options: [...Icons, ''],
      },
      table: {
        category: 'FormControl',
      },
    },
    error: {
      ...textControl,
      table: {
        category: 'FormControl',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        category: 'General',
      },
    },
    value: {
      control: {
        type: 'object',
      },
      table: {
        category: 'CheckBox',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'General',
      },
    },
    name: {
      control: {
        type: 'text',
      },
      table: {
        category: 'CheckBox',
      },
    },
    items: {
      control: {
        type: 'array',
      },
      table: {
        category: 'CheckBox',
      },
    },
  },
  args: {
    name: 'likes-photon-checkbox',
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputCheckboxGroup },
  props: Object.keys(argTypes),
  template: `
    <InputCheckboxGroup v-bind="$props" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Tick your favourite fruit...',
  inlineText: '',
  isRequired: true,
  extraMessage: '',
  messageIcon: '',
  error: '',
  items: [
    { label: 'Apples', value: false },
    { label: 'Bananas', value: false },
    { label: 'Oranges', value: false },
  ],
};

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { InputCheckboxGroup },
  props: Object.keys(argTypes),
  template: `
    <InputCheckboxGroup
      v-bind='$props'
      :items="foodOptions"
      :error="foodOptions.filter(option => option.value).length > 2 ? 'You can only select 2 options' : ''"
      @change="onChange"
    />
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

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  label: 'Tick your favourite fruit...',
  inlineText: '( max of 2 fruits )',
  isRequired: false,
  extraMessage: 'Fruit is good for you',
  messageIcon: 'Charity',
  error: 'This is an error message',
};
