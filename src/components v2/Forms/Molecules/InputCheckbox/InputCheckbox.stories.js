import InputCheckbox from './InputCheckbox.vue';
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
  title: 'v2/Forms/Molecules/InputCheckbox',
  component: InputCheckbox,
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
        type: 'boolean',
      },
      table: {
        category: 'Checkbox',
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
    checkboxLabel: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Checkbox',
      },
    },
    name: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Checkbox',
      },
    },
  },
  args: {
    checkboxLabel: 'This is a photon checkbox!',
    name: 'likes-photon-checkbox',
    value: false,
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputCheckbox },
  props: Object.keys(argTypes),
  template: `
    <InputCheckbox v-bind="$props" />
  `,
});

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { InputCheckbox },
  props: Object.keys(argTypes),
  template: `
    <InputCheckbox
      v-bind="$props"
      :value="value"
      @input="event => value = event"
      :error="!value ? 'You must be a photon fan to continue!' : ''"
    />
  `,
  data() {
    return {
      value: false,
    };
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Are you a photon fan?',
  inlineText: '( Please tick the box )',
  isRequired: false,
  extraMessage: '',
  messageIcon: '',
  error: '',
  checkboxLabel: 'I like photon',
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  label: 'Are you a photon fan?',
  inlineText: '( Please tick the box )',
  isRequired: true,
  extraMessage: '',
  messageIcon: '',
  error: '',
  checkboxLabel: 'I like photon',
};
