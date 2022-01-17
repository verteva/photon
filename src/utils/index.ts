export const addCommaSeparators = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const removeCommaSeparators = (str: string): number => {
  if (typeof str === 'number') {
    return str;
  }
  return Number(str.split(',').join(''));
};

export const isNumber = (event: KeyboardEvent): boolean => {
  if (
    event.keyCode > 31 &&
    (event.keyCode < 48 || event.keyCode > 57) &&
    event.keyCode !== 46
  ) {
    return false;
  } else {
    return true;
  }
};
