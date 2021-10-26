import PDialog from './Dialog.vue';
import PButton from '../Button';

export default {
  title: 'Components/Dialog',
  component: PDialog,
  argTypes: {
    // Configurable component options in SB UI...
  }
};

const Template = (args, { argTypes }) => ({
  components: { PDialog, PButton },
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
      />
      <p-button @click="confirmDelete = true">Delete something</p-button>
      
      <div class="ph-mt-5" v-if="answer">Deleted</div>
      <div class="ph-mt-5" v-if="answer === false">Not Deleted</div>
    </div>
  `,
  data() {
    return {
      confirmDelete: false,
      answer: null
    };
  }
});

export const Dialog = Template.bind({});
Dialog.args = {
  // Props to be passed....
};
