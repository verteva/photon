import PToast from './Toast.vue';
import PButton from '../Button';
import { v4 as uuidv4 } from 'uuid';

export default {
  title: 'Components/Toast',
  component: PToast,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PToast, PButton },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-toast :store="messages" /><br />
      <p-button @click="newToast" size='xs'>Add</p-button>
    </div>
  `,

  data() {
    return {
      messages: {
        queue: [],
      },
    };
  },
  methods: {
    newToast() {
      let type;
      const rollTheDice = Math.random();
      if (rollTheDice < 0.25) type = 'success';
      else if (rollTheDice < 0.5) type = 'info';
      else if (rollTheDice < 0.75) type = 'error';
      else if (rollTheDice < 1) type = 'warning';

      this.messages.queue.unshift({
        title: 'Toast message',
        type,
        id: uuidv4(),
      });
    },
  },
});

export const Toast = Template.bind({});
Toast.args = {};
