import {
  getChameleonTheme,
  getChameleonThemeNames,
  parseBrandingJsonV2,
} from './';

export const getBuiltThemeFiles = async (files, mergedJson) => {
  const createdFiles = function(key) {
    return mergedJson[key];
  };

  createdFiles.keys = () => files;

  const chameleonThemeNames = getChameleonThemeNames(createdFiles);
  const themes = {
    themes: chameleonThemeNames,
  };
  const promiseMap = chameleonThemeNames.map(async themeName => {
    const chameleonTheme = await getChameleonTheme(createdFiles, themeName);
    const parsedTheme = parseBrandingJsonV2(chameleonTheme);
    return {
      [themeName]: parsedTheme,
    };
  }, {});

  const resolvedMap = await Promise.all(promiseMap);

  const chameleonThemes = resolvedMap.reduce(
    (acc, item) => ({ ...acc, ...item }),
    {}
  );

  return {
    themes,
    ...chameleonThemes,
  };
};
