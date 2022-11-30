import InputSelect from './InputSelect.vue';
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
  title: 'v2/Molecules/Forms/InputSelect',
  component: InputSelect,
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
        category: 'InputSelect',
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
    items: {
      control: {
        type: 'Array',
      },
      table: {
        category: 'InputSelect',
      },
    },
    showFooter: {
      type: 'boolean',
      table: {
        category: 'InputSelect',
      },
    },

    customLabelVar: {
      ...textControl,
      table: {
        category: 'InputSelect',
      },
    },
    openIndicatorIcon: {
      control: {
        ...textControl,
      },
      table: {
        category: 'InputSelect',
      },
    },
  },
  args: {
    name: 'likes-photon-toggle',
    value: 'Please select...',
    disabled: true,
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputSelect },
  props: Object.keys(argTypes),
  template: `
    <div>
      <InputSelect v-model="test" v-bind="$props"/>
      Selected: {{test}}
    </div>`,
  data() {
    return {
      test: {
        code: '000',
        label: 'Please select...',
        icon: 'Checkmark',
      },
    };
  },
});

export const Default = Template.bind({});
Default.args = {
  openIndicatorIcon: 'MenuDown',
  customLabelVar: 'label',
  returnObj: true,
  disabled: true,
  items: [
    {
      code: '000',
      label: 'Please select...',
      icon: 'Checkmark',
    },
    {
      code: '001',
      label: '<span class="af_hl">highlight</span> test1',
      icon: 'Checkmark',
    },
    {
      code: '002',
      label: '<span class="af_hl">highlight</span> test2',
      icon: 'Checkmark',
    },
  ],
};
export const Interactive = Template.bind({});
Interactive.args = {
  openIndicatorIcon: 'MenuDown',
  customLabelVar: 'label',
  returnObj: true,
  disabled: false,
  items: [
    {
      code: '000',
      label: 'Please select...',
      icon: 'Checkmark',
    },
    {
      code: '001',
      label: '<span class="af_hl">highlight</span> test1',
      icon: 'Checkmark',
    },
    {
      code: '002',
      label: '<span class="af_hl">highlight</span> test2',
      icon: 'Checkmark',
    },
  ],
};
