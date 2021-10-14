import PRadioGroup from "./RadioGroup.vue";
import PButton from "../Button";
export default {
  title: "Forms/RadioGroup",
  component: PRadioGroup,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PRadioGroup, PButton },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PRadioGroup
      v-bind='$props' v-model="innerValue" :errors="errs"
      :items="[
        {
          value: 1,
          label: 'On my own',
        },
        {
          value: 2,
          label: 'With a plus one',
        },
        {
          value: 4,
          label: 'With 4 people',
        },
        {
          value: 7,
          label: 'With your plus one',
        },
        {
          value: 99,
          label: 'With 9 people',
        },
      ]">
      </PRadioGroup>
      <p-button :disabled="false" @click="showError">Toggle inline errors</p-button>
    </div>
  `,
  data() {
    return {
      innerValue: null,
      errs: [],
    };
  },
  methods: {
    showError() {
      if (this.errs?.length) {
        this.errs = [];
      } else {
        this.errs = ["Inine validation error"];
      }
    },
  },
});

export const RadioGroup = Template.bind({});
RadioGroup.args = {};
