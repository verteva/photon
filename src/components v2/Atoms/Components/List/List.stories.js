import PList from './List.vue';
import PLi from '../ListItem';

export default {
  title: 'v2/Atoms/Components/List',
  component: PList,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PList, PLi },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PList v-bind="$props">
        <p-li>Back to the future</p-li>
        <p-li>Inception</p-li>
        <p-li>Platoon</p-li>
        <p-li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p-li>
      </PList>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Circle = Template.bind({});
Circle.args = {
  listStyle: 'circle',
  type: 'ul',
};

export const Disc = Template.bind({});
Disc.args = {
  listStyle: 'disc',
  type: 'ul',
};

export const Number = Template.bind({});
Number.args = {
  listStyle: 'decimal',
  type: 'ul',
};
