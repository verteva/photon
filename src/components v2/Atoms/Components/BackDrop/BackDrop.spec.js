import Label from './Label.vue';
import { createWrapper } from '@/utils/unitTest';

describe('Label.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(Label);
  });

  it('props: label', async () => {
    const label = 'This is a label';
    await wrapper.setProps({ label });

    expect(wrapper.html()).toContain(label);
  });

  it('props: isRequired', async () => {
    await wrapper.setProps({ isRequired: true });

    expect(wrapper.html()).toContain('*');
  });

  it('props: inlineText', async () => {
    const inlineText = 'This is a label';
    await wrapper.setProps({ inlineText });

    expect(wrapper.html()).toContain(inlineText);
  });
});
