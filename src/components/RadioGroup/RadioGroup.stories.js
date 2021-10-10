import PRadioGroup from "./RadioGroup.vue";

export default {
  title: "Forms/RadioGroup",
  component: PRadioGroup,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PRadioGroup },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PRadioGroup
      v-bind='$props' v-model="value" :errors="errors"
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
          label: 'With dsaa plus one',
        },
        {
          value: 99,
          label: 'With 9 people',
        },

 
      ]">
      </PRadioGroup>
    </div>
  `,
  data() {
    return {
      value: null,
    };
  },
});

export const RadioGroup = Template.bind({});
RadioGroup.args = {
  // Props to be passed....
};
