import InputDate from './InputDate.vue';
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
  title: 'v2/Molecules/Forms/InputDate',
  component: InputDate,
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
    value: {
      control: {
        type: 'object',
      },
      table: {
        category: 'InputDate',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputDate },
  props: Object.keys(argTypes),
  template: `
  <div>
  <InputDate v-bind='$props' :value="dateObject" @dateDay="dayValue" @dateMonth="monthValue" @dateYear="yearValue" /> 
  <span>Date: {{ dateObject.day }}-{{ dateObject.month }}-{{ dateObject.year }}</span>
</div>
`,
  data() {
    return {
      dateObject: {
        day: null,
        month: null,
        year: null,
      },
    };
  },
  methods: {
    dayValue(value) {
      this.dateObject.day = value;
    },
    monthValue(value) {
      this.dateObject.month = value;
    },
    yearValue(value) {
      this.dateObject.year = value;
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  label: '',
  inlineText: '( Please write your name, address and bank details )',
  isRequired: true,
  extraMessage: '',
  iconLeft: '',
  size: 'md',
  messageIcon: '',
  error: '',
  placeholder: 'Enter your name',
};
