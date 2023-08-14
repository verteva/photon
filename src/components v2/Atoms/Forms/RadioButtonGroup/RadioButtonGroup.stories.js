import P2RadioButtonGroup from './RadioButtonGroup.vue';
import PButton from '@/components/Button';

export default {
  title: 'V2/Atoms/Forms/RadioButtonGroup',
  component: P2RadioButtonGroup,
  argTypes: {
    // Configurable component options in SB UI...
    stacked: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    stacked: false,
    rows: 1,
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2RadioButtonGroup, PButton },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2RadioButtonGroup
      v-bind='$props' :selectedIndex="clickedIndex" @click="handleClick" :errors="errs"
      :items="items" />
      <div>
      selected value: {{ $props.items[clickedIndex].value }}
      </div>
    </div>
  `,
  data() {
    return {
      clickedIndex: 0,
      errs: [],
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
    handleClick(value) {
      this.clickedIndex = value;
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  name: 'radio-button-name',
  items: [
    {
      value: 'Something here',
      label: 'Something here',
    },
    {
      value: 'Over there',
      label: 'Over there',
    },
  ],
  selectedIndex: 1,
  rows: 1,
  disabled: false,
  stacked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'radio-button-name',
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'house',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'house',
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
  ],
  selectedIndex: 2,
  disabled: true,
};

export const Icons = Template.bind({});
Icons.args = {
  name: 'radio-button-name',
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'house',
      disabled: true,
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'house',
      value: 'photon radio-checked',
      valueRadio: 'photon radio-checked',
      id: '1',
    },
    {
      value: 4,
      icon: 'house',
      label: 'With 4 people',
    },
    {
      value: 7,
      icon: 'house',
      label: 'With your plus one',
    },
    {
      value: 99,
      icon: 'house',
      label: 'With 9 people',
    },
  ],
  selectedIndex: 2,
};
export const SingleRow = Template.bind({});
SingleRow.args = {
  name: 'radio-button-name',
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'house',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'house',
      value: 'photon radio-checked',
      valueRadio: 'photon radio-checked',
      id: '1',
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
  ],
  rows: 1,
  selectedIndex: 2,
};
export const TwoRows = Template.bind({});
TwoRows.args = {
  name: 'radio-button-name',
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'house',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'house',
      value: 'photon radio-checked',
      valueRadio: 'photon radio-checked',
      id: '1',
    },
    {
      value: 4,
      label: 'With 4 people',
    },
  ],
  rows: 2,
  selectedIndex: 2,
};
export const ThreeRows = Template.bind({});
ThreeRows.args = {
  name: 'radio-button-name',
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'house',
      disabled: true,
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'house',
      value: 'photon radio-checked',
      id: '1',
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
  ],
  rows: 3,
  selectedIndex: 2,
};

export const FirstRadioFullWidth = Template.bind({});
FirstRadioFullWidth.args = {
  name: 'radio-button-name',
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'house',
      fullWidth: true,
    },
    {
      value: 2,
      label: 'This is a photon radio icon checked',
      icon: 'house',
      id: '1',
    },
    {
      value: 3,
      label: 'With 4 people',
    },
  ],
  rows: 2,
  selectedIndex: 0,
};

export const Interactive = Template.bind({});
Interactive.args = {
  name: 'radio-button-name',
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'house',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'house',
      value: 'photon radio-checked',
      id: '1',
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
  ],
  selectedIndex: 2,
};
