export const getTheme = theme => {
  const themeJson = require(`<PATH_TO_BRANDING_FOLDER>/${theme}/theme/theme.json`);
  return themeJson;
};
