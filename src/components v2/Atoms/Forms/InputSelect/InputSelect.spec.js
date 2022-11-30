import InputSelect from './InputSelect.vue';
import { createWrapper, assertPropsVarSetup } from '@/utils/unitTest';

describe('Atoms/InputSelect.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(InputSelect);
  });

  it('init input should be empty', async () => {
    const inputElm = await wrapper.find('input');
    expect(inputElm.element.value).toBe('');
  });

  test('props: showFooter', async () => {
    const showFooter = true;
    await wrapper.setProps({ showFooter });
    assertPropsVarSetup(wrapper, 'showFooter', showFooter);
  });

  test('props: customLabelVar', async () => {
    const customLabelVar = 'name';
    await wrapper.setProps({ customLabelVar });
    assertPropsVarSetup(wrapper, 'customLabelVar', customLabelVar);
  });

  test('props: openIndicatorIcon', async () => {
    const openIndicatorIcon = 'Circle';
    await wrapper.setProps({ openIndicatorIcon });
    assertPropsVarSetup(wrapper, 'openIndicatorIcon', openIndicatorIcon);
  });
});
