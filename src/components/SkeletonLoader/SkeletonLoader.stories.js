import PSkeletonLoader from './SkeletonLoader.vue';

export default {
  title: 'Components/SkeletonLoader',
  component: PSkeletonLoader,
  argTypes: {},
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

export const SkeletonLoaderCard = Template.bind({});
SkeletonLoaderCard.args = {
  width: '100%',
  type: 'card',
  // Props to be passed....
};

export const SkeletonLoaderTable = Template.bind({});
SkeletonLoaderTable.args = {
  width: '100%',
  type: 'table',
  // Props to be passed....
};

export const SkeletonLoaderLists = Template.bind({});
SkeletonLoaderLists.args = {
  width: '100%',
  type: 'lists',
  listSize: 3,
  // Props to be passed....
};
