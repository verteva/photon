import PSkeletonLoader from './SkeletonLoader.vue';


export default {
  title: 'Components/SkeletonLoader',
  component: PSkeletonLoader,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  components: { PSkeletonLoader },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-skeleton-loader v-bind="$props">   
      </p-skeleton-loader>
    </div>
  `,
});

export const SkeletonLoader = Template.bind({});
SkeletonLoader.args = {
  width: '100%',
  // Props to be passed....
};
