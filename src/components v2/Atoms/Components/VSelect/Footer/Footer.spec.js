import { createWrapper } from '@/utils/unitTest.ts';

import Footer from './Footer.vue';

describe('Atoms/Footer.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(Footer);
  });

  it('props: showFooter', async () => {
    const showFooter = true;
    const addFooter = true;
    await wrapper.setProps({ showFooter, addFooter });

    expect(wrapper.html()).toContain('ph-autocomplete__option--footer');
  });
});
