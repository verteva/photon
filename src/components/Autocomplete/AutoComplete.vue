<template>
  <div class="ph-autocomplete">
    <div class="ph-autocomplete__field">
      <vSelect
        class="ph-autocomplete__v-select"
        :options="options"
        label="country"
        :reduce="country => country.code"
      />
    </div>
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

<style lang="postcss">
.vs__selected-options input {
  @apply ph-w-full;
  @apply ph-px-5;
  @apply ph-py-2;
  
}
</style>