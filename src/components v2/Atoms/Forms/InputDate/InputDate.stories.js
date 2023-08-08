import P2InputDate from './InputDate.vue';

export default {
  title: 'V2/Atoms/Forms/InputDate',
  component: P2InputDate,
  argTypes: {
    // Configurable component options in SB UI...
    dateFormat: {
      control: {
        type: 'select',
        options: ['DDMMYYYY', 'MMDDYYYY', 'YYYYMMDD'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2InputDate },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2InputDate v-bind='$props' :value="dateObject" @dateDay="dayValue" @dateMonth="monthValue" @dateYear="yearValue" />
      <span>Date (DDMMYYYY): {{ dateObject.day }}-{{ dateObject.month }}-{{ dateObject.year }}</span>
    </div>
  `,
  data() {
    return {
      dateObject: {
        day: null,
        month: null,
        year: null,
      },
    };
  },
  methods: {
    dayValue(value) {
      this.dateObject.day = value;
    },
    monthValue(value) {
      this.dateObject.month = value;
    },
    yearValue(value) {
      this.dateObject.year = value;
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  disabled: true,
};
export const Interactive = Template.bind({});
Interactive.args = {
  // Props to be passed....
};
