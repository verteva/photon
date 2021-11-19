import { createWrapper } from '@/utils/unitTest.ts';
import Link from '@/components/Link/Link.vue';

describe('Link.vue', () => {
  let wrapper;
  let linkEl;
  beforeEach(() => {
    wrapper = createWrapper();
    linkEl = wrapper.findComponent({ ref: 'elRef' });
  });

  it('check slot content', () => {
    const linkSlotContent = wrapper.findComponent({ ref: 'elRef' }).html();
    expect(linkSlotContent).toContain('Slot Content');
  });

  it('check default value of link href is #', () => {
    console.log('linkEl', linkEl);
    expect(linkEl.attributes().href).toBe('#');
  });

  it('check value of link href is setup correctly', () => {
    const link = 'https://apply.nano.com.au';
    expect(linkEl.attributes().href).toBe(link);
  });

  it('check value of classList is setup correctly', () => {
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
