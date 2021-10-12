import { mount, createLocalVue } from '@vue/test-utils';
import SkeletonLoader from './SkeletonLoader.vue';

describe('SkeletonLoader.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(SkeletonLoader, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };

  

});
