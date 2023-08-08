import Card from './Card.vue';
import { createWrapper } from '@/utils/unitTest';

describe('components v2/Card', () => {
  let wrapper;
  let cardFindClass;
  beforeEach(() => {
    wrapper = createWrapper(Card);
    cardFindClass = wrapper.findComponent({
      ref: 'card',
    });
  });

  it('check Card content', () => {
    const cardSlotContent = wrapper
      .getComponent({
        ref: 'card',
      })
      .html();
    expect(cardSlotContent).toContain('Slot Content');
  });

  it('check init displaying class', async () => {
    expect(cardFindClass.classes()).toContain('card');
    expect(cardFindClass.classes()).toContain('rounded');
  });

  it('check props: light displaying class', async () => {
    await wrapper.setProps({ light: false });
    expect(cardFindClass.classes()).not.toContain('light');
    await wrapper.setProps({ light: true });
    expect(cardFindClass.classes()).toContain('light');
    expect(wrapper.vm.light).toEqual(true);
  });

  it('check props: shadow displaying class', async () => {
    expect(cardFindClass.classes()).not.toContain('shadow');
    await wrapper.setProps({ shadow: true });
    expect(cardFindClass.classes()).toContain('shadow');
    expect(wrapper.vm.shadow).toEqual(true);
  });

  it('check props: noPadding displaying class', async () => {
    expect(cardFindClass.classes()).not.toContain('no-padding');
    await wrapper.setProps({ noPadding: true });
    expect(cardFindClass.classes()).toContain('no-padding');
    expect(wrapper.vm.noPadding).toEqual(true);
  });
});
