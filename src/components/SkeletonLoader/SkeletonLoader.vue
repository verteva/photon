<template>
  <div class="photon-skeleton-loader-container">
    <div 
      ref="skeleton"
      class="photon-skeleton-loader"
      :style="{
        '--width': width,
        '--height': height,
        '--borderRadius': (rounded? borderRadius+'px': '0px'),
        '--bgColor': bgColor,
        '--animation': animation,
        '--listHeight': listHeight,
        '--listMargin': listMargin,
        '--alignment': alignment,
        '--listPadding': listPadding,
      }"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div
        class="photon-skeleton-loader-main"
      >
      </div>
      <div
        class="photon-skeleton-loader-lists"
      >
        <div
          v-for="i in listSize"
          :key="i"
          class="photon-skeleton-loader-list"
        >
          <div class="photon-skeleton-loader-list-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'PSkeletonLoader',

  components: {
  },
  
  props: {
    bgColor: {
      type: String as PropType<string>,
      default: 'rgba(0, 0, 0, 0.12)',
    },
    listSize: {
      type: Number as PropType<number>,
      default: 1,
    },
    animation: {
      type: String as PropType<string>,
      default: 'loading',
    },
    alignment: {
      type: String as PropType<string>,
      default: 'center',
    },
    width: {
      type: String as PropType<string>,
      default: '200px',
    },
    height: {
      type: String as PropType<string>,
      default: '200px',
    },
    listHeight:{
      type: String as PropType<string>,
      default: '12px',
    },
    listPadding:{
      type: String as PropType<string>,
      default: '0 16px',
    },
    listMargin:{
      type: String as PropType<string>,
      default: '18px 0px',
    },
    type: {
      type: String as PropType<string>,
      default: 'rect',
    },
    rounded: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    borderRadius: {
      type: Number as PropType<number>,
      default: 12,
    }
  },
  computed: {
    typeList() {
      return this.type.split(",");
    }
  },
  mounted() {
    (this as any).id = 'skeleton_loader_' + (this as any)._uid;
  },
  methods: {
   
  },
});
</script>
<style lang="postcss" scoped>
.photon-skeleton-loader {
  overflow: hidden;
}
.photon-skeleton-loader-main {
  width: var(--width, 100px);
  height: var(--height, 200px);
  border-radius: var(--borderRadius, 12px);
  background-color: var(--bgColor, rgba(0, 0, 0, 0.12));
  position: relative;
}
.photon-skeleton-loader-main::after {
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

.photon-skeleton-loader-list {
  position: relative;
  margin: var(--listMargin, '18px 0px');
  padding: var(--listPadding, '18px 0px');
}
.photon-skeleton-loader-list-item {
  width: var(--width, 100px);
  height: var(--listHeight, 12px);
  border-radius: var(--borderRadius, 12px);
  background-color: var(--bgColor, rgba(0, 0, 0, 0.12));
}

.photon-skeleton-loader-list-item::after {
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
@-webkit-keyframes loading {
  100% {
    transform: translateX(100%);
  }
}

@keyframes loading {
  100% {
    transform: translateX(100%);
  }
}
</style>
