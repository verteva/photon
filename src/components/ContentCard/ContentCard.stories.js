import PCard from './ContentCard.vue';
import PIcon from '../Icon'; 

export default {
  title: 'Components/ContentCard',
  component: PCard,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PContentCard, PIcon },
  props: Object.keys(argTypes),
  template: `<PContentCard v-bind='$props' 
  >      
    <div class="ph-flex ph-items-center">
      <div class="ph-font-bold ph-mt-1 ph-leading-5 ph-mr-auto ">
        I want a better <br />variable rate
      </div>
      <p-icon
        name="Percentage"
        type="xl"
        class="ph-text-brand2"
      />
    </div>
  </PContentCard>`,
});

export const ContentCard = Template.bind({});
ContentCard.args = {
  // Props to be passed....
};
