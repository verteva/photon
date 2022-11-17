import { render } from '@testing-library/vue';
import { createWrapper } from '@/utils/unitTest';
import InputAutoComplete from './InputAutoComplete.vue';

describe('Molecules/AutoComplete.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createWrapper(InputAutoComplete);
  });
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputAutoComplete, {
      props: {
        label,
      },
    });

    const container = getByText(label);

    expect(container).toBeTruthy();
  });

  it('props: inlineText', async () => {
    const label = 'This is a label';
    const inlineText = 'This is an inlineText';
    const { getByText } = render(InputAutoComplete, {
      props: {
        inlineText,
        label,
      },
    });

    const container = getByText(inlineText);

    expect(container).toBeTruthy();
  });

  it('props: isRequired', async () => {
    const label = 'This is a label';
    const isRequired = true;
    const { getByText } = render(InputAutoComplete, {
      props: {
        isRequired,
        label,
      },
    });

    const container = getByText('*');

    expect(container).toBeTruthy();
  });

  it('props: extraMessage', async () => {
    const extraMessage = 'This is an extra message';
    const { getByText } = render(InputAutoComplete, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputAutoComplete, {
      props: {
        error,
      },
    });

    const container = getByText(error);

    expect(container).toBeTruthy();
  });

  it('emits: input', async () => {
    const autocomplete = await wrapper.findComponent({
      ref: 'autocomplete',
    });
    await autocomplete.trigger('input', 'test');
  });
});
