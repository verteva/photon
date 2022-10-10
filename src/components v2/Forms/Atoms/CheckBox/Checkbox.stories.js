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
        options: ['sm', 'lg'],
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
    size: 'lg',
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

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {};

export const MultiLineCheckbox = MultiLineTemplate.bind({});
MultiLineCheckbox.args = {
  label:
    'This checkbox has a multi line label to show you the alignment of the checkbox and the label. Neat huh?',
};

export const InteractiveCheckbox = InteractiveTemplate.bind({});
InteractiveCheckbox.args = {};
