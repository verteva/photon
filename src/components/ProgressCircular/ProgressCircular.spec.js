import { mount, createLocalVue } from '@vue/test-utils';
import ProgressCircular from './ProgressCircular.vue';

describe('SkeletonLoader.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(ProgressCircular, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };

  const assertStyleVarSetup = (wrapper, styleName, style) => {
    const circular = wrapper.findComponent({ ref: 'circular' });
    return expect(circular.attributes('style')).toContain('--'+styleName+': '+style);
  }

  it('check if prop:indeterminate is setup correctly', () => {
    const indeterminate = true
    const wrapper = createWrapper({ indeterminate: indeterminate});
    const circular = wrapper.findComponent({ ref: 'circular' });
    expect(circular.attributes('class')).toContain('p-progress-circular--indeterminate');
  });  

  it('check if prop:size is setup correctly', () => {
    const size = '25px';
    const wrapper = createWrapper({ size });
    expect(wrapper.vm.size).toBe(size);
  });  

  it('check if width variable is setup', () => {
    const size = '20px';
    const wrapper = createWrapper({ size });
    assertStyleVarSetup(wrapper, 'width', size);
  });

  it('check if height variable is setup', () => {
    const size = '20px';
    const wrapper = createWrapper({ size });
    assertStyleVarSetup(wrapper, 'width', size);
  });
});
