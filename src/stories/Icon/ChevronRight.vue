<template>
  <div>
    <svg :width="width" :height="height" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Experiments" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="&lt;-06_2_Desktop-&gt;-FINANCIALS---Employment" transform="translate(-1097.000000, -422.000000)">
          <rect id="Mask" fill="url(#linearGradient-1)" x="0" y="0" width="1440" height="1395"></rect>
          
          <rect id="Rectangle" x="1097" y="422" width="12" height="7"></rect>
          <polyline id="Path-13" :stroke="color" stroke-linecap="round" stroke-linejoin="round" points="1098 423 1103 428 1108 423"></polyline>
        </g>
      </g>
    </svg>
  </div>
</template>


<script lang="ts">
import Vue, { PropType } from 'vue';


export default Vue.extend({
  name: 'ChevronRight',

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
      default: '#323232',
    },
  },
});
</script>