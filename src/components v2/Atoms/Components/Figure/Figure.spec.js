import Figure from './Figure.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Figure.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(Figure);
  });

  it('has photon-figure class', async () => {
    const el = wrapper.find('.photon-figure');

    expect(el.exists()).toBeTruthy();
  });
});
