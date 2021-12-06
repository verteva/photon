import RadioGroup from '@/components/RadioGroup/RadioGroup.vue';
import { createWrapper } from '@/utils/unitTest';

describe('RadioGroup.vue', () => {
  const items = [
    {
      value: 1,
      label: 'On my own',
      icon: 'Apartment',
    },
    {
      value: 2,
      label: 'With a plus one',
      icon: 'AddToWallet',
    },
    {
      value: 4,
      label: 'With 4 people',
    },
    {
      value: 7,
      label: 'With your plus one',
    },
    {
      value: 99,
      label: 'With 9 people',
    },
  ];
  let wrapper;
  const slots = { label: 'This is a label' };

  beforeEach(() => {
    wrapper = createWrapper(RadioGroup, slots);
    wrapper.setProps({ items });
  });

  it('slot: label slot', async () => {
    expect(wrapper.html()).toContain('This is a label');
    await wrapper.setProps({ label: 'hello world label' });
    expect(wrapper.html()).toContain('hello world label');
  });

  it('event: select radio button', async () => {
    const radioLabel = wrapper.find('.radio-item label');
    expect(radioLabel.classes()).not.toContain('ph-border-brand2');
    console.log(wrapper.props());
    await wrapper.setProps({ value: 1 });
    expect(radioLabel.classes()).toContain('ph-border-brand2');
  });

  it('props: number of rows', async () => {
    await wrapper.setProps({ rows: 3 });
    const radioWrapper = wrapper.find('.radio-wrapper');
    expect(radioWrapper.element.style.gridTemplateRows).toEqual(
      'repeat(3, auto)'
    );
  });
});
