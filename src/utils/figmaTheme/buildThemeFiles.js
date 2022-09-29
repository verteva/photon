import { getFigmaTheme, getFigmaThemeNames, parseFigmaJson } from './';

export const getBuiltThemeFiles = async (files, mergedJson) => {
  const createdFiles = function(key) {
    return mergedJson[key];
  };

  createdFiles.keys = () => files;

  const figmaThemeNames = getFigmaThemeNames(createdFiles);
  const themes = {
    themes: figmaThemeNames,
  };
  const promiseMap = figmaThemeNames.map(async themeName => {
    const figmaTheme = await getFigmaTheme(createdFiles, themeName);
    const parsedTheme = parseFigmaJson(figmaTheme);
    return {
      [themeName]: parsedTheme,
    };
  }, {});

  const resolvedMap = await Promise.all(promiseMap);

  const figmaThemes = resolvedMap.reduce(
    (acc, item) => ({ ...acc, ...item }),
    {}
  );

  return {
    themes,
    ...figmaThemes,
  };
};
