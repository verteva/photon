import { createWrapper } from '@/utils/unitTest.ts';
import InputText from './InputText.vue';

describe('Checkbox.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(InputText);
  });

  it('props: centered', async () => {
    const centered = true;
    await wrapper.setProps({ centered });

    expect(wrapper.html()).toContain('ph-input-text-icon-center');
  });

  it('props: number', async () => {
    const number = true;
    await wrapper.setProps({ number });
    const input = await wrapper.find('input');
    await input.setValue(1000);
    expect(wrapper.find('input').element.value).toBe('1000');
  });

  it('props: placeholder', async () => {
    const placeholder = 'Enter your name...';
    await wrapper.setProps({ placeholder });
    const input = await wrapper.find('input');
    expect(input.attributes('placeholder')).toBe(placeholder);
  });

  it('props: iconLeft', async () => {
    const iconLeft = 'Apartment';
    await wrapper.setProps({ iconLeft });
    expect(wrapper.html()).toContain('ph-input-text-icon-left');
  });

  it('props: iconRight', async () => {
    const iconRight = 'Apartment';
    await wrapper.setProps({ iconRight });
    expect(wrapper.html()).toContain('ph-input-text-icon-right');
  });
  it('props: centered', async () => {
    const centered = true;
    await wrapper.setProps({ centered });
    expect(wrapper.html()).toContain('ph-input-text-icon-center');
  });

  it('emit: input', async () => {
    const value = 'hello world';
    await wrapper.setProps({ value });
    const input = await wrapper.find('input');
    await input.setValue(value);
    console.log(wrapper.emitted());
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([value]);
  });
});
