export const getTheme = async (files, theme = '') => {
  let themeObject = {};
  try {
    const keys = files.keys();
    const filteredKeys = keys.filter(key => key.includes(theme));

    filteredKeys.map(key => {
      const json = files(key);
      Object.keys(json).forEach(key => {
        themeObject[key] = json[key];
      });
    });

    return themeObject;
  } catch (e) {
    console.log('e', e);
  }

  return '';
};
