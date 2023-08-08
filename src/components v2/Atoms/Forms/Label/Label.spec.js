import Label from './Label.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Label.vue', () => {
  let wrapper;
  const label = 'This is a label';
  const inlineText = 'This is inline text';

  beforeEach(() => {
    wrapper = createWrapper(Label);
  });

  it('props: label', async () => {
    await wrapper.setProps({ label });
    expect(wrapper.html()).toContain(label);
  });

  it('props: isRequired', async () => {
    await wrapper.setProps({
      label,
      isRequired: true,
    });
    expect(wrapper.html()).toContain('*');
  });

  it('props: inlineText', async () => {
    await wrapper.setProps({
      label,
      inlineText,
    });
    expect(wrapper.html()).toContain(inlineText);
  });
});
