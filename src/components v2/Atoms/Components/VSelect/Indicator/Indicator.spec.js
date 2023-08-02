import { createWrapper } from '@/utils/unitTest.ts';

import Indicator from './Indicator.vue';

describe('Atoms/Indicator.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(Indicator);
  });

  it('props: hideOpenIndicator', async () => {
    const hideOpenIndicator = true;
    const openIndicatorIcon = 'chevron-down';
    await wrapper.setProps({ hideOpenIndicator, openIndicatorIcon });
    expect(wrapper.html()).not.toContain(openIndicatorIcon);
  });

  it('props: openIndicatorIcon', async () => {
    const openIndicator = await wrapper.find('.openIndicator');
    const openIndicatorIcon = 'chevron-down';
    await wrapper.setProps({ openIndicatorIcon });
    expect(openIndicator.html()).toContain(openIndicatorIcon);
  });
});
