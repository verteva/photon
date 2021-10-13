import PHeader from "./TableHeader.vue";

export default {
  title: "Components/Table/Header",
  component: PHeader,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PHeader },
  props: Object.keys(argTypes),
  template: `
  <PHeader v-bind='$props'></PHeader>
  `,
});
export const Header = Template.bind({});
Header.args = {
  // Props to be passed....
};
