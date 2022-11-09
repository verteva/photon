import P2Message from './Message.vue';

export default {
  title: 'V2/Molecules/Components/Message',
  component: P2Message,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'info', 'error', 'warning'],
      },
    },
  },
};

const AllMessageTemplate = (args, { argTypes }) => ({
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

const Template = (args, { argTypes }) => ({
  components: { P2Message },
  props: Object.keys(argTypes),
  template: `
      <P2Message v-bind='$props' @click='()=>{}' />
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Simple one line success message',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Simple one line success message',
  type: 'error',
};

export const Info = Template.bind({});
Info.args = {
  title: 'Simple one line success message',
  type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Simple one line success message',
  type: 'warning',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Simple one line success message',
  description: 'This is a description',
};

export const WithCallToAction = Template.bind({});
WithCallToAction.args = {
  title: 'Simple one line success message',
  description: 'This is a description',
  callToAction: 'Next',
};

export const HiddenCloseButton = Template.bind({});
HiddenCloseButton.args = {
  title: 'Simple one line success message',
  hideClose: true,
};

export const Interactive = Template.bind({});
Interactive.args = {
  title: 'Simple one line success message',
};

export const AllMessages = AllMessageTemplate.bind({});
AllMessages.args = {
  title: 'Title',
  description: 'Some description...',
  callToAction: 'Next...',
};
