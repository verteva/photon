import PButton from './Button.vue';
import '../../assets/scss/main.scss';

const notContolled = {
  control: { disable: true },
};

const notDisplayed = {
  control: { disable: true },
  table: { disable: true }
};

const bool = { options: [true, false]  };

export default {
  title: 'Button & Tags/Button',
  component: PButton,
  // Set the order of the props
  argTypes: {
    label: '',
    submitting: bool,
    disabled: bool,
    noRadius: bool,
    outlined: bool,
    upperCase: bool,
    valid: bool,
    block: bool,
    buttonStyle: notContolled,
    type: notContolled,
    size: notContolled,
  },
  // Set the initial values of the props
  args: {    
  },
};

const DocsTemplate = (args, { argTypes }) => ({
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
        {
          type: 'plain',
          sizes: ['medium'],
        },
      ],
    }
  },
});

export const Docs = DocsTemplate.bind({});
Docs.argTypes = {
};



const PlaygroundTemplate = (args, { argTypes }) => ({
  components: { PButton },
  props: Object.keys(argTypes),
  template: `<p-button>Hello</p-button>`,
});
export const Playground = PlaygroundTemplate.bind({});
Playground.argTypes = {
  label: notDisplayed,
  submitting: notDisplayed,
  disabled: notDisplayed,
  noRadius: notDisplayed,
  buttonStyle: notDisplayed,
  type: notDisplayed,
  size: notDisplayed,
  outlined: notDisplayed,
  upperCase: notDisplayed,
  valid: notDisplayed,
  block: notDisplayed,
};

