<template>
  <form
    ref="pform"
    :novalidate="novalidate"
    v-bind="$attrs"
    v-on="$listeners"
    @submit.prevent="onSubmit"
  > 
    <slot />
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FormData } from './types';

export default Vue.extend({
  name: 'PForm',

  components: {

  },
  
  props: {
    novalidate: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    }
  },
  data():FormData {    
    return {
      id: '',
      disabledAll: false,
    } as FormData;
  },
  watch:{
    disabledAll:{
      handler: 'disableAll',
    },
    disabled:{
      handler(){
        this.disabledAll = this.disabled;
      }
    }
  },
  mounted(){
    this.disabledAll = this.disabled;
  },
  methods: {
    disableAll(val: boolean) {
      ((this.$refs.pform as HTMLElement).getElementsByTagName('input') as any as Array<HTMLElement>).forEach((item)=>{
        if(val){
          item.setAttribute('disabled', "");
        }else{
          item.removeAttribute('disabled');
        }
      });
    },
    onSubmit(){
      this.$emit("submit");
    }
  },
});
</script>
<style lang="postcss">

</style>
