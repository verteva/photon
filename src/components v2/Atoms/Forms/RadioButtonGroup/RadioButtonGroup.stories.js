import P2RadioButtonGroup from './RadioButtonGroup.vue';
import PButton from '@/components/Button';
export default {
  title: 'V2/Atoms/Forms/RadioButtonGroup',
  component: P2RadioButtonGroup,
  argTypes: {
    // Configurable component options in SB UI...
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
      clickedIndex: 2,
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

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'Apartment',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'Apartment',
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
export const icons = Template.bind({});
icons.args = {
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'Apartment',
      disabled: true,
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'Apartment',
      value: 'photon radio-checked',
      valueRadio: 'photon radio-checked',
      id: '1',
    },
    {
      value: 4,
      icon: 'Apartment',
      label: 'With 4 people',
    },
    {
      value: 7,
      icon: 'Apartment',
      label: 'With your plus one',
    },
    {
      value: 99,
      icon: 'Apartment',
      label: 'With 9 people',
    },
  ],
  selectedIndex: 2,
};
export const singleRow = Template.bind({});
singleRow.args = {
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'Apartment',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'Apartment',
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
export const twoRows = Template.bind({});
twoRows.args = {
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'Apartment',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'Apartment',
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
  rows: 2,
  selectedIndex: 2,
};
export const threeRows = Template.bind({});
threeRows.args = {
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'Apartment',
      disabled: true,
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'Apartment',
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

export const Interactive = Template.bind({});
Interactive.args = {
  items: [
    {
      value: 1,
      label: 'On my own ddd',
      icon: 'Apartment',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'Apartment',
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
