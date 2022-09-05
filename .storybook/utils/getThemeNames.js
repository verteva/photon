export const getThemeNames = (files) => {
  let themeObject = {};
  try {
    const keys = files.keys();
    const filteredKeys = keys.map(key => key.split('/')[1]);

    filteredKeys.map(key => {
      themeObject[key] = key;
    });

    return themeObject;
  } catch (e) {
    console.log('e', e);
  }

  return '';
};
