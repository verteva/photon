import PContentCard from './ContentCard.vue';

export default {
  title: 'V2/Molecules/Components/ContentCard',
  component: PContentCard,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PContentCard },
  props: Object.keys(argTypes),
  template: `<PContentCard v-bind='$props'
  >
    <div class="ph-flex ph-items-center">
      <div class="ph-font-bold ph-mt-1 ph-leading-5 ph-mr-auto">
        I want a better <br />variable rate
      </div>
    </div>
  </PContentCard>`,
});

export const ContentCard = Template.bind({});
ContentCard.args = {
  // Props to be passed....
};
