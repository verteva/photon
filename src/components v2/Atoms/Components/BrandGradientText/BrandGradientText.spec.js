import BrandGradientText from './BrandGradientText.vue';
import { createWrapper } from '@/utils/unitTest';

describe('BrandGradientText.vue', () => {
  let wrapper;
  let text;
  beforeEach(() => {
    wrapper = createWrapper(BrandGradientText);
    text = wrapper.findComponent({
      ref: 'text',
    });
  });

  it('check slot is present', () => {
    expect(text.text()).toBe('Slot Content');
  });
});
