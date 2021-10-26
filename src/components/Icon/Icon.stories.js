
import icons from './icons';
import PIcon from './Icon.vue';
import {
  IconSizeXs,
  IconSizeSm,
  IconSizeMedium,
  IconSizeLg,
  IconSizeXl,
  IconSizeHuge,
} from './types';

export default {
  title: 'Global/Icons',
  component: PIcon,
  argTypes: {
    textColor: { control: 'color' },
    type: { type: 'select', options: [
      IconSizeXs,
      IconSizeSm,
      IconSizeMedium,
      IconSizeLg,
      IconSizeXl,
      IconSizeHuge,
    ]},
  },
  args: {
    type: IconSizeMedium,
    textColor: '#000000',
  },
};



const AllTemplate = (args, { argTypes }) => ({
  components: { PIcon },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-max-w-xl ph-pt-16">
      <div class="ph-flex ph-flex-wrap ph-w-full" :style="{ color: '${args.textColor || ''}' }">
        <div
          v-for="i in icons"
          :key="i"
          class="ph-flex ph-flex-col ph-p-2 ph-m-1 ph-border ph-border-grey5 ph-items-center"
          @mouseover="onOver(i)"
          @mouseout="onOut()"
        >
          <PIcon :name="i" v-bind="$props" alt="dsfffsd" />
        </div>
      </div>
        
      <div class="ph-fixed ph-top-5 ph-left-5 ph-mt-4 ph-text-xs ph-bg-grey6 ph-p-2">
        Icon: {{ iconName }}
      </div>
    </div>
  `,
  data() {
    return {
      icons,
      iconName: '',
    }
  },
  methods: {
    onOver(i) {
      this.iconName = i;
    },
    onOut() {
      this.iconName = '';
    },
  }
});

export const All = AllTemplate.bind({});