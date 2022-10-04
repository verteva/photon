import { getFigmaTheme, getFigmaThemeNames, parseFigmaJson } from '../';

export const getBuiltThemeFiles = (files, mergedJson) => {
  const createdFiles = function(key) {
    return mergedJson[key];
  };

  createdFiles.keys = () => files;

  const figmaThemeNames = getFigmaThemeNames(createdFiles);
  const themes = {
    themes: figmaThemeNames,
  };
  const figmaThemesMap = figmaThemeNames.map(themeName => {
    const figmaTheme = getFigmaTheme(createdFiles, themeName);
    const parsedTheme = parseFigmaJson(figmaTheme);
    return {
      [themeName]: parsedTheme,
    };
  }, {});

  const figmaThemes = figmaThemesMap.reduce(
    (acc, item) => ({ ...acc, ...item }),
    {}
  );

  return {
    themes,
    ...figmaThemes,
  };
};
