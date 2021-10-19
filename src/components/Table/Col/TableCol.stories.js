import PTableCol from "./TableCol.vue";

export default {
  title: "Components/Table/Col",
  component: PTableCol,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PTableCol },
  props: Object.keys(argTypes),
  template: `<PTableCol v-bind='$props'></PTableCol>`,
});

export const TableCol = Template.bind({});
TableCol.args = {};
