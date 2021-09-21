<template>
  <div :class="classList">
      <p-icon :name="typeStyle.icon" type="lg" :class="iconClassList" />
      <div class="ph-flex ph-flex-col ph-flex-1">
        <div class="ph-font-bold ph-pt-1">
          {{ title }}
        </div>
        <div
          v-if="description"
          class="ph-mt-2 ph-mb-4 ph-leading-5"
        >
          <div>
            {{ description }}
          </div>
          <p-button
            v-if="$listeners.click && callToAction"
            @click="$emit('click')"
            class="ph-mt-4"
          >
            {{ callToAction }}
          </p-button>
        </div>
      </div>
      <p-icon 
        name="Cross" 
        type="lg" 
        :class="iconClassList" 
        @click="$emit('close')" 
      />
    </div>
</template>
<script lang='ts'>
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import PButton from '../Button';
import {
  ToastStyleType,
  ToastSuccess,
  ToastInfo,
  ToastError,
  ToastAlert,
  ToastType,
} from './types';

export default Vue.extend({
  name: 'Toast',
  
  components: {
    PIcon,
    PButton,
  },

  props: {
    type: {
      type: String as PropType<ToastType>,
      default: 'success',
      validator(value: string): boolean {       
        return [ToastSuccess, ToastInfo, ToastError, ToastAlert].indexOf(value) !== -1;
      },
    },

    title: {
      type: String as PropType<string>,
      default: '',
    },
    
    description: {
      type: String as PropType<string>,
      default: '',
    },
    
    callToAction: {
      type: String as PropType<string>,
      default: '',
    },
  },
  
  data() {
    return {
    };
  },
  
  computed: {
    typeStyle():ToastStyleType {
      switch(this.type) {
        case ToastSuccess: 
        default:
          return {
            icon: 'Success',
            classes: [
              'ph-border-alert3',
              'ph-bg-alert-light3',
            ],
          }
         
        case ToastInfo: 
          return {
            icon: 'Info',
            classes: [
              'ph-border-brand2',
              'ph-bg-brand-light2',
            ],
          }
        
        case ToastError: 
          return {
            icon: 'Error',
            classes: [
              'ph-border-alert2',
              'ph-bg-alert-light2',
            ],
          }
        
        case ToastAlert: 
          return {
            icon: 'Alert',
            classes: [
              'ph-border-alert1',
              'ph-bg-alert-light1',
            ],
          }         
      };
    },

    iconClassList():string[] {
      let iconColor = 'inherit';
      
      if (this.type === ToastSuccess) {
        iconColor = 'ph-text-alert3';
      }
      
      if (this.type === ToastInfo) {
        iconColor = 'ph-text-brand2';
      }
      
      if (this.type === ToastError) {
        iconColor = 'ph-text-alert2';
      }
      
      if (this.type === ToastAlert) {
        iconColor = 'ph-text-alert1';
      }
       
      return [
        'ph-mr-4',
        'ph-cursor-pointer',
        iconColor,
      ]
    },

    classList():string[] {
      return [
        'ph-max-w-3xl',
        'ph-flex',
        'ph-items-start',
        'ph-text-grey1',
        'ph-p-4',
        'ph-rounded-lg',
        'ph-border',
        ...this.typeStyle.classes,
      ];
    }
  },
  watch: {

  },
  methods: {
  },
});
</script>
