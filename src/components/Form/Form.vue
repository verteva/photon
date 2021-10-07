<template>
  <form
    ref="pform"
    v-bind="$attrs"
    :novalidate="novalidate"
    v-on="$listeners"
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
    }
  },
});
</script>
<style lang="postcss">

</style>
