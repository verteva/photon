import { createWrapper } from '@/utils/unitTest.ts';
import { addCommaSeparators } from '@/utils/';
import FiguresCard from '@/components/FiguresCard/FiguresCard.vue';

describe('FiguresCard.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(FiguresCard);
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

  it('props: iconSize', async () => {
    const iconSize = 'xxl';
    await wrapper.setProps({ iconSize });
    expect(wrapper.props().iconSize).toEqual(iconSize);
  });

  it('props: value', async () => {
    const value = 200000;
    await wrapper.setProps({ value });
    expect(wrapper.props().value).toEqual(value);
  });

  it('props: textColor', async () => {
    const textColor = 'ph-text-white';
    await wrapper.setProps({ textColor });
    expect(wrapper.props().textColor).toEqual(textColor);
  });

  it('props: isCurrency', async () => {
    await wrapper.setProps({ isCurrency: true });
    expect(wrapper.props().isCurrency).toBeTruthy;
  });

  it('computed: display', async () => {
    const value = 200000;
    await wrapper.setProps({ value });
    const numberConv = addCommaSeparators(value);
    const displayComputed = wrapper.vm.display;
    expect(displayComputed).toEqual('$' + numberConv);
  });
});
