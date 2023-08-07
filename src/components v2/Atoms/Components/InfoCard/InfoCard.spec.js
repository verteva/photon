import InfoCard from './InfoCard.vue';

import { createWrapper } from '@/utils/unitTest';

describe('InfoCard.vue', () => {
  let wrapper;
  let container;
  let brandBarEl;
  let headingText;
  beforeEach(() => {
    wrapper = createWrapper(InfoCard);
    container = wrapper.findComponent({
      ref: 'container',
    });
    brandBarEl = wrapper.findComponent({
      ref: 'brandBar',
    });
    headingText = wrapper.findComponent({
      ref: 'headingText',
    });
  });

  it('props: heading', async () => {
    const heading = 'Heading';
    expect(wrapper.vm.heading).toBe('');
    expect(headingText.exists()).toBeFalsy();
    await wrapper.setProps({ heading });
    headingText = wrapper.findComponent({
      ref: 'headingText',
    });
    expect(wrapper.vm.heading).toBe(heading);
    expect(headingText.text()).toBe(heading);
  });

  it('props: icon', async () => {
    const icon = 'house';
    await wrapper.setProps({
      heading: 'Heading',
      icon: icon,
    });
    expect(wrapper.html()).toContain(`fa-${icon}`);
  });

  it('props: shadow', async () => {
    const shadow = true;
    await wrapper.setProps({ shadow });
    expect(container.classes()).toContain('ph-info-card-shadow');
  });

  it('props: brandBar', async () => {
    const brandBar = true;
    expect(wrapper.vm.brandBar).toBe(false);
    expect(brandBarEl.exists()).toBeFalsy();
    await wrapper.setProps({ brandBar });
    brandBarEl = wrapper.findComponent({
      ref: 'brandBar',
    });
    expect(wrapper.vm.brandBar).toBe(brandBar);
    expect(brandBarEl.exists()).toBeTruthy();
  });
});
