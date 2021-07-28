<template>
  <div>
    <p-input :error="error" :fixed-errors="fixedErrors">
      <!-- Label -->
      <slot name="label">
        <p-label>{{ label }}</p-label>
      </slot> 
      <!-- Field -->
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
    </p-input>
  </div>
</template>

<script lang="ts">
import PIcon from '../Icon';
import PInput from '../Input';
import PLabel from '../Label';

// import { bgColor, ID_PREFIX } from '@/components/const';
export const ID_PREFIX = 'photon-';

export default {
  name: 'PInputText',
  components: {
    PIcon,
    PInput,
    PLabel,
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
    error: {
      type: String,
      default: '',
    },
    fixedErrors: {
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
        'ph-py-2 ph-px-5',
        'ph-border ',
        'ph-border-grey5',
        this.iconLeft ? 'ph-pl-10 ph-left-1' : '',
        this.iconRight ? 'ph-pr-10' : '',
      ],
    };
  },
};
</script>
