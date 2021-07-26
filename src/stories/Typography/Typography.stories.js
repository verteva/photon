import PText from './Text.vue';
import PH1 from './H1.vue';
import PH2 from './H2.vue';
import PH3 from './H3.vue';

import {
  TextElementDiv,
  TextElementSpan,
  TextElementParagraph,
} from './types'

export default {
  title: 'Photon/Typography',
  component: PText,
  argTypes: {
    el: { type: 'select', options: [TextElementDiv, TextElementSpan, TextElementParagraph] },
    xl: { options: [true, false] },
    lg: { options: [true, false] },
    sm: { options: [true, false] },
    xs: { options: [true, false] },
  },
};


const TextTemplate = (args, { argTypes }) => ({
  components: { PText },
  props: Object.keys(argTypes),
  template: `<p-text v-bind="$props">${args.copy}</p-text>`,
});

export const Text = TextTemplate.bind({});
Text.args = {
  copy: 'Some text...',
  xl: false,
  lg: false,
  sm: false,
  xs: false,
};

const H1Template = (args, { argTypes }) => ({
  components: { PH1 },
  props: Object.keys(argTypes),
  template: `<p-h1>${args.copy}</p-h1>`,
});
export const H1 = H1Template.bind({});
H1.args = {
  copy: 'Heading 1',
};

const H2Template = (args, { argTypes }) => ({
  components: { PH2 },
  props: Object.keys(argTypes),
  template: `<p-h2>${args.copy}</p-h2>`,
});
export const H2 = H2Template.bind({});
H2.args = {
  copy: 'Heading 2',
};

const H3Template = (args, { argTypes }) => ({
  components: { PH3 },
  props: Object.keys(argTypes),
  template: `<p-h3>${args.copy}</p-h3>`,
});
export const H3 = H3Template.bind({});
H3.args = {
  copy: 'Heading 3',
};

const AllTemplate = () => ({
  components: { PText, PH1, PH2, PH3 },
  template: `
    <div>
      <p-h1 class="ph-my-10">This an H1 heading<br /> with a second line</p-h1>
      <p-h2 class="ph-my-10">This an H2 heading<br /> with a second line</p-h2>
      <p-h3 class="ph-my-10">This an H3 heading<br /> with a second line</p-h3>
      <p-text xl class="ph-my-10">This is Body XLarge<br />and another line</p-text>
      <p-text lg class="ph-my-10">This is Body Large<br />and another line</p-text>
      <p-text class="ph-my-10">This is Body <br />and another line</p-text>
      <p-text sm class="ph-my-10">This is Body Small<br />and another line</p-text>
      <p-text xs class="ph-my-10">This is Body XSmall<br />and another line</p-text>
    </div>
  `,
});
export const All = AllTemplate.bind({});
