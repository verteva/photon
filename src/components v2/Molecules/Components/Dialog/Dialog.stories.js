import PDialog from './Dialog.vue';
import P2Button from '@/components v2/Atoms/Components/Button/Button.vue';

export default {
  title: 'v2/Molecules/Components/Dialog',
  component: PDialog,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { PDialog, P2Button },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p-dialog
        v-bind='$props'
        v-if="confirmDelete"
        @confirm="answer = true"
        @cancel="answer = false"
        @transitionedOut="confirmDelete = false"
        heading="Are you sure you’d like to delete that thing?"
      >
        <template v-if="${'default' in args}" v-slot>${args.default}</template>
      </p-dialog>
      <p2-button @click="confirmDelete = true">Delete something</p2-button>

      <div class="ph-mt-5" v-if="answer">Deleted</div>
      <div class="ph-mt-5" v-if="answer === false">Not Deleted</div>
    </div>
  `,
  data() {
    return {
      confirmDelete: false,
      answer: null,
    };
  },
});

export const Dialog = Template.bind({});
Dialog.args = {
  // Props to be passed....
  default: 'This is default slot content',
};

export const DialogTitleOnly = Template.bind({});
DialogTitleOnly.args = {};
