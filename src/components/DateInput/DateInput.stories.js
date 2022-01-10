import PDateInput from './DateInput.vue';

export default {
  title: 'Forms/DateInput',
  component: PDateInput,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PDateInput },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PDateInput v-bind='$props' v-model='date' />
      <span class="ph-mt-4">Date: {{ date }}</span>
    </div>
  `,
  data() {
    return {
      date: null,
    };
  },
});

export const DateInput = Template.bind({});
DateInput.args = {
  // Props to be passed....
};
