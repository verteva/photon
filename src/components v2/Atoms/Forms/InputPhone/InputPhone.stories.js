import PInputPhone from './InputPhone.vue';

export default {
  title: 'v2/Atoms/Forms/InputPhone',
  component: PInputPhone,
  argTypes: {},
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
        this.errs = ['Inine validation error'];
      }
    },
  },
});

export const InputPhone = Template.bind({});
InputPhone.args = {
  // Props to be passed....
};
