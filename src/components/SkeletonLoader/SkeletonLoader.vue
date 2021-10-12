<template>
  <content-placeholders :rounded="true" :animated="false">
    <content-placeholders-img />
    <content-placeholders-heading />
  </content-placeholders>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import VueContentPlaceholders from 'vue-content-placeholders'
Vue.use(VueContentPlaceholders)

export default Vue.extend({
  name: 'PSkeletonLoader',

  components: {
  },
  
  props: {
    borderRadius: {
      type: Number as PropType<number>,
      default: 12,
    }
  },
  computed: {

  },
  mounted() {
    (this as any).id = 'skeleton_loader_' + (this as any)._uid;
  },
  methods: {
   
  },
});
</script>
<style lang="postcss">
.vue-content-placeholders-img::after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    -webkit-animation: loading 1.5s infinite;
    animation: loading 1.5s infinite;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
}
</style>
