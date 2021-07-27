#!/bin/bash
bold=$(tput bold)
normal=$(tput sgr0)
magenta=$(tput setaf 5)
printf "\033c"
read -p "${bold}${magenta}New component (capital camelcase):${normal} ${magenta}`echo $'\nie. MyNewComponent:'``echo $'\n> '`" componenetName

PS3='What section will this fall under?'
options=("Global" "Button & Tags" "Forms" "Components" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "$opt")
            section=$opt
            break
            ;;
    esac
done



cd ./src/stories

mkdir $componenetName
cd $componenetName
touch $componenetName.vue

cat > $componenetName.vue << ENDOFFILE
<template>
  <div>
    $componenetName
  </div>
</template>
<script lang='ts'>
import Vue, { PropType } from 'vue';

export default Vue.extend({
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
  watch: {

  },
  methods: {
  },
});
</script>
ENDOFFILE

# Export component and types file
touch types.ts
touch index.ts

cat > index.ts << ENDOFFILE
import P$componenetName from './$componenetName.vue';

export default P$componenetName;
ENDOFFILE

# Storybook files
touch $componenetName.stories.js
photonComponent="P${componenetName}"
props='$props'
cat > $componenetName.stories.js << ENDOFFILE
import $photonComponent from './$componenetName.vue';

export default {
  title: '$section/$componenetName',
  component: $photonComponent,
  argTypes: {
    // Configurable component options in SB UI...
  },
};

const Template = (args, { argTypes }) => ({
  components: { $photonComponent },
  props: Object.keys(argTypes),
  template: "<$photonComponent v-bind='$props' />",
});

export const $componenetName = Template.bind({});
$componenetName.args = {
  // Props to be passed....
};
ENDOFFILE
echo "${bold}$componenetName created under the $section section :)"