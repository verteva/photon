import PMessage from './Message.vue';

export default {
  title: 'Components/Message',
  component: PMessage,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PMessage },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PMessage title="Simple one line success message"  type="success" /><br />
      <PMessage v-bind='$props' type="success" @click='()=>{}' /><br />
      
      <PMessage title="Simple one line info message"  type="info" /><br />
      <PMessage v-bind='$props' type="info" @click='()=>{}' /><br />
      
      <PMessage title="Simple one line error message"  type="error" /><br />
      <PMessage v-bind='$props' type="error" @click='()=>{}' /><br />
      
      <PMessage title="Simple one line warning message"  type="warning" /><br />
      <PMessage v-bind='$props' type="warning" @click='()=>{}' /><br />

      <p-message type="error" >
        Slot content
      </p-message>
    </div>
  `,
});

export const Message = Template.bind({});
Message.args = {
  title: 'Title',
  description: 'Some description...',
  callToAction: 'Next...',
};
