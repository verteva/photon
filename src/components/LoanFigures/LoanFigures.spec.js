import { createWrapper } from '@/utils/unitTest.ts';
import LoanFigures from '@/components/LoanFigures/LoanFigures.vue';

describe('LoanFigures.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(LoanFigures);
  });

  it('props: background', async () => {
    const background = 'ph-bg-brand1';
    await wrapper.setProps({ background });
    expect(wrapper.props().background).toEqual(background);
  });

  it('props: title', async () => {
    const title = 'Current Loan';
    await wrapper.setProps({ title });
    expect(wrapper.props().title).toEqual(title);
  });

  it('props: loading', async () => {
    await wrapper.setProps({ loading: true });
    expect(wrapper.props().loading).toEqual(true);
    await wrapper.vm.calculate();
    const loadingValue = Number(LoanFiguresValue.text());

    expect(loadingValue).toBeTruthy();
    expect(loadingValue).toBeGreaterThanOrEqual(0.01);
  });

  it('props: name', async () => {
    const name = 'Rent';
    await wrapper.setProps({ name });
    expect(wrapper.props().name).toEqual(name);
  });
  it('props: value', async () => {
    const value = 200000;
    await wrapper.setProps({ value });
    expect(wrapper.props().value).toEqual(value);
  });
  it('props: darkMode', async () => {
    expect(wrapper.classes()).not.toContain('ph-text-white');
    await wrapper.setProps({ darkMode: true });

    expect(wrapper.props().darkMode).toEqual(true);
    expect(wrapper.classes()).toContain('ph-text-white');
  });
});
