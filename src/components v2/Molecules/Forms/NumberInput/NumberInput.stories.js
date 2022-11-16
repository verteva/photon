import PNumberInput from './NumberInput.vue';

export default {
  title: 'v2/Molecules/Forms/NumberInput',
  component: PNumberInput,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    value: {
      control: {
        type: 'number',
      },
    },
    minVal: {
      control: {
        type: 'number',
      },
    },
    maxVal: {
      control: {
        type: 'number',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { PNumberInput },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PNumberInput
        v-bind='$props'
      />
    </div>
  `,
});

const InteractiveTemplate = (args, { argTypes }) => ({
  components: { PNumberInput },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PNumberInput
        v-bind='$props'
        v-model='innerValue'
        @change:subtract="onSubtract"
        @change:add="onAdd"
      />
    </div>
  `,
  data() {
    return {
      innerValue: 0,
    };
  },
  methods: {
    showError() {
      if (this.errs?.length) {
        this.errs = [];
      } else {
        this.errs = ['Inline validation error'];
      }
    },
    onSubtract() {
      this.innerValue -= 1;
    },
    onAdd() {
      this.innerValue += 1;
    },
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  value: 0,
};
