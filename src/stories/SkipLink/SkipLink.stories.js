import PSkipLink from './SkipLink.vue';
import '../../assets/scss/main.scss';

export default {
  title: 'Photon/SkipLink',
  component: PSkipLink,
};

const Template = (args, { argTypes }) => ({
  components: { PSkipLink },
  props: Object.keys(argTypes),
  template: '<div><p>Use tab to see the skip links</p><PSkipLink v-bind="$props" /></div>',
});

export const SkipLink = Template.bind({});