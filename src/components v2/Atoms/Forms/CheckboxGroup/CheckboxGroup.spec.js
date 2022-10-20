import { createWrapper } from '@/utils/unitTest.ts';
import CheckboxGroup from './CheckboxGroup.vue';

describe('CheckboxGroup.vue', () => {
  let wrapper;

  const items = [
    {
      label: 'Item 1',
      value: false,
    },
  ];

  const items2 = [
    {
      label: 'Item 1',
      value: true,
    },
  ];

  beforeEach(() => {
    wrapper = createWrapper(CheckboxGroup);
  });

  it('props: items', async () => {
    await wrapper.setProps({ items });
    expect(wrapper.html()).toContain('Item 1');
  });

  it('props: disabled', async () => {
    await wrapper.setProps({ items: items });
    const disabled = true;
    await wrapper.setProps({ disabled });

    expect(wrapper.html()).toContain('disabled');
  });

  it('emit: change', async () => {
    await wrapper.setProps({ items: items });

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.trigger('click');

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([{ index: 0, value: true }]);
  });

  it('emit: input [value = true]', async () => {
    await wrapper.setProps({ items: items2 });
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.trigger('click');

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([{ index: 0, value: false }]);
  });
});
