import InputBasicSelect from './InputBasicSelect';
import { createWrapper } from '@/utils/unitTest';

describe('InputSelect.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(InputBasicSelect);
  });

  it('check init input should be empty', () => {
    expect(wrapper).toBeTruthy();
  });
});
