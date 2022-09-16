import P2Message from './Message.vue';

export default {
  title: 'V2/Components/Message',
  component: P2Message,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { P2Message },
  props: Object.keys(argTypes),
  template: `
    <div>
      <P2Message title="Simple one line success message"  type="success" /><br />
      <P2Message v-bind='$props' type="success" @click='()=>{}' /><br />
      
      <P2Message title="Simple one line info message"  type="info" /><br />
      <P2Message v-bind='$props' type="info" @click='()=>{}' /><br />
      
      <P2Message title="Simple one line error message"  type="error" /><br />
      <P2Message v-bind='$props' type="error" @click='()=>{}' /><br />
      
      <P2Message title="Simple one line warning message"  type="warning" /><br />
      <P2Message v-bind='$props' type="warning" @click='()=>{}' /><br />

      <p2-message type="error" >
        Slot content
      </p2-message>
    </div>
  `,
});

export const Message = Template.bind({});
Message.args = {
  title: 'Title',
  description: 'Some description...',
  callToAction: 'Next...',
};
