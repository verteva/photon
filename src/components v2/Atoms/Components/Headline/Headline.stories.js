import PHeadline from './Headline.vue';

export default {
  title: 'v2/Atoms/Forms/Headline',
  component: PHeadline,
};

const Template = (args, { argTypes }) => ({
  components: { PLabel },
  props: Object.keys(argTypes),
  template: '<PHeadline v-bind="$props"/>',
});

export const Default = Template.bind({});
