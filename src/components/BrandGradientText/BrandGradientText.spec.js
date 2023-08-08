import BrandGradientText from '@/components/BrandGradientText/BrandGradientText.vue';
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

  it('check init content should be empty', () => {
    expect(text.text()).toBe('Slot Content');
  });

  it('check gradient classes', () => {
    expect(text.attributes().class).toContain('ph-brand-gradient-text');
  });
});
