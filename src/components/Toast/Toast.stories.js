import PToast from './Toast.vue';

export default {
  title: 'Components/Toast',
  component: PToast,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PToast },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PToast title="Simple one line toast message"  type="success" /><br />
      <PToast v-bind='$props' type="success" @click='()=>{}' /><br />
      
      <PToast title="Simple one line toast message"  type="info" /><br />
      <PToast v-bind='$props' type="info" @click='()=>{}' /><br />
      
      <PToast title="Simple one line toast message"  type="error" /><br />
      <PToast v-bind='$props' type="error" @click='()=>{}' /><br />
      
      <PToast title="Simple one line toast message"  type="alert" /><br />
      <PToast v-bind='$props' type="alert" @click='()=>{}' /><br />
    </div>
  `,
});

export const Toast = Template.bind({});
Toast.args = {
  title: 'Title',
  description: 'Some description...',
  callToAction: 'Next...',
};
