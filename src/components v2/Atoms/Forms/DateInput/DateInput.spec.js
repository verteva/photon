import { createWrapper } from '@/utils/unitTest.ts';
import DateInput from '@/components/DateInput/DateInput.vue';

describe('DateInput.vue', () => {
  let wrapper;
  let day;
  let month;
  let year;
  beforeEach(() => {
    wrapper = createWrapper(DateInput);
    day = wrapper.find('input[name="day"]');
    month = wrapper.find('input[name="month"]');
    year = wrapper.find('input[name="year"]');
  });

  it('check element: Data values day, month, year', async () => {
    await wrapper.setData({ day: '14', month: '06', year: '1925' });

    expect(day.element.value).toEqual('14');
    expect(month.element.value).toEqual('06');
    expect(year.element.value).toEqual('1925');
  });

  it('check element: input element values', async () => {
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
