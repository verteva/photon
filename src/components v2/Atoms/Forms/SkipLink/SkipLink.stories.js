import P2SkipLink from './SkipLink.vue';

export default {
  title: 'V2/Atoms/Forms/SkipLink',
  component: P2SkipLink,
};

const Template = (args, { argTypes }) => ({
  components: { P2SkipLink },
  props: Object.keys(argTypes),
  template:
    '<div><p>Use tab to see the skip links</p><P2SkipLink v-bind="$props" /></div>',
});

export const SkipLink = Template.bind({});
