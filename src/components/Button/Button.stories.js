import PButton from './Button.vue';
import '../../assets/scss/main.scss';

export default {
  title: 'Button & Tags/Button',
  component: PButton,
  argTypes: {
    disabled: { options: [true, false] },
    submitting: { options: [true, false] },
    // size: { type: 'select', options: ['xs', 'small', 'medium', 'large'] },
    // buttonStyle: { type: 'select', options: ['primary', 'secondary', 'plain'] },
    type: { type: 'select', options: ['submit', 'button'] },
    onClick: {},
  },
  args: {
    disabled: false,
    type: 'submit',
    size: 'small',
  },
};

const TypesTemplate = (args, { argTypes }) => ({
  components: { PButton },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-flex">
      <div class="ph-flex ph-flex-col ph-mr-10">
        <PButton v-bind="$props" buttonStyle="primary" size="medium"/>
        <br />
        <PButton v-bind="$props" buttonStyle="primary" size="small"/>
        <br />
        <PButton v-bind="$props" buttonStyle="primary" size="xs" />
        </div>
      <div class="ph-flex ph-flex-col">
        <PButton v-bind="$props" buttonStyle="secondary" size="medium"/>
        <br />
        <PButton v-bind="$props" buttonStyle="secondary" size="small"/>
        <br />
        <PButton v-bind="$props" buttonStyle="secondary" size="xs" />
      </div>
    </div>
  `,
});

export const Types = TypesTemplate.bind({});
Types.args = {
  disabled: false,
  submitting: false,
  buttonStyle: 'primary',
  size: 'small',
  type: 'submit'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   disabled: false,
//   label: 'Button',
//   buttonStyle: 'secondary',
//   size: 'small',
// };

// export const Plain = Template.bind({});
// Plain.args = {
//   buttonStyle: 'plain',
// };
