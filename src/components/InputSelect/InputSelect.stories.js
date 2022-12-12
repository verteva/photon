import PInputSelect from './InputSelect.vue';
import PButton from '../Button';

export default {
  title: 'Forms/InputSelect',
  component: PInputSelect,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { PInputSelect, PButton },
  props: Object.keys(argTypes),
  template:
    '<div><PInputSelect v-model="test" placeHolder="Test" :errors="errs" :returnObj="true" v-bind="$props"/><p-button class="ph-mt-4" :disabled="false" @click="showError">Toggle inline errors</p-button></div>',
  data() {
    return {
      name: null,
      errs: [],
      test: {
        code: '000',
        label: 'Please select...',
        icon: 'Checkmark',
      },
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
  label: 'This is an input select',
  dropType: 'up',
  openIndicatorIcon: 'MenuDown',
  openIndicatorIconSize: 'md',
  customLabelVar: 'label',
  returnObj: true,
  backgroundColor: '#123456',
  textColor: '#FFFFFF',
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
