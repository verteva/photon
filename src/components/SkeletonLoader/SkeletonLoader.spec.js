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

  const assertStyleVarSetup = (wrapper, styleName, style) => {
    const skeleton = wrapper.findComponent({ ref: 'skeleton' });
    return expect(skeleton.attributes('style')).toContain('--'+styleName+': '+style);
  }

  it('check if skeleton loader with card type has rect element', () => {
    const wrapper = createWrapper({type:'card'});
    const ele = wrapper.find('.photon-skeleton-loader-rect');
    expect(ele.exists()).toBe(true);
  });

  it('check if skeleton loader with card type has lists element', () => {
    const listSize = 3;
    const wrapper = createWrapper({type:'card', listSize: listSize});
    const eles = wrapper.findAll('.photon-skeleton-loader-list');
    expect(eles.length).toBe(listSize);
  });

  it('check if skeleton loader with table type is setup correctly', () => {
    const wrapper = createWrapper({type:'table'});
    const ele = wrapper.find('.photon-skeleton-loader-table-body');
    expect(ele.exists()).toBe(true);
  });

  it('check if skeleton loader with lists type is setup correctly', () => {
    const wrapper = createWrapper({type:'lists'});
    const ele = wrapper.find('.photon-skeleton-loader-list');
    expect(ele.exists()).toBe(true);
  });  

  it('check if skeleton loader with card type has props:animation setup correctly', () => {
    const wrapper = createWrapper({type:'card'});
    expect(wrapper.vm.animation).toBe('loading');
  });

  it('check if skeleton loader with card type has props:bgColor setup correctly', () => {
    const wrapper = createWrapper({type:'card'});
    expect(wrapper.vm.bgColor).toBe('rgba(0, 0, 0, 0.12)');
  });  

  it('check background color variable is setup', () => {
    const bgColor = '#FFFFFF';
    const wrapper = createWrapper({ bgColor: bgColor });
    assertStyleVarSetup(wrapper, 'bgColor', bgColor);
  });

  it('check animation variable is setup', () => {
    const animation = 'loading';
    const wrapper = createWrapper({ animation: animation });
    assertStyleVarSetup(wrapper, 'animation', animation);
  });

  it('check border radius variable is setup', () => {
    const borderRadius = 12;
    const wrapper = createWrapper({ borderRadius: borderRadius });
    assertStyleVarSetup(wrapper, 'borderRadius', borderRadius);
  });

  it('check border radius variable is setup correctly when rounded is off', () => {
    const borderRadius = 12;
    const rounded = false;
    const wrapper = createWrapper({ rounded: rounded, borderRadius: borderRadius });
    assertStyleVarSetup(wrapper, 'borderRadius', '0px');
  });
});
