<template>
  <div
    :id="id"
    class="ph-overflow-hidden"
    :class="[
      initialRender ? 'ph-relative ph-visible' : 'ph-invisible',
      unstyled ? '' : 'ph-border ph-rounded-xl ph-border-greyLight1' ,
      disabled ? 'ph-opacity-50' : 'ph-opacity-100',
      backgroundColor,
    ]"
    :style="{ height }"
  >
    <button
      :disabled="disabled"
      class="acc-header ph-flex ph-items-center ph-uppercase"
      :class="[
        unstyled ? '' : 'ph-p-6',
        ((fullWidth || !unstyled) && 'ph-w-full') || '',
      ]"
      @click="toggleOpen"
    >
      {{ section }} {{ backgroundColor }}
      <ChevronRight
        v-if="openArrows"
        width="12px"
        height="7px"
        class="ph-ml-auto ph-transition-all"
        :class="(expanded && 'ph-transform ph-rotate-180') || ''"
      />
    </button>
    <div class="ph-flex ph-relative">
      <hr
        v-if="!unstyled" 
        class="ph-absolute ph-top-0 ph-left-0 ph-right-0 ph-mx-6" 
      />
      <div
        v-if="renders"
        class="acc-content ph-w-full"
        :class="[backgroundColor, unstyled ? '' : 'ph-p-6']"
      >
        <slot />
      </div>
    </div>
  </div> 
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ChevronRight from '../Icon/ChevronRight';
import { v4 as uuidv4 } from 'uuid';
import { gsap } from 'gsap';
import {
  AccordionElementHeights,
  AccordionData,
} from "./types";

const isType = (_Type:any, _default:any) => {
  const _type = _Type();  
  return {
    type: _Type as PropType<typeof _type>,
    default: _default,
  }
};


export default Vue.extend({
  name: 'PAccordion',

  components: {
    ChevronRight,
  },

  props: {
    singleFocus: isType(Boolean, false),
    openArrows: isType(Boolean, true),
    unstyled: isType(Boolean, false),
    fullWidth: isType(Boolean, false),
    open: isType(Boolean, false),
    disabled: isType(Boolean, false),
    section: isType(String, ''),
    backgroundColor: {
      type: String as PropType<string>,
      default: 'ph-bg-greyLight',
    },
    identifier: {
      type: [String, Number],
      default: null,
    },
  },

  data():AccordionData {
    const minHeight: number[] | null = null;

    return {
      renders: true,
      height: 'auto',
      minHeight,
      maxHeight: null,
      expanded: true,
      initialRender: false,
      id: this.identifier || uuidv4(),
    };
  },

  mounted():void {
    const { totalHeight, headerHeight } = this.getNode();
    this.maxHeight = totalHeight;
    this.minHeight = headerHeight;

    // If this mounts collapsed set height to 0 and turn off render of content
    if (!this.open) {
      this.height = this.minHeight;
      this.renders = false;
    }

    this.expanded = this.open;
    this.initialRender = true;
  },

  methods: {
    toggleOpen():void {
      /*
        If singleFocus is true, there should be multiple
        and only one is open at a time. Opening one will
        close the others. But this requires parent component
        to track which identifier is the open one.
      */
      if (this.singleFocus) {
        if (this.open) {
          this.$emit('toggle', null);
        } else {
          this.$emit('toggle', this.id);
        }
      } else {
        this.expanded = !this.expanded;
      }
    },
    getHeight():string {
      if (this.expanded) {
        return `${this.maxHeight}px`;
      }

      return this.minHeight;
    },
    getNode():AccordionElementHeights {
      const accordion = document.getElementById(this.id);
      const headerHeight = accordion.querySelector('.acc-header') &&
        Math.round(
          accordion.querySelector('.acc-header').getBoundingClientRect().height
        );
      const contentHeight =
        accordion.querySelector('.acc-content') &&
        Math.round(
          accordion.querySelector('.acc-content').getBoundingClientRect().height
        );
      const totalHeight = Math.round(accordion.getBoundingClientRect().height);

      return {
        accordion,
        headerHeight,
        contentHeight,
        totalHeight,
      };
    },
    switchState() {
      // Capture the height before close if its open
      const { accordion, totalHeight, contentHeight } = this.getNode();

      if (this.expanded) {
        this.maxHeight = contentHeight + this.minHeight;
      }

      if (!this.expanded) {
        this.maxHeight = totalHeight;
      }

      // Transition open/closed    
      gsap.to(accordion, {
        height: this.getHeight(),
        duration: 0.3,
        ease: 'quad.out',
        onComplete: () => {
          // Set height to auto at the end to allow for dynamic content adjustments
          if (this.expanded) {
            accordion.style.height = 'auto';
          }
          if (!this.expanded) {
            this.renders = false;
          }
        },
      });
    },
  },

  computed: {
    openProp() {
      return this.open;
    },
  },
  
  watch: {
    expanded() {
      if (this.expanded) {
        this.renders = true;
        this.$nextTick(() => {
          this.switchState();
        });
      }

      this.switchState();
    },
    openProp(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.expanded = newVal;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
hr {
  border: none !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
}
</style>