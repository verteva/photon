import PInputPhone from './InputPhone.vue';

export default {
  title: 'v2/Atoms/Forms/InputPhone',
  component: PInputPhone,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    borderRadius: {
      control: {
        type: 'number',
      },
    },
    countries: {
      control: {
        type: 'object',
      },
    },
    defaultCountryCode: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    placeholder: 'Phone number',
  },
};

const Template = (args, { argTypes }) => ({
  components: { PInputPhone },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-phone
        v-bind='$props'
      />
    </div>
  `,
});

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { PInputPhone },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-input-phone
        v-bind='$props'
        :value="innerValue"
        @input="onChange"
      />
    </div>
  `,
  data() {
    return {
      innerValue: '',
    };
  },
  methods: {
    onChange(e) {
      this.innerValue = e;
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  // Props to be passed....
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const CountriesList = Template.bind({});
CountriesList.args = {
  countries: ['AU', 'NL', 'US', 'NZ', 'GB'],
};

export const StartingCountry = Template.bind({});
StartingCountry.args = {
  countries: ['AU', 'NL', 'US', 'NZ', 'GB'],
  defaultCountryCode: 'GB',
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  // Props to be passed....
};
