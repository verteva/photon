<template>
  <div>
    Autocomplete
    <!-- <vSelect :options="options" label="country" :reduce="country => country.code" /> -->
  </div>
</template>
<script lang='ts'>
import { defineComponent } from '@vue/composition-api';

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
