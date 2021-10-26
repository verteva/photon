import PBadge from './Badge.vue';
import PIcon from '../Icon';
import PButton from '../Button';

export default {
  title: 'Components/Badge',
  component: PBadge,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  components: {PBadge, PIcon, PButton},
  props: Object.keys(argTypes),
  data() {
    return {
      value: 0
    }
  },
  template: `
    <div class="ph-mt-4">
      <div>
        <p-badge class="ph-text-brand2" :show="showBadge" v-bind='$props'>
          <p-icon
            name="House"
            type="lg">
          </p-icon>
          <template #badge>
          {{ value }}
          </template>
        </p-badge>
      </div>
      <div class="ph-mt-4">
        <p-button @click="sendNotification">
          Send Notification
        </p-button>
        <p-button type="plain" @click="clearNotification">
          Clear Notification
        </p-button>
      </div>
    </div>
  `,
  computed:{
    showBadge() {
      return this.value !== 0;
    }
  },
  methods: {
    sendNotification() {
      this.value++;
    },
    clearNotification() {
      this.value = 0;
    }
  }
});

export const Badge = Template.bind({});
Badge.args = {
  // Props to be passed....
};
