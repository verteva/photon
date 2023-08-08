import { createWrapper } from '@/utils/unitTest.ts';

import SelectedOption from './SelectedOption.vue';

describe('Atoms/Option.vue', () => {
  let wrapper;
  const option = { id: 'Option 1' };

  beforeEach(() => {
    wrapper = createWrapper(SelectedOption);
  });

  it('props: labelVar', async () => {
    const labelVar = 'id';
    await wrapper.setProps({ option, labelVar });

    expect(wrapper.html()).toContain('Option 1');
  });

  it('props: showSelectedIcon && allowOptionIcon', async () => {
    const showSelectedIcon = true;
    const allowOptionIcon = true;
    const validateIcon = 'house';
    await wrapper.setProps({ showSelectedIcon, allowOptionIcon, validateIcon });

    expect(wrapper.html()).toContain('ph-selected-icon');
  });
});
