<template>
  <p-input :errors="errors">
    <!-- DOES NOT WORK WHEN NPM LINKED INTO ONBOARDING -->
    <slot name="label">
      <p-label>{{ label }}</p-label>
    </slot> 

    <!-- WORKS WHEN NPM LINKED INTO ONBOARDING -->
    <!-- <slot
      v-if="$scopedSlots.label"
      name="label"
    >
      <p-label>{{ label }}</p-label>
    </slot>
    <p-label v-else>
      {{ label }}
    </p-label> -->

    <div class="ph-relative">
      <div
        v-if="iconLeft"
        :class="[iconClassList]"
      >
        <p-icon
          :name="iconLeft"
          type="med"
        />
      </div>
      <input
        v-model="innerValue"
        :class="baseClassList" 
        v-bind="$attrs"
        type="text"
        tabindex="0"
      />
      <div
        v-if="iconRight"
        :class="[iconClassList, 'ph-right-1']"
      >
        <p-icon
          :name="iconRight"
          type="med"
        />
      </div>
    </div>
  </p-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import PInput from '../Input';
import PLabel from '../Label';

export default Vue.extend({
  name: 'PInputText',

  components: {
    PIcon,
    PInput,
    PLabel,
  },

  props: {
    iconLeft: {
      type: String as PropType<string>,
      default: '',
    },
    iconRight: {
      type: String as PropType<string>,
      default: '',
    },
    label: {
      type: String as PropType<string>,
      default: '',
    },
    errors: {
      type: Array as PropType<string[]>,
      default: ():[] => [],
    },
    value: {
      type: String as PropType<string>,
      default: '',
    },
  },

  data() {    
    return {
      bgColor: '',
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
        'ph-border-solid',
        this.iconLeft ? 'ph-pl-10 ph-left-1' : '',
        this.iconRight ? 'ph-pr-10' : '',
      ],
    };
  },
  computed: {
    innerValue: {
      get():string {
        return this.value;
      },
      set(val:string) {        
        this.$emit('input', val);
      },
    },
  },
});
</script>
