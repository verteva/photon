export const getTheme = async theme => {
  let themeObject = {};
  try {
    const files = require.context(
      '/Users/dandrory/Work/development-environment/frontend_dir/branding',
      true,
      /theme\.json$/i
    );

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
