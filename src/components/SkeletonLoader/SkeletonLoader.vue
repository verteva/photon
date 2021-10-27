<template>
  <div class="photon-skeleton-loader-container">
    <div
      ref="skeleton"
      class="photon-skeleton-loader"
      :style="{
        '--width': width,
        '--height': height,
        '--borderRadius': rounded ? borderRadius + 'px' : '0px',
        '--bgColor': bgColor,
        '--animation': animation,
        '--listHeight': listHeight,
        '--listItemHeight': listItemHeight,
        '--listMargin': listMargin,
        '--alignment': alignment,
        '--listPadding': listPadding,
        '--colWidth': colWidth,
        '--colRadius': colRadius,
        '--dividerHeight': dividerHeight,
        '--tablePadding': tablePadding
      }"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div v-if="type === 'image'">
        <div class="photon-skeleton-loader-rect"></div>
      </div>
      <div v-if="type === 'card'">
        <div class="photon-skeleton-loader-rect"></div>
        <div class="photon-skeleton-loader-lists">
          <div
            v-for="i in listSize"
            :key="i"
            class="photon-skeleton-loader-list"
          >
            <div class="photon-skeleton-loader-list-item"></div>
          </div>
        </div>
      </div>
      <div v-else-if="type === 'lists'">
        <div class="photon-skeleton-loader-lists">
          <div
            v-for="i in listSize"
            :key="i"
            class="photon-skeleton-loader-list"
          >
            <div class="photon-skeleton-loader-list-item"></div>
          </div>
        </div>
      </div>
      <div v-else-if="type === 'table'">
        <div class="photon-skeleton-loader-table-body">
          <div
            v-for="row in rows"
            :key="row"
            class="photon-skeleton-loader-table-row ph-hidden sm:ph-flex"
          >
            <div class="photon-skeleton-loader-table-row-divider">
              <div
                v-for="col in cols"
                :key="row + '|' + col"
                class="photon-skeleton-loader-table-col"
              ></div>
            </div>
            <div class="photon-skeleton-loader-table-divider"></div>
          </div>
          <div
            v-for="row in mobileRows"
            :key="`mobile-row-${row}`"
            class="photon-skeleton-loader-table-row ph-flex sm:ph-hidden"
          >
            <div class="photon-skeleton-loader-table-row-divider">
              <div
                v-for="col in mobileCols"
                :key="`mobile-col-${col}`"
                class="photon-skeleton-loader-table-col"
              ></div>
            </div>
            <div class="photon-skeleton-loader-table-divider"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'PSkeletonLoader',

  components: {},

  props: {
    bgColor: {
      type: String as PropType<string>,
      default: 'rgba(0, 0, 0, 0.12)'
    },
    listSize: {
      type: Number as PropType<number>,
      default: 1
    },
    animation: {
      type: String as PropType<string>,
      default: 'loading'
    },
    alignment: {
      type: String as PropType<string>,
      default: 'center'
    },
    width: {
      type: String as PropType<string>,
      default: '200px'
    },
    height: {
      type: String as PropType<string>,
      default: '200px'
    },
    listHeight: {
      type: String as PropType<string>,
      default: '48px'
    },
    listItemHeight: {
      type: String as PropType<string>,
      default: '12px'
    },
    listPadding: {
      type: String as PropType<string>,
      default: '0px 0px'
    },
    listMargin: {
      type: String as PropType<string>,
      default: '18px 0px'
    },
    type: {
      type: String as PropType<string>,
      default: 'table'
    },
    rounded: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    borderRadius: {
      type: Number as PropType<number>,
      default: 12
    },
    mobileRows: {
      type: Number as PropType<number>,
      default: 3
    },
    mobileCols: {
      type: Number as PropType<number>,
      default: 3
    },
    rows: {
      type: Number as PropType<number>,
      default: 5
    },
    cols: {
      type: Number as PropType<number>,
      default: 6
    },
    tablePadding: {
      type: String as PropType<string>,
      default: '16px 16px 0px 16px'
    },
    colWidth: {
      type: String as PropType<string>,
      default: '88px'
    },
    colRadius: {
      type: String as PropType<string>,
      default: '6px'
    },
    dividerHeight: {
      type: String as PropType<string>,
      default: '2px'
    },
    dividerRadius: {
      type: String as PropType<string>,
      default: '1px'
    }
  },
  computed: {
    typeList() {
      return this.type.split(',');
    }
  },
  mounted() {
    (this as any).id = 'skeleton_loader_' + (this as any)._uid;
  },
  methods: {}
});
</script>
<style lang="postcss" scoped>
.photon-skeleton-loader {
  @apply ph-overflow-hidden;
}
.photon-skeleton-loader-rect {
  @apply ph-relative;
  width: var(--width, 100px);
  height: var(--height, 200px);
  border-radius: var(--borderRadius, 12px);
  background-color: var(--bgColor, rgba(0, 0, 0, 0.12));
}

.photon-skeleton-loader-list {
  @apply ph-relative;
  @apply ph-flex;
  height: var(--listHeight, 48px);
  padding: var(--listPadding, '0px 0px');
}
.photon-skeleton-loader-list-item {
  @apply ph-m-auto;
  width: var(--width, 100px);
  height: var(--listItemHeight, 12px);
  border-radius: var(--borderRadius, 12px);
  background-color: var(--bgColor, rgba(0, 0, 0, 0.12));
}

.photon-skeleton-loader-table-body {
  padding: var(--tablePadding, 0px);
}

.photon-skeleton-loader-table-row {
  @apply ph-flex;
  @apply ph-flex-col;
  width: var(--width, 100%);
}

.photon-skeleton-loader-table-row-divider {
  @apply ph-flex;
  @apply ph-flex-row;
  @apply ph-justify-between;
}

.photon-skeleton-loader-table-col {
  @apply ph-items-center;
  @apply ph-relative;
  max-width: 30%;
  width: var(--colWidth, 88px);
  height: var(--listItemHeight, 12px);
  line-height: 0px;
  border-radius: var(--colRadius, 6px);
  background-color: var(--bgColor, rgba(0, 0, 0, 0.12));
  margin: var(--listMargin, '18px 0px');
  padding: var(--listPadding, '0px 0px');
}
.photon-skeleton-loader-table-divider {
  @apply ph-relative;
  width: var(--width, 100%);
  height: var(--dividerHeight, 2px);
  border-radius: var(--dividerRadius, 1px);
  background-color: var(--bgColor, rgba(0, 0, 0, 0.12));
}

.photon-skeleton-loader-rect::after,
.photon-skeleton-loader-table-divider::after,
.photon-skeleton-loader-table-col::after,
.photon-skeleton-loader-list-item::after {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );
  -webkit-animation: loading 1.5s infinite;
  animation: loading 1.5s infinite;
  content: '';
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
