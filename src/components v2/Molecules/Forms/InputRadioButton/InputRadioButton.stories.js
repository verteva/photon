import InputRadioButton from './InputRadioButton.vue';
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
  title: 'v2/Molecules/Forms/InputRadioButton',
  component: InputRadioButton,
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
        options: ['SMALL', 'MEDIUM', 'LARGE'],
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
    radioButtonLabel: {
      control: {
        type: 'text',
      },
      table: {
        category: 'RadioButton',
      },
    },
    id: {
      control: {
        type: 'text',
      },
      table: {
        category: 'RadioButton',
      },
    },
    icon: {
      control: {
        type: 'text',
      },
      table: {
        category: 'RadioButton',
      },
    },
    name: {
      control: {
        type: 'text',
      },
      table: {
        category: 'RadioButton',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'RadioButton',
      },
    },
  },
  args: {
    radioButtonLabel: 'This is a photon RadioButton!',
    name: 'likes-photon-RadioButton',
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputRadioButton },
  props: Object.keys(argTypes),
  template: `
    <InputRadioButton v-bind="$props" />
  `,
});

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { InputRadioButton },
  props: Object.keys(argTypes),
  template: `
    <InputRadioButton
      v-bind="$props"
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
  icon: '',
  checked: false,
  inlineText: 'Possibly yes',
  isRequired: false,
  extraMessage: '',
  messageIcon: '',
  error: '',
  radioButtonLabel: 'I like photon',
};

export const Checked = InteractiveTemplate.bind({});
Checked.args = {
  label: 'Are you a photon fan?',
  icon: '',
  checked: true,
  inlineText: 'Possibly yes',
  isRequired: false,
  extraMessage: '',
  messageIcon: '',
  error: '',
  radioButtonLabel: 'I like photon',
};

export const IconDefault = InteractiveTemplate.bind({});
IconDefault.args = {
  label: 'Are you a photon fan?',
  icon: 'Apartment',
  checked: false,
  inlineText: 'Possibly yes',
  isRequired: false,
  extraMessage: '',
  messageIcon: '',
  error: '',
  radioButtonLabel: 'I like photon',
};

export const IconChecked = InteractiveTemplate.bind({});
IconChecked.args = {
  label: 'Are you a photon fan?',
  icon: 'Apartment',
  checked: true,
  inlineText: 'Possibly yes',
  isRequired: false,
  extraMessage: '',
  messageIcon: '',
  error: '',
  radioButtonLabel: 'I like photon',
};
