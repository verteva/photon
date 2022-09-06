import Loader from './Loader.vue';
import '../../assets/scss/main.scss';

export default {
  title: 'Button & Tags/Loader',
  component: Loader,
  // Set the order of the props
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'small', 'medium'],
    },
  },
  // Set the initial values of the props
  args: {},
};

const DocsTemplate = (args, { argTypes }) => ({
  components: { Loader },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-flex">
      <loader :size="size" />
    </div>
  `,
});

export const Docs = DocsTemplate.bind({});

Docs.argTypes = {};
