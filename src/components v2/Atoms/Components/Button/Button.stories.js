import P2Button from './Button.vue';
import { ButtonSizes, ButtonStyles, ButtonTypes } from './types';

const bool = { options: [true, false] };

export default {
  title: 'v2/Atoms/Components/Button',
  component: P2Button,
  // Set the order of the props
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Hello',
    },
    buttonStyle: {
      control: 'select',
      options: Object.values(ButtonStyles),
      defaultValue: ButtonStyles.PRIMARY,
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSizes),
      defaultValue: ButtonSizes.MEDIUM,
    },
    type: {
      control: 'select',
      options: Object.values(ButtonTypes),
      defaultValue: ButtonTypes.BUTTON,
    },
    iconLeft: {
      control: 'text',
      defaultValue: 'house',
    },
    iconLeftFamily: {
      control: 'text',
      defaultValue: 'fal',
    },
    iconRight: {
      control: 'text',
      defaultValue: 'check',
    },
    iconRightFamily: {
      control: 'text',
      defaultValue: 'fal',
    },
    disabled: bool,
    submitting: bool,
  },
  // Set the initial values of the props
  args: {},
};

const DocsTemplate = (args, { argTypes }) => ({
  components: { P2Button },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-flex">
      <div v-for="btn in buttons" :key="btn.type" class="ph-flex ph-flex-col ph-mr-10 ph-items-center">
        <div class="ph-text-xs ph-mb-2">{{ btn.type.toUpperCase() }}</div>
        <P2Button v-for="size in btn.sizes" :key="size" v-bind="$props" :buttonStyle="btn.type" :size="size" class="ph-my-2" />
      </div>
    </div>
  `,
  data() {
    const sizes = Object.values(ButtonSizes);
    return {
      buttons: Object.values(ButtonStyles).map((type) => ({
        type,
        sizes,
      })),
    };
  },
});

// This is how to do the submitting state in the future. Seperated from the button component.
const SubmittingTemplate = (args, { argTypes }) => ({
  components: { P2Button },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-flex">
      <P2Button v-bind="$props" class="ph-my-2">
        <div :style="{ opacity: submitting ? 0 : 1 }" class="ph-transition">{{ label }}</div>
      </P2Button>
    </div>
  `,
});

export const Docs = DocsTemplate.bind({});
Docs.argTypes = {};

export const Submitting = SubmittingTemplate.bind({});
Submitting.argTypes = {};
