import PInputRadio from "./InputRadio.vue";

export default {
  title: "Forms/InputRadio",
  component: PInputRadio,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PInputRadio },
  props: Object.keys(argTypes),
  template: `<PInputRadio v-bind='$props' v-model="optIn" :errors="errors" />`,
  data() {
    return {
      optIn: null,
    };
  },
});

export const InputRadio = Template.bind({});
InputRadio.args = {
  label: "Photon is awesome",
};
