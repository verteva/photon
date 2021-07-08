import PAccordion from './Accordion.vue';
import '../../assets/scss/main.scss';

export default {
  title: 'Photon/Accordion',
  component: PAccordion,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#efefef' },
        { name: 'dark', value: '#444444' },
      ],
    },
  },
};

const UnstyledTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PAccordion v-bind="$props" section="Section 1" unstyled>
        <a href="#">Link A</a></br />
        <a href="#">Link B</a>
      </PAccordion>
      <PAccordion v-bind="$props" section="Section 2" unstyled>
        <a href="#">Link C</a></br />
        <a href="#">Link D</a></br />
        <a href="#">Link E</a></br />
        <a href="#">Link F</a>
      </PAccordion>
    </div>
  `,
});
export const Unstyled = UnstyledTemplate.bind({});


const SimpleTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
    <PAccordion v-bind="$props" section="Some heading" background-color="ph-bg-navyLight">
      Some content
    </PAccordion>
  `,
});
export const Simple = SimpleTemplate.bind({});


const NestedTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
  <PAccordion section="Level 1">
    <div class='ph-mb-5 ph-py-5 ph-px-10 ph-bg-brandSecondary'>
      Some static HTML content...
    </div>
    <PAccordion class="ph-mb-1" background-color="ph-bg-navyLight" section="Level 2a">
      Lorem ipsum...
    </PAccordion>
    <PAccordion background-color="ph-bg-greenSecondary" section="Level 2b">
      Hello world!
    </PAccordion>
  </PAccordion>
  `,
});
export const Nested = NestedTemplate.bind({});


const SingleFocusTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes), 
  template: `
    <div>
      <PAccordion
        class="ph-mb-2"
        v-bind="$props"
        single-focus
        :section="openId === 'a' ? 'Item 1 open' : '-'"
        @toggle="handleToggle"
        identifier="a"
        :open="openId === 'a'"
      >
        Item 1
      </PAccordion>
      <PAccordion
        class="ph-mb-2"
        v-bind="$props"
        single-focus
        :section="openId === 'b' ? 'Item 2 open' : '-'"
        @toggle="handleToggle"
        identifier="b"
        :open="openId === 'b'"
      >
        Item 2
      </PAccordion>
      <PAccordion
        v-bind="$props"
        single-focus
        :section="openId === 'c' ? 'Item 3 open' : '-'"
        @toggle="handleToggle"
        identifier="c"
        :open="openId === 'c'"
      >
        Item 3
      </PAccordion>
    </div>      
  `,
  data() {
    return {
      openId: null,
    };
  },
  methods: {
    handleToggle(id) {
      this.openId = id;
    }
  }
});
export const SingleFocus = SingleFocusTemplate.bind({});
