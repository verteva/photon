import PAccordionHeader from './AccordionHeader.vue';
import PCard from '../Card/Card.vue';

export default {
  title: 'V2/Atoms/Components/AccordionHeader',
  component: PAccordionHeader,
  argTypes: {
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    complete: {
      control: {
        type: 'boolean',
      },
    },
    expanded: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    interactive: {
      control: {
        type: 'boolean',
      },
    },
    openArrows: {
      control: {
        type: 'boolean',
      },
    },
    openCloseIcons: {
      control: {
        type: 'object',
      },
    },
    section: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    fullWidth: false,
    complete: false,
    expanded: false,
    disabled: false,
    interactive: false,
    openArrows: false,
    openCloseIcons: ['ChevronDown', 'ChevronUp'],
    section: 'section',
  },
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#efefef' },
        { name: 'dark', value: '#444444' },
      ],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { PAccordionHeader, PCard },
  props: Object.keys(argTypes),
  template: '<PCard no-padding><PAccordionHeader v-bind="$props"/></PCard>',
});

export const Default = Template.bind({});
Default.args = {
  section: 'header',
  openArrows: true,
};

export const Expanded = Template.bind({});
Expanded.args = {
  section: 'header',
  openArrows: true,
  expanded: true,
};

export const Completed = Template.bind({});
Completed.args = {
  section: 'header',
  openArrows: true,
  complete: true,
};

export const Interactive = Template.bind({});
Interactive.args = {
  section: 'Interactive header',
  openArrows: true,
  interactive: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  section: 'Disabled header',
  openArrows: true,
  disabled: true,
};

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  section: 'Custom Icons',
};
