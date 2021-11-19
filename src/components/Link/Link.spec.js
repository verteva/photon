import { mount, createLocalVue } from '@vue/test-utils';
import Link from '@/components/Link/Link.vue';

describe('Link.vue', () => {
  const createWrapper = (propsOverrides = {}) => {
    const localVue = createLocalVue();
    return mount(Link, {
      localVue,
      propsData: {
        ...propsOverrides,
      },
      slots: {
        default: 'Slot Content',
      },
    });
  };

  it('check slot content', () => {
    const wrapper = createWrapper();
    const linkSlotContent = wrapper.findComponent({ ref: 'elRef' }).html();
    expect(linkSlotContent).toContain('Slot Content');
  });

  it('check default value of link href is #', () => {
    const wrapper = createWrapper();
    const linkEl = wrapper.findComponent({ ref: 'elRef' });
    expect(linkEl.attributes().href).toBe('#');
  });

  it('check value of link href is setup correctly', () => {
    const link = 'https://apply.nano.com.au';
    const wrapper = createWrapper({ link });
    const linkEl = wrapper.findComponent({ ref: 'elRef' });
    expect(linkEl.attributes().href).toBe(link);
  });

  it('check value of classList is setup correctly', () => {
    const wrapper = createWrapper();
    const linkEl = wrapper.findComponent({ ref: 'elRef' });
    expect(linkEl.attributes().class).toContain('ph-text-brand2');
    expect(linkEl.attributes().class).toContain('ph-group');
    expect(linkEl.attributes().class).toContain('ph-relative');
    expect(linkEl.attributes().class).toContain('ph-transition');
    expect(linkEl.attributes().class).toContain('focus:ph-outline-none');
    expect(linkEl.attributes().class).toContain('focus:ph-underline');
    expect(linkEl.attributes().class).toContain('focus:ph-text-brandh2');
    expect(linkEl.attributes().class).toContain('hover:ph-text-brandh2');
  });
});
