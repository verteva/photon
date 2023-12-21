import { createWrapper } from '@/utils/unitTest';
import InputPhone from './InputPhone.vue';

describe('InputPhone.vue', () => {
  let wrapper;
  let input;
  let inputEl;

  beforeEach(() => {
    wrapper = createWrapper(InputPhone);
    input = wrapper.find('.input-tel__input');
    inputEl = input.element;
  });

  it('check init input should be empty', () => {
    expect(inputEl.value).toBe('');
  });

  it('check prop:countries is correct when input value is not empty', () => {
    const value = '0405123456';
    wrapper = createWrapper(InputPhone, {}, { value });
    inputEl = wrapper.find('.input-tel__input').element;
    expect(inputEl.value).toBe(value);
  });

  test('focus handler test', async () => {
    expect(wrapper.vm.inFocus).toBe(false);

    await input.trigger('focus');

    expect(wrapper.vm.inFocus).toBe(true);

    await input.trigger('blur');

    expect(wrapper.vm.inFocus).toBe(false);
  });
});
