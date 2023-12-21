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
    countries: {
      control: {
        type: 'object',
      },
    },
    defaultPhoneNumber: {
      control: {
        type: 'text',
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

export const Interactive = Template.bind({});
Interactive.args = {
  countries: ['AU', 'NZ', 'US'],
  defaultCountryCode: 'AU',
};
