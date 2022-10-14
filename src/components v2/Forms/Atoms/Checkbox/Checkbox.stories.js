import P2Checkbox from './Checkbox.vue';

export default {
  title: 'V2/Forms/Atoms/Checkbox',
  component: P2Checkbox,
  argTypes: {
    // Configurable component options in SB UI...
    value: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    label: 'This is a photon checkbox!',
    name: 'likes-photon-checkbox',
    size: 'md',
    value: false,
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2Checkbox },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2Checkbox v-bind='$props'/>
    </div>
  `,
});

const MultiLineTemplate = (args, { argTypes }) => ({
  components: { P2Checkbox },
  props: Object.keys(argTypes),
  template: `
    <div :style="{ 'max-width': '300px' }">
      <P2Checkbox v-bind='$props'/>
    </div>
  `,
});

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { P2Checkbox },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2Checkbox v-bind='$props' v-model="checked"/>
    </div>
  `,
  data() {
    return {
      checked: false,
    };
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  value: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  value: true,
  disabled: true,
};

export const MultiLine = MultiLineTemplate.bind({});
MultiLine.args = {
  label:
    'This checkbox has a multi line label to show you the alignment of the checkbox and the label. Neat huh?',
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {};
