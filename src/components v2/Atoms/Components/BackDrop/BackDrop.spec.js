import BackDrop from './BackDrop.vue';
import { createWrapper } from '@/utils/unitTest';

describe('BackDrop.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(BackDrop);
  });

  it('has back-drop class', async () => {
    const el = wrapper.find('.back-drop');

    expect(el.exists()).toBeTruthy();
  });
});
