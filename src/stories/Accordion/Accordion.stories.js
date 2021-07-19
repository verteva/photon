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



const NestedTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
  <PAccordion section="Level 1" :open="false">
    <div class='ph-mb-5 ph-py-5 ph-px-10'>
      Some static HTML content...
    </div>
    <PAccordion class="ph-mb-1" section="Level 2a">
      Lorem ipsum...
    </PAccordion>
    <PAccordion section="Level 2b">
      Hello world!
    </PAccordion>
  </PAccordion>
  `,
});

const UnstyledTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
    <div>
      <PAccordion v-bind="$props" section="Section 1" unstyled>
        Hello
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

const SimpleTemplate = (args, { argTypes }) => ({
  components: { PAccordion },
  props: Object.keys(argTypes),
  template: `
    <div>
      <button @click="addThings" class="ph-my-10">+ ADD</button> /
      <button @click="subThings" class="ph-my-10">- REMOVE</button> / 
      <button @click="openClose" class="ph-my-10">Toggle open</button>
      <PAccordion v-bind="$props" section="Some heading" :open="forceOpen">
        Some content
        <ul>
          <li v-for="thing in things" :key="thing">{{thing}}</li>
        </ul>
      </PAccordion>
    </div>
  `,
  data() {
    return {
      things: [],
      forceOpen: true,
    };
  },
  methods: {
    openClose() {
      this.forceOpen = !this.forceOpen;
    },
    addThings() {
      this.things.push(Math.random());
    },
    subThings() {
      this.things = this.things.slice(1, this.things.length);
    },
  },
});

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

export const Simple = SimpleTemplate.bind({});
export const Nested = NestedTemplate.bind({});
export const SingleFocus = SingleFocusTemplate.bind({});
export const Unstyled = UnstyledTemplate.bind({});
