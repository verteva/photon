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
  template: `<PSideBar v-bind='$props' 
  >      
    <div class="ph-flex ph-items-center">
      <div class="ph-font-bold ph-mt-1 ph-leading-5 ph-mr-auto">
        I want a better <br />variable rate
      </div>
      <PIcon
        name="Percentage"
        type="xl"
        class="ph-text-brand2"
      />
    </div>
  </PSideBar>`,
});

export const SideBar = Template.bind({});
SideBar.args = {
  // Props to be passed....
};
