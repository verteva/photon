import { createWrapper } from '@/utils/unitTest.ts';
import { addCommaSeparators } from '@/utils/';
import LoanFiguresCard from '@/components/LoanFigures/LoanFiguresCard.vue';

describe('LoanFiguresCard.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(LoanFiguresCard);
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
    expect(wrapper.props().loading).toBeTruthy;
  });

  it('props: icon', async () => {
    const icon = 'Rent';
    await wrapper.setProps({ icon });
    expect(wrapper.props().icon).toEqual(icon);
  });

  it('props: value', async () => {
    const value = 200000;
    await wrapper.setProps({ value });
    expect(wrapper.props().value).toEqual(value);
  });

  it('props: darkMode', async () => {
    await wrapper.setProps({ darkMode: true });

    expect(wrapper.props().darkMode).toEqual(true);
    expect(wrapper.classes()).not.toContain('ph-text-white');
  });

  it('computed: display', async () => {
    const value = 200000;
    await wrapper.setProps({ value });
    const numberConv = addCommaSeparators(value);
    await console.log(wrapper.vm.display);
    const displayComputed = wrapper.vm.display;
    expect(displayComputed).toEqual('$' + numberConv);
  });
});
