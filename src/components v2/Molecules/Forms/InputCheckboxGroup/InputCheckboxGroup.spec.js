import { render, fireEvent } from '@testing-library/vue';
import InputCheckboxGroup from './InputCheckboxGroup.vue';

describe('InputCheckboxGroupGroup.vue', () => {
  it('props: label', async () => {
    const label = 'This is a label';
    const { getByText } = render(InputCheckboxGroup, {
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
    const { getByText } = render(InputCheckboxGroup, {
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
    const { getByText } = render(InputCheckboxGroup, {
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
    const { getByText } = render(InputCheckboxGroup, {
      props: {
        extraMessage,
      },
    });

    const container = getByText(extraMessage);

    expect(container).toBeTruthy();
  });

  it('props: error', async () => {
    const error = 'This is an error';
    const { getByText } = render(InputCheckboxGroup, {
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
        label: 'This is a label',
        value: false,
      },
      {
        label: 'This is a second label',
        value: false,
      },
    ];
    const { getByText } = render(InputCheckboxGroup, {
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
        label: 'This is a label',
        value: false,
      },
      {
        label: 'This is a second label',
        value: true,
      },
    ];
    const { getByText, emitted } = render(InputCheckboxGroup, {
      props: {
        items,
      },
    });

    const labelOne = getByText(items[0].label);
    const labelTwo = getByText(items[1].label);

    await fireEvent.click(labelOne);

    expect(emitted().input).toEqual([[{ index: 0, value: true }]]);

    await fireEvent.click(labelTwo);

    expect(emitted().input).toEqual([
      [{ index: 0, value: true }],
      [{ index: 1, value: false }],
    ]);
  });
});
