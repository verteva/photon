import PTable from "./Table.vue";
import PTableRow from "../Row";
import PTableCol from "../Col";
export default {
  title: "Components/Table",
  component: PTable,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PTable, PTableRow, PTableCol },
  props: Object.keys(argTypes),
  template: `<PTable v-bind='$props'>
        <template v-slot:TableRow="colWidths">
        <PTableCol>Tuesday</PTableCol>
        <PTableCol>$40000000</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        <PTableCol>xxxxxxxxxxxxx</PTableCol>
        </template>
      </PTable>`,
});

export const Table = Template.bind({});
Table.args = {
  cols: 3,
  titles: ["hello world", "cash/credit", "value"],
  colWidths: [25, 50, 25],
  darkMode: false,
  // leftAlign: true,
  rounded: true,
  border: false,
};
