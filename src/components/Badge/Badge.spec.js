import { mount, createLocalVue } from '@vue/test-utils';
import Badge from '@/components/Badge/Badge.vue';

describe('Badge.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(Badge, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
    });
  };

  const assertStyleVarSetup = (wrapper, styleName, style) => {
    const badge = wrapper.findComponent({ ref: 'badgeWrapper' });
    return expect(badge.attributes('style')).toContain(
      '--' + styleName + ': ' + style
    );
  };

  it('check init prop:show should be false', () => {
    const wrapper = createWrapper();
    expect(wrapper.vm.show).toBe(false);
  });

  it('check init prop:overlap should be false', () => {
    const wrapper = createWrapper();
    expect(wrapper.vm.overlap).toBe(false);
  });

  it('check init prop:badgeTextSize should be xs', () => {
    const wrapper = createWrapper();
    expect(wrapper.vm.badgeTextSize).toBe('xs');
  });

  it('check badge position when inline is false should be absolute', () => {
    const inline = false;
    const wrapper = createWrapper({ inline });
    assertStyleVarSetup(wrapper, 'position', 'absolute');
  });

  it('check badge position when inline is true should be relative', () => {
    const inline = true;
    const wrapper = createWrapper({ inline });
    assertStyleVarSetup(wrapper, 'position', 'relative');
  });

  it('check badge radius when tile is false should be 100%', () => {
    const tile = false;
    const wrapper = createWrapper({ tile });
    assertStyleVarSetup(wrapper, 'radius', '100%');
  });

  it('check badge radius when tile is true should be 0px', () => {
    const tile = true;
    const wrapper = createWrapper({ tile });
    assertStyleVarSetup(wrapper, 'radius', '0px');
  });

  it('check badge inset when bottom is false should be auto auto calc(100% - 4px) calc(100% - 4px)', () => {
    const bottom = false;
    const wrapper = createWrapper({ bottom });
    assertStyleVarSetup(
      wrapper,
      'inset',
      ' auto auto calc(100% - 4px) calc(100% - 4px)'
    );
  });

  it('check badge inset when bottom is true should be calc(100% - 4px) auto auto calc(100% - 4px)', () => {
    const bottom = true;
    const wrapper = createWrapper({ bottom });
    assertStyleVarSetup(
      wrapper,
      'inset',
      ' calc(100% - 4px) auto auto calc(100% - 4px)'
    );
  });

  it('check badge inset when left is false should be auto auto calc(100% - 4px) calc(100% - 4px)', () => {
    const left = false;
    const wrapper = createWrapper({ left });
    assertStyleVarSetup(
      wrapper,
      'inset',
      ' auto auto calc(100% - 4px) calc(100% - 4px)'
    );
  });

  it('check badge inset when left is true should be calc(100% - 4px) auto auto calc(100% - 4px)', () => {
    const left = true;
    const wrapper = createWrapper({ left });
    assertStyleVarSetup(
      wrapper,
      'inset',
      ' auto calc(100% - 4px) calc(100% - 4px) auto'
    );
  });
});
