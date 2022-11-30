import InfoCard from './InfoCard.vue';

import { createWrapper } from '@/utils/unitTest';

describe('InfoCard.vue', () => {
  let wrapper;
  let container;
  let brandBarEl;
  let headingText;
  let content;
  let iconEl;
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
    content = wrapper.findComponent({
      ref: 'content',
    });
    iconEl = wrapper.findComponent({
      ref: 'iconEl',
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
    const heading = 'Heading';
    const icon = 'Circle';
    expect(wrapper.vm.icon).toBe('');
    expect(iconEl.exists()).toBeFalsy();
    await wrapper.setProps({ heading, icon });
    iconEl = wrapper.findComponent({
      ref: 'iconEl',
    });
    expect(wrapper.vm.icon).toBe(icon);
    expect(iconEl.vm.name).toBe(icon);
  });

  it('props: contentBg', async () => {
    const contentBg = 'secondary';
    await wrapper.setProps({ contentBg });
    expect(wrapper.vm.contentBg).toBe(contentBg);
    expect(content.classes()).toContain('ph-info-card-slot-bg-secondary');
  });

  it('props: iconBg', async () => {
    const heading = 'Heading';
    const icon = 'Circle';
    const iconBg = 'primary';
    expect(wrapper.vm.iconBg).toBe('');
    await wrapper.setProps({ heading, icon, iconBg });
    iconEl = wrapper.findComponent({
      ref: 'iconEl',
    });
    const iconParent = iconEl.element.parentElement;
    expect(wrapper.vm.iconBg).toBe(iconBg);
    expect(iconParent.className).toContain('ph-icon-bg-' + iconBg);
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
