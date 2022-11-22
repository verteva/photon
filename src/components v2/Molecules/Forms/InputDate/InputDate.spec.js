import { render, fireEvent } from '@testing-library/vue';
import InputDate from './InputDate.vue';

describe('Molecules/inputDate.vue', () => {
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputDate, {
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
    const { getByText } = render(InputDate, {
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
    const { getByText } = render(InputDate, {
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
    const { getByText } = render(InputDate, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputDate, {
      props: {
        error,
      },
    });

    const container = getByText(error);

    expect(container).toBeTruthy();
  });

  it('emits: dateDay', async () => {
    const placeholder = 'DD';
    const { findAllByPlaceholderText, emitted } = render(InputDate, {
      props: {
        placeholder,
      },
    });
    const inputElement = await findAllByPlaceholderText(placeholder);

    const inputVal = '20';
    await fireEvent.update(inputElement[1], inputVal);

    expect(emitted().dateDay).toEqual([[inputVal]]);
  });

  it('emits: dateMonth', async () => {
    const placeholder = 'MM';
    const { findAllByPlaceholderText, emitted } = render(InputDate, {
      props: {
        placeholder,
      },
    });
    const inputElement = await findAllByPlaceholderText(placeholder);

    const inputVal = '12';
    await fireEvent.update(inputElement[1], inputVal);

    expect(emitted().dateMonth).toEqual([[inputVal]]);
  });

  it('emits: dateYear', async () => {
    const placeholder = 'YYYY';
    const { findAllByPlaceholderText, emitted } = render(InputDate, {
      props: {
        placeholder,
      },
    });
    const inputElement = await findAllByPlaceholderText(placeholder);
    const inputVal = '2000';
    await fireEvent.update(inputElement[1], inputVal);

    expect(emitted().dateYear).toEqual([[inputVal]]);
  });
});
