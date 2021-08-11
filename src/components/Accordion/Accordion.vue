<template>
  <div
    :id="id"
    :class="classList"
    :style="{ height }"
  >
    <button
      :disabled="disabled"
      class="acc-header ph-flex ph-items-center ph-uppercase ph-text-grey3 ph-font-normal"
      :class="[
        unstyled ? '' : 'ph-py-6 ph-px-8',
        (fullWidth && 'ph-w-full') || '',
      ]"
      @click="toggleOpen"
    >
      {{ section }} 
      <p-icon
        v-if="complete"
        name="Checkmark"
        type="xs"
        class="ph-ml-4 ph-text-alert3"
      />
      <p-icon
        v-if="openArrows"
        name="ChevronDown"
        type="xs"
        class="ph-ml-auto ph-transition-all"
        :class="(innerValue && 'ph-transform ph-rotate-180') || ''"
      />
    </button>
    <div class="ph-flex ph-relative">
      <hr
        v-if="!unstyled" 
        class="ph-absolute ph-top-0 ph-left-0 ph-right-0 ph-mx-8" 
      />
      <div
        class="acc-content ph-w-full"
        :class="[unstyled ? '' : 'ph-py-6 ph-px-8']"
      >
        <slot />
      </div>
    </div>
  </div> 
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PIcon from '../Icon';
import { v4 as uuidv4 } from 'uuid';
import {
  AccordionElementHeights,
  AccordionData,
} from "./types";

export default Vue.extend({
  name: 'PAccordion',

  components: {
    PIcon,
  },

  props: {
    singleFocus: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    openArrows: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    unstyled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    fullWidth: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    complete: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    open: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    value: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    section: {
      type: String as PropType<string>,
      default: false,
    },
    backgroundColor: {
      type: String as PropType<string>,
      default: 'ph-bg-grey6',
    },
    identifier: {
      type: [String, Number],
      default: null,
    },
  },

  data():AccordionData {   
    return {
      baseClassList: [
        'ph-overflow-hidden',
        'ph-ease-out',
        'ph-transition-height',
      ],
      height: 'auto',
      minHeight: null,
      maxHeight: null,
      expanded: Boolean(this.value || this.open),
      initialRender: false,
      id: this.identifier || uuidv4(),
    };
  },

  computed: {
    innerValue: {
      get():boolean {
        return this.expanded;
      },
    },
    classList():string[] {
      const a: string[] = [
        ...this.baseClassList,
        this.unstyled ? '' : 'ph-border ph-rounded-xl ph-border-grey5' ,
        this.disabled ? 'ph-opacity-50' : 'ph-opacity-100',
        this.unstyled ? '' : this.backgroundColor,
        this.initialRender ? 'ph-duration-1 ph-invisible' : 'ph-duration-300 ph-visible',
      ];
      
      return a;
    },
  },

  watch: {
    value(val) {      
      this.expanded = val;
    },
    open(val) {      
      this.expanded = val;
    },
    expanded() {
      if (this.expanded) {
        this.$nextTick(() => {
          this.switchState();
        });
      }
      else {
        this.switchState();
      }

      this.$emit('input', this.expanded);
    },
  },

  mounted():void {       
    const { accordion, totalHeight, headerHeight } = this.getNode();
    accordion.addEventListener('transitionend', this.onTransitionEnd);

    this.maxHeight = totalHeight;
    this.minHeight = headerHeight;

    if (this.expanded) {
      this.initialRender = false;
    }
    else {
      this.height = `${this.minHeight}px`;
    }
  },

  beforeDestroy() {
    const { accordion } = this.getNode();
    if (accordion) {
      accordion.removeEventListener('transitionend', this.onTransitionEnd);
    }
  },

  methods: {
    onTransitionEnd(e:TransitionEvent) {
      /*
        TransitionEvent fires for each property that
        is transitioning so check the event is fired
        on the height, so we can set to auto to allow
        for dynamic content adjustments.
      */
      if (e.propertyName === 'height') {
        const { accordion } = this.getNode();

        if (this.expanded) {
          accordion.style.height = 'auto';         
        }

        if (this.initialRender) this.initialRender = false;
      }
    },
    toggleOpen(e:MouseEvent):void {
      e.preventDefault();
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

      return `${this.minHeight}px`;
    },
    getNode():AccordionElementHeights {
      const accordion = document.getElementById(this.id);
      const header = accordion && accordion.querySelector('.acc-header');
      const content = accordion && accordion.querySelector('.acc-content');

      const headerHeight = header && Math.round(header.getBoundingClientRect().height);
      const contentHeight = content &&  Math.round(content.getBoundingClientRect().height);
      const totalHeight = accordion && Math.round(accordion.getBoundingClientRect().height);

      return {
        accordion: accordion as HTMLElement,
        content: content as HTMLElement,
        headerHeight: headerHeight as number,
        contentHeight: contentHeight as number,
        totalHeight: totalHeight as number,
      };
    },
    switchState() {     
      // Capture the height before close if its open
      const { accordion, totalHeight, contentHeight } = this.getNode();
      
      if (this.expanded && this.minHeight) {
        this.maxHeight = contentHeight + this.minHeight;       
        this.toggleFocusability('0');
        accordion.style.height = `${this.maxHeight}px`;
      }
     
      if (!this.expanded) {        
        this.maxHeight = totalHeight;
        accordion.style.height = `${this.maxHeight}px`;
        this.$nextTick(() => {
          accordion.style.height = `${this.minHeight}px`;          
        });
        this.toggleFocusability('-1');
      }
    },
    toggleFocusability(index:string) {
      const { content } = this.getNode();
      const focussableElements = [
        'a',
        'area', 
        'button', 
        'input', 
        'object', 
        'select',
        'textarea',
      ];

      focussableElements.forEach(type => {
        content.querySelectorAll(type)
          .forEach(el => {
            el.setAttribute('tabindex', index)
          });
      });      
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