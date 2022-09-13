import P2Input from './Input.vue';
import '../../assets/scss/main.scss';

const bool = { options: [true, false] };

export default {
  title: 'v2/Forms/Input',
  component: P2Input,
  // Set the order of the props
  argTypes: {
    hideErrors: bool,
    errors: {
      control: 'array',
      defaultValue: ['Error 1', 'Error 2'],
    },
  },
  // Set the initial values of the props
  args: {},
};

const BasicTemplate = (args, { argTypes }) => ({
  components: { P2Input },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-flex">
      <p2-input v-bind="$props" />
    </div>
  `,
});

export const Basic = BasicTemplate.bind({});
Basic.argTypes = {};
