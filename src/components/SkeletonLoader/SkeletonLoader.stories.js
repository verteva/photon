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
      <p-skeleton-loader>   
      </p-skeleton-loader>
    </div>
  `,
});

export const InputPhone = Template.bind({});
InputPhone.args = {
  // Props to be passed....
};
