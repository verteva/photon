#!/bin/bash
bold=$(tput bold)
normal=$(tput sgr0)
magenta=$(tput setaf 5)
printf "\033c"
read -p "${bold}${magenta}New component (capital camelcase):${normal} ${magenta}`echo $'\nie. MyNewComponent:'``echo $'\n> '`" componenetName
cd ./src/components

touch $componenetName.vue

cat > $componenetName.vue << ENDOFFILE
<template>
  <div>
    $componenetName
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: '$componenetName',
  components: {
  },
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
});
</script>
ENDOFFILE
# Storybook files
cd ../components
touch $componenetName.stories.js
cat > $componenetName.stories.js << ENDOFFILE
import $componenetName from '../components/$componenetName.vue';

export default {
  title: 'Example/$componenetName',
  component: $componenetName,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story 'template' are defined in the 'components' object
  components: { $componenetName },
  // The story's args need to be mapped into the template through the 'setup()' method
  setup() {
    return { args };
  },
  // And then the 'args' are bound to your component with 'v-bind="args"'
  template: '<$componenetName v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
ENDOFFILE
echo "${bold}$componenetName created :)"