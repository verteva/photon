import InputRadioButtonGroup from './InputRadioButtonGroup.vue';
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
  title: 'v2/Molecules/Forms/InputRadioButtonGroup',
  component: InputRadioButtonGroup,
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
        category: 'FormControl',
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
  components: { InputRadioButtonGroup },
  props: Object.keys(argTypes),
  template: `
  <div>
    <InputRadioButtonGroup v-bind="$props" @click="handleClick" />
    <div>
    // selected value: {{ $props.items[clickedIndex].value }}
    </div>
  </div>
  `,
  data() {
    return {
      clickedIndex: 2,
    };
  },
  methods: {
    handleClick(value) {
      this.clickedIndex = value;
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Buttons are cool...',
  inlineText: '',
  isRequired: true,
  extraMessage: '',
  messageIcon: '',
  error: '',
  items: [
    {
      value: 1,
      label: 'On my own with you..',
      icon: 'Apartment',
    },
    {
      value: '3',
      label: 'This is a photon radio icon checked',
      icon: 'Apartment',
    },
    {
      value: 4,
      label: 'With 4 people',
    },
    {
      value: 7,
      label: 'With your plus one',
    },
    {
      value: 99,
      label: 'With 9 people',
    },
  ],
  selectedIndex: 2,
  rows: 3,
};

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { InputRadioButtonGroup },
  props: Object.keys(argTypes),
  template: `
    <InputRadioButtonGroup
      v-bind='$props'
      :items="radioOptions"
    />
  `,
  data() {
    return {
      radioOptions: [
        {
          value: 'Hello world',
          label: 'On my own with you..',
          icon: 'Telecommunications',
        },
        {
          value: '3',
          label: 'This is a photon radio icon checked',
          icon: 'Apartment',
        },
        {
          value: 4,
          label: 'With 4 people',
        },
        {
          value: 7,
          label: 'With your plus one',
        },
        {
          value: 99,
          label: 'With 9 people',
        },
      ],
    };
  },
});

export const Disabled = InteractiveTemplate.bind({});
Disabled.args = {
  label: 'Disabled with error',
  inlineText: '',
  isRequired: false,
  extraMessage: 'Why not add an extra message here',
  messageIcon: 'Charity',
  error: 'This is an error message',
  disabled: true,
  rows: 3,
};
