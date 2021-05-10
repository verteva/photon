<template>
  <div>
    <vSelect :options="options" label="country" :reduce="country => country.code" />
  </div>
</template>
<script lang='ts'>
import vSelect from 'vue-select';
import { defineComponent } from 'vue';

console.log(vSelect);

export default defineComponent({
  name: 'AutoComplete',
  components: {
    vSelect
  },
  props: {
  },
  data() {
    return {
      options: [{country: 'Canada', code: 'CA'},],
    };
  },
  computed: {
  },
  methods: {
  },
});
</script>
