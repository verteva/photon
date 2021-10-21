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
        <template #default>
        <PTableCol>Tuesday</PTableCol>
        <PTableCol>$40000000</PTableCol>
        <PTableCol>2xxxxxxxxxxxxx</PTableCol>
        <PTableCol>3xxxxxxxxxxxxx</PTableCol>
        <PTableCol>4xxxxxxxxxxxxx</PTableCol>
        <PTableCol>5xxxxxxxxxxxxx</PTableCol>
        <PTableCol>Wednesday</PTableCol>
        <PTableCol>Wednesday</PTableCol>
        </template>
      </PTable>`,
});

export const Table = Template.bind({});
Table.args = {
  cols: 4,
  titles: ["hello world", "cash/credit", "value", "funds"],
  // colWidths: [15, 25, 25, 35],
  darkMode: false,
  leftAlign: true,
  rounded: true,
  border: true,
};
