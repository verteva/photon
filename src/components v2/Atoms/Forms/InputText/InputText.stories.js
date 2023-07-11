import PLabel from '@/components v2/Atoms/Forms/Label';
import PInputText from '@/components v2/Atoms/Forms/InputText';
import PButton from '@/components v2/Atoms/Components/Button';
import { PText } from '@/components/Typography';

export default {
  title: 'v2/Atoms/Forms/InputText',
  component: PInputText,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { PInputText, PLabel, PButton, PText },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-text
        v-bind='$props'
        :errors="errs"
        v-model="name"
      />
      <br />
      <p-text xs class="ph-mb-5">Name: {{ name }}</p-text>
    </div>
  `,
  data() {
    return {
      name: null,
      errs: [],
    };
  },
  methods: {
    showError() {
      if (this.errs?.length) {
        this.errs = [];
      } else {
        this.errs = ['Inline validation error'];
      }
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  // Props to be passed....
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Enter your name...',
};

export const Centered = Template.bind({});
Centered.args = {
  centered: true,
  placeholder: 'Enter your name...',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  iconLeft: 'dollar',
  iconLeftFamily: 'fal',
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconRight: 'check',
  iconRightFamily: 'fal',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
