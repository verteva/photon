import P2Checkbox from './Checkbox.vue';

export default {
  title: 'V2/Atoms/Forms/Checkbox',
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
Default.args = {
  size: 'md',
};

export const Checked = Template.bind({});
Checked.args = {
  size: 'md',
  value: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'md',
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  size: 'md',
  value: true,
  disabled: true,
};

export const MultiLine = MultiLineTemplate.bind({});
MultiLine.args = {
  size: 'md',
  label:
    'This checkbox has a multi line label to show you the alignment of the checkbox and the label. Neat huh?',
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  size: 'md',
};
