import { createWrapper } from '@/utils/unitTest.ts';

import NoOptions from './NoOptions.vue';

describe('Atoms/NoOptions.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(NoOptions);
  });

  it('props: no options text', async () => {
    const text = 'There are no options';
    await wrapper.setProps({ text });
    expect(wrapper.html()).toContain('There are no options');
  });
});
