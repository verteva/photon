import Headline from './Headline.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Headline.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(Headline);
  });

  it('has photon-headline class', async () => {
    const el = wrapper.find('.photon-headline');

    expect(el.exists()).toBeTruthy();
  });
});
