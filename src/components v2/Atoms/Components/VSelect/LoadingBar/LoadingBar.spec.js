import { createWrapper } from '@/utils/unitTest.ts';

import LoadingBar from './LoadingBar.vue';

describe('Atoms/LoadingBar.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(LoadingBar);
  });

  it('props:loading', async () => {
    const loading = true;
    await wrapper.setProps({ loading });
    expect(wrapper.html()).toContain('ph-progress-loading');
  });
});
