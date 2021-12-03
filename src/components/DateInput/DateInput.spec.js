import { createWrapper } from '@/utils/unitTest.ts';
import DateInput from '@/components/DateInput/DateInput.vue';

describe('DateInput.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createWrapper(DateInput);
  });

  it('check element: Data values day, month, year', async () => {
    await wrapper.setData({ day: '14', month: '06', year: '1924' });

    expect(wrapper.find('input[name="day"]').element.value).toEqual('14');
    expect(wrapper.find('input[name="month"]').element.value).toEqual('06');
    expect(wrapper.find('input[name="year"]').element.value).toEqual('1924');
  });

  it('check prop: value should split into 3 values', async () => {
    const day = wrapper.find('input[name="day"]');
    const month = wrapper.find('input[name="month"]');
    const year = wrapper.find('input[name="year"]');

    await day.setValue('14');
    await month.setValue('06');
    await year.setValue('1924');

    expect(wrapper.find('input[name="day"]').element.value).toEqual('14');
    expect(wrapper.find('input[name="month"]').element.value).toEqual('06');
    expect(wrapper.find('input[name="year"]').element.value).toEqual('1924');
  });

  it('check prop: value should split into 3 values', async () => {
    await wrapper.setData({ day: '14', month: '06', year: '1924' });
    const day = wrapper.find('input[name="day"]');
    const month = wrapper.find('input[name="month"]');
    const year = wrapper.find('input[name="year"]');

    await day.setValue('14');
    await month.setValue('06');
    await year.setValue('1924');

    expect(wrapper.find('input[name="day"]').element.value).toEqual('14');
    expect(wrapper.find('input[name="month"]').element.value).toEqual('06');
    expect(wrapper.find('input[name="year"]').element.value).toEqual('1924');
  });

  it('check prop: value should split into 3 values', async () => {
    await wrapper.setProps({ value: '1940-10-10' });
    const day = wrapper.find('input[name="day"]');
    const month = wrapper.find('input[name="month"]');
    const year = wrapper.find('input[name="year"]');

    await day.setValue('14');
    await month.setValue('06');
    await year.setValue('1924');

    expect(wrapper.find('input[name="day"]').element.value).toEqual('14');
    expect(wrapper.find('input[name="month"]').element.value).toEqual('06');
    expect(wrapper.find('input[name="year"]').element.value).toEqual('1924');
  });
});
