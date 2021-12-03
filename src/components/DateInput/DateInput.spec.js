import { createWrapper } from '@/utils/unitTest.ts';
import DateInput from '@/components/DateInput/DateInput.vue';

describe('DateInput.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
    wrapper = createWrapper(DateInput);
  });

  it('check element: Data values day, month, year', async () => {
    await wrapper.setData({ day: '14', month: '06', year: '1924' });

    expect(wrapper.find('input[name="day"]').element.value).toEqual('14');
    expect(wrapper.find('input[name="month"]').element.value).toEqual('06');
    expect(wrapper.find('input[name="year"]').element.value).toEqual('1924');
  });

  it('check element: input element values', async () => {
    const day = wrapper.find('input[name="day"]');
    const month = wrapper.find('input[name="month"]');
    const year = wrapper.find('input[name="year"]');

    await day.setValue('14');
    await month.setValue('06');
    await year.setValue('1924');

    expect(day.element.value).toEqual('14');
    expect(month.element.value).toEqual('06');
    expect(year.element.value).toEqual('1924');
  });

  it('check prop: dark mode', async () => {
    await wrapper.setProps({ darkMode: true });
    expect(wrapper.props().darkMode).toEqual(true);
  });
});
