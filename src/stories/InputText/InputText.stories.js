import PInputText from './InputText.vue';
import PLabel from '../Label';

export default {
  title: 'Forms/InputText',
  component: PInputText,
  argTypes: {
    // Configurable component options in SB UI...
  },};

const Template = (args, { argTypes }) => ({
  components: { PInputText, PLabel },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PInputText
        v-bind='$props'
        icon-left='Dollar'
        placeholder='Add....'
        class="ph-bg-gr222ey5"
        :errors="errs"
      >        
        <template v-slot:label>
        <p-label>How much is your property worth?<span class="ph-text-grey3 ph-font-normal ph-ml-1">(Ballpark is ok)</span></p-label>
        </template>        
      </PInputText>
      <button @click="showError">Show errors</button>
    </div>
  `,
  data() {
    return {
      errs: [],
    };
  },
  methods: {
    showError() {
      if (this.errs?.length) {
        this.errs = [];
      } else {
        this.errs = ['Required', 'Invalid'];
      }
    },
  }
});

export const InputText = Template.bind({});
InputText.args = {
  // Props to be passed....
};
