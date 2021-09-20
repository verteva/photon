import { shallowMount } from '@vue/test-utils';
import AutoComplete from '@/components/Autocomplete/AutoComplete.vue';

describe('AutoComplete.vue', () => {
  it('renders props.label when passed', () => {
    const msg = 'AutoComplete test';
    const wrapper = shallowMount(AutoComplete, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
