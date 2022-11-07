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
const LeftIconTemplate = (args, { argTypes }) => ({
  components: { PInputText, PLabel, PButton, PText },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-text
        v-bind='$props'
        :errors="errs"
        v-model="name"
        currency
        icon-left='Dollar'
      />            
      <p-text xs class="ph-mb-5">Value: {{ name }}</p-text>
      
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
const RightIconTemplate = (args, { argTypes }) => ({
  components: { PInputText, PLabel, PButton, PText },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-text
        v-bind='$props'
        :errors="errs"
        v-model="name"
        currency
        icon-right='Dollar'
      >
      <template>
      <p-label>Password<span class="ph-text-xs ph-text-grey3 ph-ml-1 ph-font-normal">(min 6 characters)</span></p-label>
      </template> 
      </p-input-text>          
      <p-text xs class="ph-mb-5">Value: {{ name }}</p-text>
      
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
const PasswordTemplate = (args, { argTypes }) => ({
  components: { PInputText, PLabel, PButton, PText },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-text
        v-bind='$props'
        :errors="errs"
        v-model="name"
        type="password"
      />            
      <p-text xs class="ph-mb-5">Password: {{ name }}</p-text>
      
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
export const LeftIcon = LeftIconTemplate.bind({});
LeftIcon.args = {
  // Props to be passed....
};
export const RightIcon = RightIconTemplate.bind({});
RightIcon.args = {
  // Props to be passed....
};
export const Password = PasswordTemplate.bind({});
Password.args = {
  // Props to be passed....
};
export const Number = Template.bind({});
Number.args = {
  number: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
