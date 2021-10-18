import PSwitchToggle from "./SwitchToggle.vue";

export default {
  title: "Forms/SwitchToggle",
  component: PSwitchToggle,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PSwitchToggle },
  props: Object.keys(argTypes),
  template:
    "<div><PSwitchToggle v-model='toggleVal' v-bind='$props' />Toggle value: <b>{{toggleVal}}</b></div>",
  data() {
    return {
      toggleVal: false,
    };
  },
});

export const SwitchToggle = Template.bind({});
SwitchToggle.args = {
  // Props to be passed....
};
