import PProgressCircular from './ProgressCircular.vue';

export default {
  title: 'Components/ProgressCircular',
  component: PProgressCircular,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { PProgressCircular },
  props: Object.keys(argTypes),
  data: {
    progress: 0,
  },
  template: `
    <div>
      <p-progress-circular class="" v-bind="$props">
        {{ value }}
      </p-progress-circular>
    </div>
  `,
});

export const ProgressCircular = Template.bind({});

ProgressCircular.args = {
  indeterminate: true,
  size: '20px',
};

export const ProgressCircularValue = Template.bind({});

ProgressCircularValue.args = {
  indeterminate: true,
  size: '48px',
  value: 0,
  underlay: true,
};
