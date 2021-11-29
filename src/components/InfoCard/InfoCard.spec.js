import InfoCard from '@/components/InfoCard/InfoCard.vue';

import {
  createWrapper,
  assertStyleVarSetup,
  assertPropsVarSetup,
} from '@/utils/unitTest';

describe('InfoCard.vue', () => {
  let wrapper;
  let container;
  let heading;
  let headingText;
  let content;
  let iconEl;
  beforeEach(() => {
    wrapper = createWrapper(InfoCard);
    container = wrapper.findComponent({
      ref: 'container',
    });
    heading = wrapper.findComponent({
      ref: 'heading',
    });
    headingText = wrapper.findComponent({
      ref: 'headingText',
    });
    content = wrapper.findComponent({
      ref: 'content',
    });
    iconEl = wrapper.findComponent({
      ref: 'iconEl',
    })
  });

  it('check prop heading', async () => {
    const heading = "Heading";
    expect(wrapper.vm.heading).toBe('');
    expect(headingText.exists()).toBeFalsy();
    await wrapper.setProps({ heading });
    headingText = wrapper.findComponent({
      ref: 'headingText',
    });
    expect(wrapper.vm.heading).toBe(heading);
    expect(headingText.text()).toBe(heading);
  });

  it('check prop icon', async () => {
    const heading = "Heading";
    const icon = "Circle";
    expect(wrapper.vm.icon).toBe('');
    expect(iconEl.exists()).toBeFalsy();
    await wrapper.setProps({ heading, icon });
    iconEl = wrapper.findComponent({
      ref: 'iconEl',
    });
    expect(wrapper.vm.icon).toBe(icon);
    expect(iconEl.vm.name).toBe(icon);
  });

  it('check prop contentBg', async () => {
    const contentBg = "black";
    expect(wrapper.vm.contentBg).toBe('white');
    expect(content.classes()).toContain('ph-bg-white');
    await wrapper.setProps({ contentBg });
    expect(wrapper.vm.contentBg).toBe(contentBg);
    expect(content.classes()).toContain('ph-bg-'+contentBg);
  });

  it('check prop iconBg', async () => {
    const heading = "Heading";
    const icon = "Circle";
    const iconBg = "black";
    expect(wrapper.vm.iconBg).toBe('');
    await wrapper.setProps({ heading, icon, iconBg });
    iconEl = wrapper.findComponent({
      ref: 'iconEl',
    })
    const iconParent = iconEl.element.parentElement;
    expect(wrapper.vm.iconBg).toBe(iconBg);
    expect(iconParent.className).toContain('ph-bg-'+iconBg);
  });

  it('check prop shadow', async () => {
    const shadow = false;
    expect(wrapper.vm.shadow).toBe(true);
    expect(container.attributes().class).toContain('ph-shadow');
    await wrapper.setProps({ shadow });
    expect(wrapper.vm.shadow).toBe(shadow);
    expect(container.attributes().class).not.toContain('ph-shadow');
  });

  it('check prop barndBar', async () => {
    const brandBar = true;
    expect(wrapper.vm.brandBar).toBe(false);
    expect(container.attributes().class).not.toContain('ph-pl-4');
    await wrapper.setProps({ brandBar });
    expect(wrapper.vm.brandBar).toBe(brandBar);
    expect(container.attributes().class).toContain('ph-pl-4');
  });
});
