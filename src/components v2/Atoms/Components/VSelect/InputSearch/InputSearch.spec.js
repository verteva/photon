import { createWrapper, assertPropsVarSetup } from '@/utils/unitTest.ts';

import InputSearch from './InputSearch.vue';

describe('Atoms/InputSearch.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(InputSearch);
  });

  it('props:prefixIcon is setup correctly', async () => {
    const prefixIcon = 'LocationSimple';
    await wrapper.setProps({ prefixIcon });
    const icon = wrapper.findComponent({ ref: 'prefixIcon' });
    assertPropsVarSetup(icon, 'name', prefixIcon);
  });

  it('props:hideInputOnSelected is setup correctly', async () => {
    const input = await wrapper.find('[data-testid="autocomplete-input"]');
    const hideInputOnSelected = true;
    await wrapper.setProps({ hideInputOnSelected });
    expect(input.isVisible()).toBeTruthy();
  });
});
