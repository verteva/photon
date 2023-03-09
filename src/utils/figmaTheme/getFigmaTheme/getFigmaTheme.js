import merge from 'lodash.merge';

// Function that sorts one array based on the sort of the other array
const sortArray = (arr, sortArr) => {
  return arr.sort((a, b) => {
    return (
      sortArr.indexOf(a.replace('.json', '')) -
      sortArr.indexOf(b.replace('.json', ''))
    );
  });
};

export const getFigmaTheme = (files, theme) => {
  const filePaths = files.keys();

  const metaFilePath = filePaths.find((filePath) =>
    filePath.includes('$metadata')
  );

  if (!metaFilePath) {
    throw new Error('No $meta file found');
  }

  const { tokenSetOrder } = files(metaFilePath);

  const themeFilePath = filePaths.find((filePath) =>
    filePath.includes('$theme')
  );

  if (!themeFilePath) {
    throw new Error('No $theme file found');
  }

  const themeFile = files(themeFilePath);

  const themeData = themeFile.find(({ name }) => name === theme);

  if (!themeData) {
    throw new Error(
      `No data found for theme ${theme}. This theme may not exist.`
    );
  }

  const sourcePartialsToLoad = tokenSetOrder.filter(
    (themeName) =>
      Boolean(themeData.selectedTokenSets[themeName]) &&
      themeData.selectedTokenSets[themeName] !== 'disabled'
  );

  const semanticPartialsToLoad = tokenSetOrder.filter(
    (themeName) => themeData.selectedTokenSets[themeName] === 'enabled'
  );

  if (!sourcePartialsToLoad || !sourcePartialsToLoad.length) {
    throw new Error(
      `No enabled partials found for this theme ${theme}. Check the $theme file for this theme.`
    );
  }

  const sortedSourcePartialsToLoad = sortArray(filePaths, tokenSetOrder).filter(
    (sortedFile) =>
      sourcePartialsToLoad.includes(sortedFile.replace('.json', ''))
  );

  const sortedSemanticPartialsToLoad = sortArray(
    filePaths,
    tokenSetOrder
  ).filter((sortedFile) =>
    semanticPartialsToLoad.includes(sortedFile.replace('.json', ''))
  );

  const sourceTheme = sortedSourcePartialsToLoad.reduce(
    (acc, filePath) => merge(acc, files(filePath)),
    {}
  );

  const semanticTheme = sortedSemanticPartialsToLoad.reduce(
    (acc, filePath) => merge(acc, files(filePath)),
    {}
  );

  return { sourceTheme, semanticTheme };
};

export const getFigmaThemeNames = (files) => {
  const filePaths = files.keys();

  const themeFilePath = filePaths.find((filePath) =>
    filePath.includes('$theme')
  );

  if (!themeFilePath) {
    throw new Error('No $theme file found');
  }

  const themeFile = files(themeFilePath);

  return themeFile.map(({ name }) => name);
};
