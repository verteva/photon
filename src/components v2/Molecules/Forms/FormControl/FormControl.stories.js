import P2FormControl from './FormControl.vue';
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
  title: 'v2/Molecules/Forms/FormControl',
  component: P2FormControl,
  argTypes: {
    label: {
      ...textControl,
      table: {
        category: 'Label',
      },
    },
    inlineText: {
      ...textControl,
      table: {
        category: 'Label',
      },
    },
    isRequired: {
      ...booleanControl,
      table: {
        category: 'Label',
      },
    },
    extraMessage: {
      ...textControl,
      table: {
        category: 'InlineMessage',
      },
    },
    messageIcon: {
      control: {
        type: 'select',
        options: [...Icons, ''],
      },
      table: {
        category: 'InlineMessage',
      },
    },
    error: {
      ...textControl,
      table: {
        category: 'ErrorMessage',
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
      ...booleanControl,
      table: {
        category: 'General',
      },
    },
    default: {
      description: 'The default Vue slot',
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      },
    },
  },
  args: {
    size: 'md',
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2FormControl },
  props: Object.keys(argTypes),
  template: `
    <P2FormControl v-bind="$props" >
      <div v-if="!$props.default" :style="{
        padding: '10px',
        backgroundColor: 'pink',
        borderRadius: '4px',
        border: '1px solid red',
      }">
        this is the content slot
      </div>
      {{ $props.default }}
    </P2FormControl>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'This is the label',
  inlineText: '( Extra inline text )',
  isRequired: true,
  extraMessage: '',
  //messageIcon: '',
  error: '',
};

export const ExtraMessage = Template.bind({});
ExtraMessage.args = {
  label: 'This is the label',
  inlineText: '( Extra inline text )',
  isRequired: true,
  extraMessage: 'This is the extra message',
  messageIcon: 'circle-info',
  error: '',
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'This is the label',
  inlineText: '( Extra inline text )',
  isRequired: true,
  extraMessage: '',
  messageIcon: 'circle-info',
  error: 'This is an error message',
};
