<template>
  <div>
    <vSelect 
      :options="options"
      label="country"
      :reduce="country => country.code"
    />
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import vSelect from 'vue-select';

Vue.component('vSelect', vSelect);

export default Vue.extend({
  name: 'PAutoComplete',

  components: {
    vSelect
  },

  props: {
  },

  data() {
    return {
      options: [{}],
    };
  },

  computed: {
  },

  methods: {
  },
});
</script>
