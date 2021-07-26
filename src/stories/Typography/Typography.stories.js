import PText from './Text.vue';

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

const AllTemplate = () => ({
  components: { PText },
  template: `
    <div>
      (font-size  / line height / letter spacing)
      <hr class="ph-my-6" />
      <h1 class="ph-my-10">This an H1 heading<br /> with a second line</h1>
      <h2 class="ph-my-10">This an H2 heading<br /> with a second line</h2>
      <h3 class="ph-my-10">This an H3 heading<br /> with a second line</h3>
      <p-text xl class="ph-my-10">This is Body XLarge<br />and another line</p-text>
      <p-text lg class="ph-my-10">This is Body Large<br />and another line</p-text>
      <p-text class="ph-my-10">This is Body <br />and another line</p-text>
      <p-text sm class="ph-my-10">This is Body Small<br />and another line</p-text>
      <p-text xs class="ph-my-10">This is Body XSmall<br />and another line</p-text>
    </div>
  `,
});
export const All = AllTemplate.bind({});