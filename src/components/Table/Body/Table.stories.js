import PTable from "./Table.vue";
import Row from "../Row";
export default {
  title: "Components/Table/Body",
  component: PTable,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PTable, Row },
  props: Object.keys(argTypes),
  template: `<PTable v-bind='$props'></PTable>`,
});

export const Table = Template.bind({});
Table.args = {
  rows: 3,
  titles: ["hello world", "cash/credit", "value"],
  colWidths: [25, 50, 25],
};
