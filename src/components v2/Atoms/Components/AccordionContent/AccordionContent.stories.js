import PAccordionContent from './AccordionContent.vue';
import PCard from '../Card/Card.vue';

export default {
  title: 'V2/Atoms/Components/AccordionContent',
  component: PAccordionContent,
  argTypes: {
    noHeadingRule: {
      control: {
        type: 'boolean',
      },
    },
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
  args: {
    noHeadingRule: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { PAccordionContent, PCard },
  props: Object.keys(argTypes),
  template: `
    <PCard size="sm">
      <PAccordionContent v-bind="$props">
          This is some content
      </PAccordionContent>
    </PCard>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const WithoutRule = Template.bind({});
WithoutRule.args = {
  noHeadingRule: true,
};
