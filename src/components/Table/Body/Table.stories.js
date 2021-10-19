import PTable from "./Table.vue";

export default {
  title: "Components/Table/Body",
  component: PTable,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PTable },
  props: Object.keys(argTypes),
  template: `<PTable v-bind='$props'></PTable>`,
});

export const Table = Template.bind({});
Table.args = {
  titles: ["hello world", "cash/credit", "value"],
};
