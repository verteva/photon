import { mount, createLocalVue } from '@vue/test-utils';
import Card from '@/components/Card/Card.vue';

const createWrapper = (propsOverrides = {}) => {
  const localVue = createLocalVue();
  return mount(Card, {
    localVue,
    propsData: {
      ...propsOverrides,
    },
    slots: {
      default: 'Slot Content',
    },
  });
};
describe('Card.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('check slot content', () => {
    const cardSlotContent = wrapper.html();
    expect(cardSlotContent).toContain('Slot Content');
  });

  it('check props: active displaying class', async () => {
    const cardFindClass = await wrapper.getComponent({ ref: 'card' });
    expect(cardFindClass.classes()).toContain('ph-border-grey9');
    await wrapper.setProps({ active: true });
    expect(cardFindClass.classes()).toContain('ph-border-brand2');
    expect(wrapper.vm.active).toEqual(true);
  });

  it('check data: hover data change', async () => {
    const cardHoverTrigger = await wrapper.getComponent({ ref: 'card' });
    await expect(wrapper.vm.hover).toEqual(false);
    await cardHoverTrigger.trigger('mouseover');
    await expect(wrapper.vm.hover).toEqual(true);
  });

  it('check props: disabled/isInteractive/flex/allowOverflow/breakpoint is correct setup', async () => {
    const disabled = false;
    const isInteractive = false;
    const flex = false;
    const allowOverflow = false;
    const breakpoint = false;

    await wrapper.setProps({
      disabled: disabled,
      isInteractive: isInteractive,
      flex: flex,
      allowOverflow: allowOverflow,
      breakpoint: breakpoint,
    });

    await expect(wrapper.vm.disabled).toEqual(false);
    await expect(wrapper.vm.isInteractive).toEqual(false);
    await expect(wrapper.vm.flex).toEqual(false);
    await expect(wrapper.vm.allowOverflow).toEqual(false);
    await expect(wrapper.vm.breakpoint).toEqual(false);
  });

  it('check props: padding displaying adding default ph-p-7', async () => {
    await expect(wrapper.vm.padding).toEqual('ph-p-7');
    await wrapper.setProps({ padding: 'ph-p-99' });
    const cardPaddingClass = await wrapper.getComponent({ ref: 'card' });
    expect(cardPaddingClass.html()).toContain('ph-p-99');
  });

  it('check props: interactive click event', async () => {
    await wrapper.setProps({ isInteractive: true });
    await wrapper.setProps({ disabled: false });
    const cardClickedState = await wrapper.getComponent({ ref: 'card' });
    await cardClickedState.trigger('click');
    expect(cardClickedState.classes()).toContain('ph-cursor-pointer');
  });
});
