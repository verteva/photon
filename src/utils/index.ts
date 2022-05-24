export const addCommaSeparators = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const removeCommaSeparators = (str: string): number => {
  if (typeof str === 'number') {
    return str;
  }
  return Number(str.split(',').join(''));
};

export const isNumericInput = (keyCode: number): boolean =>
  /*
    keycode 48 to 57 => Digit0 to Digit9;
    keycode 96 to 105 => Numpad0 to Numpad9;
  */
  (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);

export const isNumber = (event: KeyboardEvent): boolean => {
  return isNumericInput(event.keyCode) || event.code === 'Backspace';
};
