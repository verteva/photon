<template>
  <div>
    <svg :width="width" :height="height" viewBox="0 0 14 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Experiments</title>
      <g id="Experiments" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="&lt;-06_2_Desktop-&gt;-FINANCIALS---Employment" transform="translate(-771.000000, -107.000000)">
          <rect id="Mask" fill="url(#linearGradient-1)" x="0" y="0" width="1440" height="1395"></rect>
          
          <rect id="Rectangle" x="771" y="107" width="14" height="10"></rect>
          <polyline id="Path-14" :stroke="color" stroke-linecap="round" stroke-linejoin="round" points="772 111.887939 776.128906 116.016846 784.145752 108"></polyline>
        </g>
      </g>
    </svg>
  </div>
</template>


<script lang="ts">
import Vue, { PropType } from 'vue';


export default Vue.extend({
  name: 'Checkmark',

  props: {
    height: {
      type: String as PropType<string>,
      default: '100%',
    },  
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    color: {
      type: String as PropType<string>,
      default: '#4CB050',
    },
  },
});
</script>