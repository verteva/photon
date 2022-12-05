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

  test('props: optionLabelVar', async () => {
    const optionLabelVar = 'name';
    await wrapper.setProps({ optionLabelVar });
    assertPropsVarSetup(wrapper, 'optionLabelVar', optionLabelVar);
  });

  test('props: optionCustomLabelVar', async () => {
    const optionCustomLabelVar = 'name';
    await wrapper.setProps({ optionCustomLabelVar });
    assertPropsVarSetup(wrapper, 'optionCustomLabelVar', optionCustomLabelVar);
  });
  test('props: selectedOptionLabelVar', async () => {
    const selectedOptionLabelVar = 'name';
    await wrapper.setProps({ selectedOptionLabelVar });
    assertPropsVarSetup(
      wrapper,
      'selectedOptionLabelVar',
      selectedOptionLabelVar
    );
  });
  test('props: selectedOptionCustomLabelVar', async () => {
    const selectedOptionCustomLabelVar = 'name';
    await wrapper.setProps({ selectedOptionCustomLabelVar });
    assertPropsVarSetup(
      wrapper,
      'selectedOptionCustomLabelVar',
      selectedOptionCustomLabelVar
    );
  });

  test('props: openIndicatorIcon', async () => {
    const openIndicatorIcon = 'Circle';
    await wrapper.setProps({ openIndicatorIcon });
    assertPropsVarSetup(wrapper, 'openIndicatorIcon', openIndicatorIcon);
  });
});
