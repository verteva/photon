<template>
  <div>
    Autocomplete
    <!-- <vSelect :options="options" label="country" :reduce="country => country.code" /> -->
  </div>
</template>
<script lang='ts'>
// import vSelect from 'vue-select';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoComplete',
  components: {
    // vSelect
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
