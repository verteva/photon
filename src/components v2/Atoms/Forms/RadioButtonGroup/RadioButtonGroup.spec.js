import { createWrapper } from '@/utils/unitTest.ts';
import RadioButtonGroup from './RadioButtonGroup.vue';

describe('RadioButtonGroup.vue', () => {
  let wrapper;

  const items = [
    {
      value: 1,
      label: 'On my own',
      icon: 'Apartment',
    },
    {
      label: 'This is a photon radio icon checked',
      icon: 'Apartment',
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

  beforeEach(() => {
    wrapper = createWrapper(RadioButtonGroup);
  });

  it('props: items', async () => {
    await wrapper.setProps({ items });
    expect(wrapper.html()).toContain('This is a photon radio icon checked');
  });

  it('props: disabled', async () => {
    await wrapper.setProps({ items });
    const disabled = true;
    await wrapper.setProps({ disabled });

    expect(wrapper.html()).toContain('ph-radio-disabled');
  });

  it('emit: click', async () => {
    await wrapper.setProps({ items: items });

    const checkbox = await wrapper.findAll('input[type="radio"]').at(2);
    await checkbox.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
