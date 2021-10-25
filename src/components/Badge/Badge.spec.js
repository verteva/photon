import { mount, createLocalVue } from '@vue/test-utils';
import Badge from '@/components/Badge/Badge.vue';

describe('InputText.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(Badge, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };

});
