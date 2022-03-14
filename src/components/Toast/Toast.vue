<template>
  <div :class="classList">
    <div :class="messagesClassList">
      <p-message
        v-for="msg in messageList"
        :key="msg.if"
        v-bind="msg"
        class="ph-mb-2"
        :hide-close="msg.hideClose"
        :class="getTransitionClass(msg)"
        v-on="$listeners"
        @close="remove(msg.id)"
        @transitionedOut="removeComplete(msg.id)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import PMessage from '../Message';

export default Vue.extend({
  name: 'Toast',

  components: {
    PMessage,
  },

  props: {
    limit: {
      type: Number as PropType<number>,
      default: 3,
    },

    yPos: {
      type: String as PropType<string>,
      default: 'top',
    },

    xPos: {
      type: String as PropType<string>,
      default: 'center',
    },
  },

  computed: {
    classList(): string[] {
      return [
        'ph-fixed',
        'ph-z-10',
        'ph-w-full',
        'ph-flex',
        'ph-flex-col',
        'ph-pointer-events-none',
        ((this as any).yPos === 'top' && 'ph-top-10') || '',
        ((this as any).yPos === 'bottom' && 'ph-bottom-10') || '',
        ((this as any).xPos === 'left' && 'ph-items-start') || '',
        ((this as any).xPos === 'right' && 'ph-items-end') || '',
        ((this as any).xPos === 'center' && 'ph-items-center') || '',
      ];
    },

    messagesClassList(): string[] {
      return ['ph-transform', 'ph-pointer-events-auto'];
    },

    messageList(): any {
      const store = (this as any).$store;
      if (store) {
        if ((this as any).limit) {
          store.state.toast.queue.forEach((toast, i) => {
            if (i > (this as any).limit - 1) {
              store.dispatch('toast/destroyToast', toast.id);
            }
          });
        }
        return store.state.toast.queue;
      }
      return [];
    },
  },

  watch: {
    messageList() {
      this.messageList.forEach(msg => {
        if (msg.autoclose && typeof msg.remove === 'undefined') {
          const { id } = msg;
          setTimeout(() => {
            const store = (this as any).$store;
            if (store) {
              store.dispatch('toast/removeToast', id);
            }
          }, msg.delay || 4000);
        }
      });
    },
  },

  methods: {
    getTransitionClass(msg): string {
      if (typeof msg.remove === 'undefined') {
        return 'ph-animate-fadeDown';
      }
      if (msg.remove) {
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
