export const getTheme = theme => {
  const themeJson = require(`/Users/dandrory/Work/development-environment/frontend_dir/branding/${theme}/theme/theme.json`);
  return themeJson;
};
