import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import AccordionHeader from './AccordionHeader.vue';

describe('AccordionHeader.vue', () => {
  const section = 'This is Accordion Header text';

  it('default', async () => {
    const { container } = render(AccordionHeader);

    expect(container).toBeTruthy();
  });

  it('props: complete', async () => {
    const { getByTestId } = render(AccordionHeader, {
      props: {
        section,
        complete: true,
      },
    });
    const check = getByTestId('complete-checkmark');
    expect(check).toBeTruthy();
  });

  it('props: section', async () => {
    const { getByText } = render(AccordionHeader, {
      props: {
        section,
      },
    });
    const item = getByText(section);
    expect(item).toBeTruthy();
  });

  it('props: interactive', async () => {
    const { container } = render(AccordionHeader, {
      props: {
        interactive: true,
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('props: disabled', async () => {
    const { container } = render(AccordionHeader, {
      props: {
        disabled: true,
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('props: fullWidth', async () => {
    const { container } = render(AccordionHeader, {
      props: {
        fullWidth: true,
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('props: openArrows = false', async () => {
    const { queryAllByTestId } = render(AccordionHeader, {
      props: {
        openArrows: false,
      },
    });
    const openArrow = await queryAllByTestId('openArrow');
    expect(openArrow.length).toBeFalsy();
  });

  it('props: expanded = true', async () => {
    const { container } = render(AccordionHeader, {
      props: {
        expanded: true,
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('props: openArrows = false, openCloseIcons', async () => {
    const { container } = render(AccordionHeader, {
      props: {
        openArrows: false,

        openCloseIcons: ['ChevronDown', 'ChevronUp'],
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('props: openArrows = false, expanded, openCloseIcons', async () => {
    const { container } = render(AccordionHeader, {
      props: {
        openArrows: false,
        expanded: true,
        openCloseIcons: ['ChevronDown', 'ChevronUp'],
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('emit: click', async () => {
    const section = 'I am the section!';
    const { emitted, getByText } = render(AccordionHeader, {
      props: {
        interactive: true,
        section,
      },
    });
    const item = getByText(section);
    expect(emitted().click).toBeFalsy();

    await userEvent.click(item);
    expect(emitted().click).toBeTruthy();
  });

  it('emit: focus', async () => {
    const section = 'I am the section!';
    const { emitted, getByText } = render(AccordionHeader, {
      props: {
        interactive: true,
        section,
      },
    });

    const item = getByText(section);
    expect(emitted().focus).toBeFalsy();

    await userEvent.click(item);
    expect(emitted().focus).toBeTruthy();
  });

  it('emit: blur', async () => {
    const section = 'I am the section!';
    const { emitted, getByText } = render(AccordionHeader, {
      props: {
        interactive: true,
        section,
      },
    });

    const item = getByText(section);
    expect(emitted().blur).toBeFalsy();

    await userEvent.click(item);
    expect(emitted().blur).toBeFalsy();

    await userEvent.tab();
    expect(emitted().blur).toBeTruthy();
  });
});
