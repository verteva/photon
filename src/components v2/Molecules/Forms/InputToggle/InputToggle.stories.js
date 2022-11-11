import InputToggle from './InputToggle.vue';
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
  title: 'v2/Molecules/Forms/InputToggle',
  component: InputToggle,
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
    hideError: {
      ...booleanControl,
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
        category: 'Toggle',
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
        category: 'Toggle',
      },
    },
    id: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Toggle',
      },
    },
  },
  args: {
    name: 'likes-photon-toggle',
    value: false,
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputToggle },
  props: Object.keys(argTypes),
  template: `
    <InputToggle v-bind="$props" />
  `,
});

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { InputToggle },
  props: Object.keys(argTypes),
  template: `
    <InputToggle
      v-bind="$props"
      :value="value"
      @input="toggle"
      :error="!value ? 'You must be a photon fan to continue!' : ''"
    />
  `,
  data() {
    return {
      value: false,
    };
  },
  methods: {
    toggle(val) {
      console.log('val', val);
      this.value = val;
    },
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
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  label: 'Are you a photon fan?',
  inlineText: '( Please tick the box )',
  isRequired: true,
  extraMessage: '',
  messageIcon: '',
  error: '',
};
