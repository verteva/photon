import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './library';

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

// Global mixin for converting Figma font weights for FA icons to FA family classes
Vue.mixin({
  methods: {
    fontAwesomeWeightToFamily: function (font_weight) {
      let $iconFamily = '';
      switch (font_weight.toLowerCase()) {
        case 'regular':
        case 'far':
          $iconFamily = 'far';
          break;
        case 'solid':
        case 'fas':
          $iconFamily = 'fas';
          break;
        case 'light':
        case 'fal':
          $iconFamily = 'fal';
          break;
        case 'thin':
        case 'fat':
          $iconFamily = 'fat';
          break;
        case 'brand':
        case 'fab':
          $iconFamily = 'fab';
          break;
        case 'duotone':
        case 'fad':
          $iconFamily = 'fad';
          break;
      }
      return $iconFamily;
    },
  },
});
