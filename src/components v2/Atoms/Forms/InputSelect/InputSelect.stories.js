import PInputSelect from './InputSelect.vue';

export default {
  title: 'v2/Atoms/Forms/InputSelect',
  component: PInputSelect,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { PInputSelect },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PInputSelect v-model="test" v-bind="$props"/>
      {{test}}
    </div>`,
  data() {
    return {
      test: {
        code: '000',
        label: 'Please select...',
        icon: 'Checkmark',
      },
    };
  },
});

export const Default = Template.bind({});
Default.args = {
  openIndicatorIcon: 'MenuDown',
  optionLabelVar: 'label',
  optionCustomLabelVar: 'label',
  selectedOptionLabelVar: 'label',
  selectedOptionCustomLabelVar: 'label',
  returnObj: true,
  disabled: true,
  reducePrefixSpacing: true,
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
};

export const Interactive = Template.bind({});
Interactive.args = {
  openIndicatorIcon: 'MenuDown',
  returnObj: true,
  disabled: false,
  reducePrefixSpacing: true,
  items: ['test1', 'test2', 'test3'],
};
