import P2RadioButton from './RadioButton.vue';

export default {
  title: 'V2/Atoms/Forms/RadioButton',
  component: P2RadioButton,
  argTypes: {
    // Configurable component options in SB UI...
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'string',
      },
    },
    name: {
      control: {
        type: 'string',
      },
    },
    icon: {
      control: {
        type: 'string',
      },
    },
    id: {
      control: {
        type: 'string',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    label: 'This is a photon radio',
    name: 'likes-photon-checkbox',
    disabled: false,
    icon: '',
    id: '',
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2RadioButton },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2RadioButton v-bind='$props'/>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'This is a photon radio Default',
  icon: '',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'This is a photon radio Checked',
  icon: '',
  id: '1',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'This is a photon radio disabled',
  icon: '',
  checked: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  label: 'This is a photon radio disabled check',
  icon: '',
  id: '1',
  checked: true,
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'This is a photon radio icon',
  icon: 'house',
  checked: false,
};

export const IconDisabled = Template.bind({});
IconDisabled.args = {
  disabled: true,
  label: 'This is a photon radio icon disabled',
  icon: 'house',
  checked: false,
};

export const IconChecked = Template.bind({});
IconChecked.args = {
  label: 'This is a photon radio icon checked',
  icon: 'house',
  id: '1',
  checked: true,
};

export const IconCheckedDisabled = Template.bind({});
IconCheckedDisabled.args = {
  disabled: true,
  label: 'This is a photon radio icon checked disabled',
  icon: 'house',
  id: '1',
  checked: true,
};
