import { createWrapper, assertPropsVarSetup } from '@/utils/unitTest.ts';

import Indicator from './Indicator.vue';

describe('Atoms/Indicator.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(Indicator);
  });

  it('props: hideOpenIndicator', async () => {
    const hideOpenIndicator = false;
    await wrapper.setProps({ hideOpenIndicator });

    expect(wrapper.html()).toContain('openIndicator');
  });

  it('props: openIndicatorIcon', async () => {
    const openIndicator = await wrapper.find('.openIndicator');
    const openIndicatorIcon = 'ChevronDown';
    await wrapper.setProps({ openIndicatorIcon });
    assertPropsVarSetup(openIndicator, 'name', openIndicatorIcon);
  });
});
