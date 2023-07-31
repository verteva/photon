import { render, fireEvent } from '@testing-library/vue';
import InputRadioButtonGroup from './InputRadioButtonGroup.vue';

describe('InputCheckboxGroupGroup.vue', () => {
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputRadioButtonGroup, {
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
    const { getByText } = render(InputRadioButtonGroup, {
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
    const { getByText } = render(InputRadioButtonGroup, {
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
    const { getByText } = render(InputRadioButtonGroup, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputRadioButtonGroup, {
      props: {
        error,
      },
    });

    const container = getByText(error);

    expect(container).toBeTruthy();
  });

  it('props: items', async () => {
    const items = [
      {
        value: 1,
        label: 'On my own with you..',
      },
      {
        value: '3',
        label: 'This is a photon radio icon checked',
        icon: 'house',
      },
    ];
    const { getByText } = render(InputRadioButtonGroup, {
      props: {
        items,
      },
    });

    const labelOne = getByText(items[0].label);
    const labelTwo = getByText(items[1].label);

    expect(labelOne).toBeTruthy();
    expect(labelTwo).toBeTruthy();
  });

  it('emits: change', async () => {
    const items = [
      {
        value: 1,
        label: 'On my own with you..',
      },
      {
        value: '3',
        label: 'This is a photon radio icon checked',
        icon: 'house',
      },
    ];
    const { getByText, emitted } = render(InputRadioButtonGroup, {
      props: {
        items,
      },
    });

    const labelOne = getByText(items[0].label);
    const labelTwo = getByText(items[1].label);

    await fireEvent.click(labelOne);

    expect(emitted().click).toEqual([[0]]);

    await fireEvent.click(labelTwo);

    expect(emitted().click).toEqual([[0], [1]]);
  });
});
