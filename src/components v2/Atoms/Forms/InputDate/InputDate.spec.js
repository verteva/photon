import { createWrapper } from '@/utils/unitTest.ts';
import InputDate from '@/components v2/Atoms/Forms/InputDate/InputDate.vue';

describe('Atoms/InputDate.vue', () => {
  let wrapper;
  let day;
  let month;
  let year;

  beforeEach(() => {
    wrapper = createWrapper(InputDate);
    day = wrapper.find('.ph-input-text[name="day"] input');
    month = wrapper.find('.ph-input-text[name="month"] input');
    year = wrapper.find('.ph-input-text[name="year"] input');
  });

  it('props: day, month, year', async () => {
    await wrapper.setProps({ value: { day: '14', month: '06', year: '1925' } });

    expect(day.element.value).toEqual('14');
    expect(month.element.value).toEqual('06');
    expect(year.element.value).toEqual('1925');
  });

  it('props: disabled', async () => {
    const disabled = true;
    await wrapper.setProps({ disabled });

    expect(wrapper.html()).toContain('disabled');
  });

  it('props: disabled', async () => {
    const disabled = true;
    await wrapper.setProps({ disabled });

    expect(wrapper.html()).toContain('disabled');
  });

  it('props: day, month, year', async () => {
    await wrapper.setProps({ value: { day: '14', month: '06', year: '1925' } });

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

  it('emit: day, month, year values', async () => {
    const dayValue = '14';
    const monthValue = '06';
    const yearValue = '1924';
    await day.setValue(dayValue);
    await month.setValue(monthValue);
    await year.setValue(yearValue);

    expect(wrapper.emitted().dateDay).toBeTruthy();
    expect(wrapper.emitted().dateDay[0]).toEqual([dayValue]);

    expect(wrapper.emitted().dateMonth).toBeTruthy();
    expect(wrapper.emitted().dateMonth[0]).toEqual([monthValue]);

    expect(wrapper.emitted().dateYear).toBeTruthy();
    expect(wrapper.emitted().dateYear[0]).toEqual([yearValue]);
  });
});
