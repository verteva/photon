import InputText from './InputText.vue';
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
  title: 'v2/Molecules/Forms/InputText',
  component: InputText,
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
    placeholder: {
      control: {
        type: 'text',
      },
      table: {
        category: 'InputText',
      },
    },
    number: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'InputText',
      },
    },
    iconLeft: {
      control: {
        type: 'text',
      },
      table: {
        category: 'InputText',
      },
    },
    iconLeftFamily: {
      control: {
        type: 'text',
      },
      table: {
        category: 'InputText',
      },
    },
    iconRight: {
      control: {
        type: 'text',
      },
      table: {
        category: 'InputText',
      },
    },
    iconRightFamily: {
      control: {
        type: 'text',
      },
      table: {
        category: 'InputText',
      },
    },
  },
  args: {
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputText },
  props: Object.keys(argTypes),
  template: `
    <div>
    <InputText v-bind="$props" v-model="name" />
    <div> Value: {{ name }}</div>
    </div>
  `,
  data() {
    return {
      name: '',
    };
  },
});

export const Default = Template.bind({});
Default.args = {
  label: '',
  inlineText: '( Please write your name, address and bank details )',
  isRequired: true,
  extraMessage: '',
  iconLeft: 'dollar',
  size: 'md',
  messageIcon: '',
  error: '',
  placeholder: 'Enter your name',
};
