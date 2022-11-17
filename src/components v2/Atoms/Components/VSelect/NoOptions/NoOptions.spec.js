import { createWrapper } from '@/utils/unitTest.ts';

import NoOptions from './NoOptions.vue';

describe('Atoms/NoOptions.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(NoOptions);
  });

  it('props: noOptionsText', async () => {
    const noOptionsText = 'There are no options';
    await wrapper.setProps({ noOptionsText });
    expect(wrapper.html()).toContain('There are no options');
  });
});
