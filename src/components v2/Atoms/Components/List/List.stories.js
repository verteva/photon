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

export const Number = Template.bind({});
Number.args = {
  listStyle: 'decimal',
  type: 'ul',
};
