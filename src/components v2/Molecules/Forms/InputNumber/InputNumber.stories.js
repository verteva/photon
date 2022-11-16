import InputNumber from './InputNumber.vue';
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
  title: 'v2/Molecules/Forms/InputNumber',
  component: InputNumber,
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
        type: 'number',
      },
    },
    minVal: {
      control: {
        type: 'number',
      },
    },
    maxVal: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    disabled: false,
  },
};

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { InputNumber },
  props: Object.keys(argTypes),
  template: `
    <div>
      <InputNumber
        v-bind="$props"
        :value='innerValue'
        :error="innerValue === 0 ? 'Value must be greater than 0' : ''"
        @input="onInput"
        @blur="onBlur"
        @change:subtract="onSubtract"
        @change:add="onAdd"
      />
      value: {{ innerValue }}
    </div>
  `,
  data() {
    return {
      innerValue: 0,
    };
  },
  methods: {
    showError() {
      if (this.errs?.length) {
        this.errs = [];
      } else {
        this.errs = ['Inline validation error'];
      }
    },
    onSubtract() {
      this.innerValue -= 1;
    },
    onAdd() {
      this.innerValue += 1;
    },
    onInput(val) {
      this.innerValue = val;
    },
    onBlur() {
      this.innerValue = Math.min(
        this.maxVal,
        Math.max(this.minVal, this.innerValue)
      );
    },
  },
});

const Template = (args, { argTypes }) => ({
  components: { InputNumber },
  props: Object.keys(argTypes),
  template: `
    <div>
      <InputNumber v-bind="$props" v-model="name" />
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
  label: 'How many little angels do you have?',
  inlineText: '',
  isRequired: true,
  extraMessage: '( 0 - 10 )',
  iconLeft: '',
  size: 'md',
  messageIcon: '',
  error: '',
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  label: 'How many little angels do you have?',
  inlineText: '',
  isRequired: true,
  extraMessage: '( 0 - 10 )',
  iconLeft: '',
  size: 'md',
  messageIcon: '',
  error: '',
  maxVal: 10,
  minVal: 0,
};
