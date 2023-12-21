import InputPhone from './InputPhone.vue';
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
  title: 'v2/Molecules/Forms/InputPhone',
  component: InputPhone,
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
  },
  args: {
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputPhone },
  props: Object.keys(argTypes),
  template: `
    <div>
      <InputPhone v-bind="$props" v-model="value" @update="onUpdateInside" />
      <div style="margin-top: 20px; font-size: 12px;">
        <div>isValid: {{ isValid }}</div>
        <div>Value: {{ value }}</div>
        <div>Results: {{ results }}</div>
      </div>
    </div>
  `,
  data() {
    return {
      value: '',
      results: {},
      isValid: false,
    };
  },
  methods: {
    onUpdateInside(e) {
      this.isValid = e.isValid;
      this.results = e;
      this.value = e.isValid ? e.e164 : '';
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'This is a label',
  inlineText: '( Please write your name, address and bank details )',
  isRequired: true,
  extraMessage: '',
  iconLeft: '',
  size: 'md',
  messageIcon: '',
  error: '',
  placeholder: 'Enter your name',
};
