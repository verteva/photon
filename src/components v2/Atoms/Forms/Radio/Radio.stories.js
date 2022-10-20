import P2Radio from './Radio.vue';

export default {
  title: 'V2/Atoms/Forms/Radio',
  component: P2Radio,
  argTypes: {
    // Configurable component options in SB UI...
    value: {
      control: {
        type: 'string',
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
        type: 'string',
      },
    },
    name: {
      control: {
        type: 'string',
      },
    },
  },
  args: {
    label: 'This is a photon radio',
    name: 'likes-photon-checkbox',
    size: 'md',
    value: 'photon radio-gaga',
    disabled: false,
    valueRadio: 'photon radio-',
    // icon: 'Telecommunications',
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2Radio },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2Radio v-bind='$props'/>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
