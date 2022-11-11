<template>
  <div class="autocomplete">
    <input
      v-model="search"
      type="text"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <ul v-show="isOpen" id="autocomplete-results" class="autocomplete-results">
      <li v-if="isLoading" class="loading">
        Loading results...
      </li>
      <li
        v-for="(result, i) in results"
        v-else
        :key="i"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
        @click="setResult(result)"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
export default Vue.extend({
  name: 'Autocomplete',
  props: {
    items: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => [],
    },
    isAsync: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      search: '',
      isLoading: false,
      arrowCounter: -1,
    };
  },
  watch: {
    items: function(value, oldValue) {
      if (value.length !== oldValue.length) {
        this.results = value;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    filterResults() {
      (this as any).results = this.items.filter(item => {
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
    onChange() {
      this.$emit('input', this.search);

      if (this.isAsync) {
        this.isLoading = true;
      } else {
        this.filterResults();
        this.isOpen = true;
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
  },
});
</script>

<style lang="scss" scoped>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
