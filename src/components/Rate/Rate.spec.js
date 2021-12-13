import { createWrapper } from '@/utils/unitTest.ts';
import Rate from '@/components/Rate/Rate.vue';

describe('Rate.vue', () => {
  let wrapper;
  let rateValue;
  beforeEach(() => {
    wrapper = createWrapper(Rate);
    rateValue = wrapper.getComponent({ ref: 'rateValue' });
  });

  it('props: name', async () => {
    const name = 'PRINCIPAL & INTEREST';

    expect(wrapper.props().name).toEqual('');
    await wrapper.setProps({ name });

    expect(wrapper.props().name).toEqual('PRINCIPAL & INTEREST');
  });

  it('props: show rate after load', async () => {
    const rate = '2.52';
    expect(wrapper.props().rate).toEqual('');
    await wrapper.setProps({ rate });

    expect(wrapper.props().rate).toEqual(rate);
  });

  it('props: show loading', async () => {
    await wrapper.setProps({ loading: true });
    expect(wrapper.props().loading).toEqual(true);
    await wrapper.vm.calculate();
    const rateLoadingValue = Number(rateValue.text());

    expect(rateLoadingValue).toBeTruthy();
    expect(rateLoadingValue).toBeGreaterThanOrEqual(0.01);
  });

  it('props: currency', async () => {
    expect(wrapper.html()).toContain('%');
    expect(wrapper.html()).toContain('p.a');

    await wrapper.setProps({ currency: true });

    expect(wrapper.props().currency).toEqual(true);
    expect(wrapper.html()).toContain('per month');
  });

  it('props: darkMode', async () => {
    expect(wrapper.classes()).not.toContain('ph-text-white');
    await wrapper.setProps({ darkMode: true });

    expect(wrapper.props().darkMode).toEqual(true);
    expect(wrapper.classes()).toContain('ph-text-white');
  });
});