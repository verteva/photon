<template>
  <div class="ph-flex ph-items-center ph-w-80">    
    <p-input-text
      placeholder="DD"
      :value="day"
      simple
      centered
      number
      maxlength="2"
      @input="updateDay"
    />

    <div class="ph-mx-1 ph-text-grey3">/</div>
    
    <p-input-text
      placeholder="MM"
      :value="month"
      simple
      centered
      number
      maxlength="2"
      @input="updateMonth"
    />
    
    <div class="ph-mx-1 ph-text-grey3">/</div>
    
    <p-input-text
      placeholder="YYYY"
      :value="year"
      simple
      centered
      number
      maxlength="4"
      @input="updateYear"
    />
  </div>
</template>
<script lang='ts'>
import Vue, { PropType } from 'vue';
import PInputText from '../InputText';

export default Vue.extend({
  name: 'PDateInput',

  components: {
    PInputText,
  },

  props: {
    value: {
      type: [Number, String] as PropType<number | string>,
      default: null,
    },
  },

  data() {
    const [year, month, day] = (this as any).value.split('-');
    return {
      day,
      month,
      year,
    };
  },

  computed: {
    innerValue: {
      get():any {
        return (this as any).value;
      },
      set(date) {        
        (this as any).$emit('input', date)
      },
    },
  },

  watch: {
    day() {
      (this as any).setDate();
    },
    month() {
      (this as any).setDate();
    },
    year() {
      (this as any).setDate();
    },
  },

  methods: {
    setDate() {
      (this as any).innerValue = `${(this as any).year}-${(this as any).month}-${(this as any).day}`;
    },
    updateDay(e) {    
      (this as any).day = e.target.value;
    },
    updateMonth(e) {
      (this as any).month = e.target.value;
    },
    updateYear(e) {
      (this as any).year = e.target.value;
    },
  }
});
</script>
