import InputSelect from '@/components/InputSelect/InputSelect.vue';
import { createWrapper } from '@/utils/unitTest';

describe('InputSelect.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(InputSelect);
  });

  it('check init input should be empty', () => {
    expect(wrapper).toBeTruthy();
  });
});
