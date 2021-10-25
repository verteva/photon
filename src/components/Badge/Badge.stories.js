import PBadge from './Badge.vue';

export default {
  title: 'Components/Badge',
  component: PBadge,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  components: {PBadge},
  props: Object.keys(argTypes),
  template: `
    <div>
      <PBadge v-bind='$props'>
        Test
      </PBadge
    </div>
  `,
});

export const Badge = Template.bind({});
Badge.args = {
  // Props to be passed....
};
