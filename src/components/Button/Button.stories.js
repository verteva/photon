import PButton from './Button.vue';
import '../../assets/scss/main.scss';

export default {
  title: 'Button & Tags/Button',
  component: PButton,
  argTypes: {
    disabled: { options: [true, false] },
    submitting: { options: [true, false] },
    // size: { type: 'select', options: ['xs', 'small', 'medium', 'large'] },
    // buttonStyle: { type: 'select', options: ['primary', 'secondary', 'plain'] },
    type: { type: 'select', options: ['submit', 'button'] },
    onClick: {},
  },
  args: {
    disabled: false,
    type: 'submit',
    size: 'small',
  },
};

const TypesTemplate = (args, { argTypes }) => ({
  components: { PButton },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-flex">
      <div v-for="btn in buttons" :key="btn.type" class="ph-flex ph-flex-col ph-mr-10 ph-items-center">
        <div class="ph-text-xs ph-mb-2">{{ btn.type.toUpperCase() }}</div>
        <PButton v-for="size in btn.sizes" :key="size" v-bind="$props" :buttonStyle="btn.type" :size="size" class="ph-my-2" />
      </div>
    </div>
  `,
  data() {
    return {
      buttons: [
        {
          type: 'primary',
          sizes: ['medium', 'small', 'xs'],
        },
        {
          type: 'secondary',
          sizes: ['medium', 'small', 'xs'],
        },
      ],
    }
  },
});

export const Types = TypesTemplate.bind({});
Types.args = {
  disabled: false,
  submitting: false,
  buttonStyle: 'primary',
  size: 'small',
  type: 'submit'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   disabled: false,
//   label: 'Button',
//   buttonStyle: 'secondary',
//   size: 'small',
// };

// export const Plain = Template.bind({});
// Plain.args = {
//   buttonStyle: 'plain',
// };
