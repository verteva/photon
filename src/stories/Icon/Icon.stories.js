
import icons from './icons';
import PIcon from './Icon.vue';
import {
  IconTypeSmall,
  IconTypeMedium,
  IconTypeLarge,
} from './types';

export default {
  title: 'Photon/Icons',
  component: PIcon,
  argTypes: {
    textColor: { control: 'color' },
    type: { type: 'select', options: [IconTypeSmall, IconTypeMedium, IconTypeLarge] },
  },
  args: {
    type: IconTypeSmall,
    textColor: '#000000',
  },
};



const AllTemplate = (args, { argTypes }) => ({
  components: { PIcon },
  props: Object.keys(argTypes),
  template: `
    <div class="ph-flex ph-w-full" :style="{ color: '${args.textColor || ''}' }">
      <div
        v-for="i in iconList"
        :key="i.name"
        class="ph-flex ph-flex-col ph-p-2 ph-m-1 ph-border ph-border-grey5 ph-items-center"
      >
        <PIcon :name="i.name" v-bind="$props" />
        <div class="ph-mt-1 ph-text-xs ph-text-grey3">
          {{ i.name }}
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      iconList: Object.keys(icons)
        .map(key => ({
          name: key,
          icon: icons[key],
        }))
    }
  }
});

export const All = AllTemplate.bind({});