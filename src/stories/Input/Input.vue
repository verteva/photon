<template>
  <div class="ph-pb-6">
    <slot name="label">
      <label class="ph-font-bold ph-flex ph-mb-2">{{ label }}</label>
    </slot>
    <div class="ph-relative">
      <div
        v-if="iconLeft"
        :class="[iconClassList]"
      >
        <p-icon
          :name="iconLeft"
          type="medium"
        />
      </div>
      <input
        :id="id"
        type="text"
        :class="baseClassList" 
        :background-color="$attrs.bgColor || bgColor"
        flat
        solo
        v-bind="$attrs"
        v-on="$listeners"
      />
      <div
        v-if="iconRight"
        :class="[iconClassList, 'ph-right-1']"
      >
        <p-icon
          :name="iconRight"
          type="medium"
        />
      </div>
    </div>
    <div class="ph-flex ph-items-center ph-p-1 ph-text-alert2 ph-absolute">
      <p-icon
        class="ph-mr-1"
        name="Error"
        type="small"
      />
      <p-text xs>
        Error
      </p-text>
    </div>
  </div>
</template>

<script lang="ts">
import PIcon from '../Icon';
import { PText } from '../Typography';

// import { bgColor, ID_PREFIX } from '@/components/const';
export const ID_PREFIX = 'photon-';

export default {
  name: 'PInput',
  components: {
    PIcon,
    PText,
  },
  props: {
    iconLeft: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    monospaced: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // this.id = ID_PREFIX + this._uid;
  },
  data():any {
    return {
      bgColor: '',
      id: null,
      iconClassList: [
        'ph-absolute',
        'ph-top-0',
        'ph-w-12',
        'ph-h-full',
        'ph-flex',
        'ph-items-center',
        'ph-justify-center',
      ],
      baseClassList: [
        'ph-antialiased',
        'ph-w-full ',
        'ph-font-normal ',
        'ph-text-grey3 ',
        'ph-bg-white ',
        'ph-rounded-lg ',
        'ph-p-2 ',
        'ph-pr-2 ',
        'ph-border ',
        'ph-border-grey5',
        this.iconLeft ? 'ph-pl-10 ph-left-1' : '',
        this.iconRight ? 'ph-pr-10' : '',
      ],
    };
  },
  computed: {
    slots() {
      // remove 'label' from the slot loop
      // eslint-disable-next-line
      let { label, ...otherSlots } = this.$slots;
      return otherSlots;
    },
  },
};
</script>
