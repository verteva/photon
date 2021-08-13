export const addCommaSeparators = (num:number):string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  export const removeCommaSeparators = (str:string):number => {
  if (typeof str === 'number') {
    return str;
  }
  return Number(str.split(',').join(''));
};