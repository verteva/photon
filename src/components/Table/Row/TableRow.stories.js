import PTableRow from "./TableRow.vue";

export default {
  title: "Components/Table",
  component: PTableRow,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PTableRow },
  props: Object.keys(argTypes),
  template: `<PTableRow v-bind='$props'></PTableRow>`,
});

export const TableRow = Template.bind({});
TableRow.args = {
  colWidths: [25, 50, 25],
};
