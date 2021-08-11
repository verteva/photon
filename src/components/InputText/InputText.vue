<template>
  <p-input :errors="errors">
    <slot
      v-if="$scopedSlots.label"
      name="label"
    >
      <p-label>{{ label }}</p-label>
    </slot>
    <p-label v-else>
      {{ label }}
    </p-label>

    <div :class="componentClassList">
      <div
        v-if="iconLeft"
        :class="[iconClassList]"
      >
        <p-icon
          :name="iconLeft"
          type="lg"
        />
      </div>
      <input
        :id="id"
        :class="baseClassList" 
        :placeholder="placeholder"
        :value="value"
        tabindex="0"
        :type="$attrs.type"
        @input="updateValue($event.target.value)"
        @focus="inFocus = true"
        @blur="inFocus = false"
      />
      <div
        v-if="iconRight"
        :class="[iconClassList, 'ph-right-1']"
      >
        <p-icon
          :name="iconRight"
          type="lg"
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
import { InputTextData, InputValueType } from './types';

export default Vue.extend({
  name: 'PInputText',

  components: {
    PIcon,
    PInput,
    PLabel,
  },
  
  props: {
    placeholder: {
      type: String as PropType<string>,
      default: '',
    },
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
      type: [Number, String] as PropType<InputValueType>,
      default: null,
    },
  },


  data():InputTextData {    
    return {
      inFocus: false,
      currencyOptions: {
        currency: null,
        precision: 0,
        valueRange: { min: 0 },
        allowNegative: false,
      },
      id: '',
      iconClassList: [
        'ph-absolute',
        'ph-top-0',
        'ph-w-12',
        'ph-h-full',
        'ph-flex',
        'ph-items-center',
        'ph-justify-center',
        'ph-transition',
        'ph-duration-200',
      ],
      baseClassList: [
        'ph-antialiased',
        'ph-w-full ',
        'ph-font-normal ',
        'ph-text-grey3 ',
        'ph-bg-white ',
        'ph-rounded-lg ',
        'ph-py-2 ph-px-5',
        'ph-border',
        'ph-border-grey5',
        'focus:ph-text-brand2',
        'focus:ph-border-brand2',
        'focus:ph-outline-none',
        'ph-border-solid',
        'ph-transition',
        this.iconLeft ? 'ph-pl-10 ph-left-1' : '',
        this.iconRight ? 'ph-pr-10' : '',
      ],
    } as InputTextData;
  },

  computed: {
    componentClassList():string[] {
      return [
        this.inFocus ? 'ph-text-brand2' : '',    
        'ph-relative',
      ];      
    },
  },

  mounted() {
    this.id = 'photon_input_' + this._uid;
  },


  methods: {
    updateValue(value:string){     
      this.$emit('input', value);
    },
  },
});
</script>