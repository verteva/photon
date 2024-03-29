export const getThemeNames = (files) => {
  try {
    const keys = files.keys();
    const filteredKeys = keys.map((key) => key.split('/')[2]);
    //console.log(keys);

    return filteredKeys.filter(
      (value, index, array) => array.indexOf(value) === index
    );
  } catch (e) {
    console.log('e', e);
  }

  return '';
};
