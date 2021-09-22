<template>
  <div class="ph-fixed ph-inset-x-1/2	ph-top-10 ph-z-10">
    <div class="ph-toast--center ph-transform ph--translate-x-1/2 ph-min-w-72">
      <p-message
        :key="msg.if"
        v-for="msg in messageList"
        v-bind="msg"
        v-on="$listeners"
        class="ph-mb-2"
        :class="getTransitionClass(msg)"
        @close="remove(msg.id)"
        @transitionedOut="removeComplete(msg.id)"
      />
    </div>
  </div>
</template>
<script lang='ts'>
import Vue, { PropType } from 'vue';
import PMessage from '../Message';

export default Vue.extend({
  name: 'Toast',
  
  components: {
    PMessage,
  },

  watch: {
    messageList(newList) {      
      newList.forEach(msg => {        
        if (msg.autoclose && typeof msg.remove === 'undefined') {
          setTimeout(() => {
            const store = (this as any).$store;
            if (store) {
              store.dispatch('toast/removeToast', msg.id);
            }
          }, 2000);
        }
      })
    },
  },
  
  computed: {
    messageList():any {      
      const store = (this as any).$store;
      if (store) {
        return store.state.toast.queue;
      }
      return [];
    },
  },
  
  methods: {
    getTransitionClass(msg):string {
      console.log('-------------------');
      
      if (typeof msg.remove === 'undefined') {
        console.log(msg.id, 'fadeDown');
        return 'ph-animate-fadeDown';
      }
      if (msg.remove) {
        console.log(msg.id, 'fadeOut');
        return 'ph-animate-fadeOut';
      }

      return 'ph-animate-fadeDown';
    },

    remove(id) {      
      const store = (this as any).$store;
      if (store) {
        store.dispatch('toast/removeToast', id);
      }
    },
    
    removeComplete(id) {      
      const store = (this as any).$store;
      if (store) {
        store.dispatch('toast/destroyToast', id);
      }
    },
  },
});
</script>