import PBackDrop from './BackDrop.vue';

export default {
  title: 'v2/Atoms/Forms/BackDrop',
  component: PBackDrop,
};

const Template = (args, { argTypes }) => ({
  components: { PLabel },
  props: Object.keys(argTypes),
  template: '<PBackDrop v-bind="$props"/>',
});

export const Default = Template.bind({});
