import PToast from './Toast.vue';
import PButton from '@/components v2/Atoms/Components/Button';
import store from '@/components v2/store';

export default {
  title: 'v2/Molecules/Components/Toast',
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
      Click here to add a toast!
      <p-toast :toasts="store.state.toast.toasts" @close="deleteToast" />
      <br />
      <p-button @click="newToast" size='xs'>Add</p-button>
    </div>
  `,

  data() {
    return {
      store,
      messages: {
        queue: [],
      },
    };
  },
  methods: {
    deleteToast(id) {
      this.store.dispatch('toast/removeToast', id);
    },
    newToast() {
      let type;
      const rollTheDice = Math.random();
      if (rollTheDice < 0.25) type = 'success';
      else if (rollTheDice < 0.5) type = 'info';
      else if (rollTheDice < 0.75) type = 'error';
      else if (rollTheDice < 1) type = 'warning';

      this.store.dispatch('toast/enqueueToast', {
        type,
        title: 'Message',
        autoclose: true,
      });
    },
  },
});

export const Toast = Template.bind({});
Toast.args = {};
