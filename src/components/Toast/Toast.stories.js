import PToast from './Toast.vue';
import PButton from '../Button';
import store from '../store';

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
      TODO: Workout how to get Vuex working with this
      <p-toast />
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
    newToast() {
      let type;
      const rollTheDice = Math.random();
      if (rollTheDice < 0.25) type = 'success';
      else if (rollTheDice < 0.5) type = 'info';
      else if (rollTheDice < 0.75) type = 'error';
      else if (rollTheDice < 1) type = 'warning';
      
      this.store.dispatch('toast/popToast', {
        type: 'success',
        title: `Message`,
        autoclose: true,
      });
    },
  },
});

export const Toast = Template.bind({});
Toast.args = {};
