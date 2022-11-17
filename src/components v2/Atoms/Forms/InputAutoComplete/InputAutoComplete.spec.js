import AutoComplete from './InputAutoComplete.vue';
import { createWrapper, assertPropsVarSetup } from '@/utils/unitTest';

describe('AutoComplete.vue', () => {
  let wrapper;
  let autocomplete;
  let input;

  beforeEach(() => {
    wrapper = createWrapper(AutoComplete);
    autocomplete = wrapper.findComponent({
      ref: 'autocomplete',
    });
    input = wrapper.findComponent({
      ref: 'input',
    });
  });

  it('init input should be empty', async () => {
    const inputElm = await input.find('input');
    expect(inputElm.element.value).toBe('');
  });

  it('props: placeholder is correct when input value is empty', async () => {
    const placeHolder = 'Please select';
    await wrapper.setProps({ placeHolder });

    expect(await input.html()).toContain(placeHolder);
  });

  it('props: hideClearBtn', async () => {
    const hideClearBtn = true;
    await wrapper.setProps({ hideClearBtn });
    assertPropsVarSetup(autocomplete, 'clearable', !hideClearBtn);
  });

  test('handler: focus', async () => {
    expect(wrapper.vm.focused).toBe(false);
    const inputElm = await input.find('input');
    await inputElm.trigger('focus');

    expect(wrapper.vm.focused).toBe(true);

    await inputElm.trigger('blur');

    expect(wrapper.vm.focused).toBe(false);
  });

  test('emit: update:searchInput', async () => {
    const inputElm = await input.find('input');
    await inputElm.setValue('some value');
    expect(wrapper.emitted()['update:searchInput'][0][0]).toBe('some value');
  });
});
