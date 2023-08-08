import P2Card from './Card.vue';
import { CardSizes } from './types';

export default {
  title: 'V2/Atoms/Components/Card',
  component: P2Card,
  argTypes: {
    // Configurable component options in SB UI...
    size: {
      control: 'select',
      options: Object.values(CardSizes),
      defaultValue: CardSizes.MD,
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2Card },
  props: Object.keys(argTypes),
  template: `
    <p2-card v-bind='$props'>
      Hello
    </p2-card>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Light = Template.bind({});
Light.args = {
  light: true,
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Border = Template.bind({});
Border.args = {
  border: true,
};

export const LightShadowBorder = Template.bind({});
LightShadowBorder.args = {
  light: true,
  shadow: true,
  border: true,
};

export const NoPaddingNotRounded = Template.bind({});
NoPaddingNotRounded.args = {
  noPadding: true,
  rounded: false,
};
