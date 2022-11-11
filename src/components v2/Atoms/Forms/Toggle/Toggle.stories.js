import Toggle from './Toggle.vue';

export default {
  title: 'V2/Atoms/Forms/Toggle',
  component: Toggle,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: "<Toggle v-bind='$props' id='some-id'/>",
});

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template:
    "<div><Toggle :value='toggleVal' @input='toggle' v-bind='$props' id='some-id'/> Toggle value: <b>{{toggleVal}}</b></div>",
  data() {
    return {
      toggleVal: false,
    };
  },
  methods: {
    toggle(val) {
      this.toggleVal = val;
    },
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
  disabled: true,
  value: true,
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {};
