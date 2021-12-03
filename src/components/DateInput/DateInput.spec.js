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

  it('check element: input element values', async () => {
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

  it('check prop: dark mode', async () => {
    expect(wrapper.find('input[name="day"]').classes()).toContain(
      'ph-bg-white'
    );
    expect(wrapper.find('input[name="month"]').classes()).toContain(
      'ph-bg-white'
    );
    expect(wrapper.find('input[name="year"]').classes()).toContain(
      'ph-bg-white'
    );
    await wrapper.setProps({ darkMode: true });
    expect(wrapper.find('input[name="day"]').classes()).toContain(
      'ph-bg-grey6'
    );
    expect(wrapper.find('input[name="month"]').classes()).toContain(
      'ph-bg-grey6'
    );
    expect(wrapper.find('input[name="year"]').classes()).toContain(
      'ph-bg-grey6'
    );
  });
  // it.only('check prop: value should split into 3 values', async () => {
  //   await wrapper.setData({ day: '', month: '', dyear: '' });
  //   await wrapper.setProps({ value: '11-11-1980' });

  //   await wrapper.vm.setDate();
  //   await wrapper.vm.$nextTick();
  //   console.log(wrapper.vm.day);
  //   console.log(wrapper.vm.month);
  //   console.log(wrapper.vm.year);
  //   console.log(wrapper.html());
  //   expect(wrapper.find('input[name="day"]').element.value).toEqual('14');
  //   expect(wrapper.find('input[name="month"]').element.value).toEqual('06');
  //   expect(wrapper.find('input[name="year"]').element.value).toEqual('1924');
  // });
});
