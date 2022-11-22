import { render, fireEvent } from '@testing-library/vue';
import InputPhone from './InputPhone.vue';

describe('Molecules/InputPhone.vue', () => {
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputPhone, {
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
    const { getByText } = render(InputPhone, {
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
    const { getByText } = render(InputPhone, {
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
    const { getByText } = render(InputPhone, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputPhone, {
      props: {
        error,
      },
    });

    const container = getByText(error);

    expect(container).toBeTruthy();
  });

  it('emits: input', async () => {
    const placeholder = 'This is the checkbox label';
    const { findByPlaceholderText, emitted } = render(InputPhone, {
      props: {
        placeholder,
      },
    });

    const inputElement = await findByPlaceholderText(placeholder);
    const inputVal = '0412345678';
    const formatedInputVal = '0412 345 678';
    await fireEvent.update(inputElement, inputVal);
    expect(emitted().input).toEqual([[formatedInputVal]]);
  });
});
