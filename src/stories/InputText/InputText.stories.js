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
        :error="errors ? 'Required' : ''"
        
      >        
        <template v-slot:label>
        <p-label>How much is your property worth?<span class="ph-text-grey3 ph-font-normal ph-ml-1">(Ballpark is ok)</span></p-label>
        </template>        
      </PInputText>

      <PInputText
        v-bind='$props'
        icon-right='Boat'
        placeholder='Add....'
        class="ph-bg-gr222ey5"
        label="First name"
        value='Enter your address'
        :error="errors ? 'Please enter a valid name' : ''"
        
      />
      <PInputText
        v-bind='$props'
        icon-right='Boat'
        placeholder='Add....'
        class="ph-bg-gr222ey5"
        label="First name"
        value='Enter your address'
        :error="errors ? 'Please enter a valid name' : ''"
        
      />
      <PInputText
        v-bind='$props'
        icon-right='Boat'
        placeholder='Add....'
        class="ph-bg-gr222ey5"
        label="First name"
        value='Enter your address'
        :error="errors ? 'Please enter a valid name' : ''"
        
      />
      <PInputText
        v-bind='$props'
        icon-right='Boat'
        placeholder='Add....'
        class="ph-bg-gr222ey5"
        label="First name"
        value='Enter your address'
        :error="errors ? 'Please enter a valid name' : ''"
        
      />

      <button @click="showError">Show errors</button>
    </div>
  `,
  data() {
    return {
      errors: false,
    };
  },
  methods: {
    showError() {
      this.errors = !this.errors;
    },
  }
});

export const InputText = Template.bind({});
InputText.args = {
  // Props to be passed....
};
