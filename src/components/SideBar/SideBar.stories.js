import PSideBar from './SideBar.vue';
import PIcon from '../Icon';

export default {
  title: 'Components/SideBar',
  component: PSideBar,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PSideBar, PIcon },
  props: Object.keys(argTypes),
  template: `<PSideBar v-bind='$props' app class="ph-bg-brand2 ph-text-white" 
  >      
    <ul>
      <li>Nav Item 1</li>
      <li>Nav Item 2</li>
      <li>Nav Item 3</li>
      <li>Nav Item 4</li>
    </ul>
  </PSideBar>`,
});

export const SideBar = Template.bind({});
SideBar.args = {
  // Props to be passed....
};
