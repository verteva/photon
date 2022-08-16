import PInputBasicSelect from './InputBasicSelect.vue';
import PButton from '../Button';

export default {
  title: 'Forms/InputBasicSelect',
  component: PInputBasicSelect,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { PInputBasicSelect, PButton },
  props: Object.keys(argTypes),
  template:
    '<div><PInputBasicSelect v-model="test" placeholder="Test" :errors="errs" :return-obj="true" v-bind="$props"/><p-button class="ph-mt-4" :disabled="false" @click="showError">Toggle inline errors</p-button></div>',
  data() {
    return {
      name: null,
      errs: [],
      test: '',
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

export const InputSelect = Template.bind({});
InputSelect.args = {
  label: 'This is a basic input select',
  dropType: 'down',
  openIndicatorIcon: 'MenuDown',
  openIndicatorIconSize: 'med',
  customLabelVar: 'label',
  returnObj: true,
  items: [
    {
      code: '000',
      label: 'Please select...',
      icon: 'Checkmark',
    },
    {
      code: '001',
      label: '<span class="af_hl">highlight</span> test1',
      icon: 'Checkmark',
    },
    {
      code: '002',
      label: '<span class="af_hl">highlight</span> test2',
      icon: 'Checkmark',
    },
  ],
  // Props to be passed....
};
