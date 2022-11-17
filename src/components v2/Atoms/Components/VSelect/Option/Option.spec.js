import { createWrapper } from '@/utils/unitTest.ts';

import Option from './Option.vue';

describe('Atoms/Option.vue', () => {
  let wrapper;
  const option = { label: 'Option 1' };
  const optionID = { id: 'Option ID' };

  beforeEach(() => {
    wrapper = createWrapper(Option);
  });

  it('props: allowOptionIcon && validateIcon', async () => {
    const allowOptionIcon = true;
    const validateIcon = 'Apartment';
    await wrapper.setProps({ allowOptionIcon, validateIcon });

    expect(wrapper.html()).toContain('ph-option-icon');
    expect(wrapper.html()).toContain(validateIcon);
  });

  it('props: option', async () => {
    await wrapper.setProps({ option });

    expect(wrapper.html()).toContain('Option 1');
  });

  it('props: labelVar', async () => {
    const labelVar = 'id';
    await wrapper.setProps({ option: optionID, labelVar });

    expect(wrapper.html()).toContain('Option ID');
  });
});
