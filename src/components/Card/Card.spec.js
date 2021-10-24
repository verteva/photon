import { mount, createLocalVue } from '@vue/test-utils';
import Card from '@/components/Card/Card.vue';
beforeEach(() => {
    const createWrapper = (propsOverrides = {}) => {
        const localVue = createLocalVue();
        return mount(SwitchToggle, {
          localVue,
          propsData: {
            ...propsOverrides,
          },
        });
      };
    }
describe('Card.vue', () => {


  it('check init input should be empty', () => {
    const wrapper = createWrapper();
    const Card = getInput(wrapper);
    expect(input.value).toBe('');
  });

  it('check placeholder is correct when input value is empty', () => {
    const placeholder = 'Please select';
    const wrapper = createWrapper({ placeholder: placeholder})
    const input = getInput(wrapper);
    expect(input.placeholder).toBe(placeholder);
  });

  it('check darkmode is correct', () => {
    const darkMode = true;
    const wrapper = createWrapper({ darkMode: darkMode})
    const input = wrapper.find('input');
    expect(input.classes()).toContain('ph-bg-grey6');
  });

  it('check props:number is correct setup', async () => {
    const number = true;
    const wrapper = createWrapper({ number: number })
    event.keyCode = 32;
    await wrapper.vm.validatePress(event);
    await wrapper.vm.$nextTick();
    expect(event.preventDefault).toBeCalled();
  })
});
