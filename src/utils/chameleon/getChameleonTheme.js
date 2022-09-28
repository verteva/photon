import merge from 'lodash.merge';

// Function that sorts one array based on the sort of the other array
const sortArray = (arr, sortArr) => {
  return arr.sort((a, b) => {
    return (
      sortArr.indexOf(
        a
          .split('/')
          .pop()
          .replace('.json', '')
      ) -
      sortArr.indexOf(
        b
          .split('/')
          .pop()
          .replace('.json', '')
      )
    );
  });
};

export const getChameleonTheme = async (files, theme = '') => {
  try {
    const filePaths = files.keys();

    const themeFilePath = filePaths.find(filePath =>
      filePath.includes('$theme')
    );

    const metaFilePath = filePaths.find(filePath =>
      filePath.includes('$metadata')
    );

    const { tokenSetOrder } = files(metaFilePath);

    const themeFile = files(themeFilePath);

    const themeMetaData = themeFile.find(({ name }) => name === theme);

    const partialsToLoad = tokenSetOrder.filter(
      themeName => themeMetaData.selectedTokenSets[themeName] === 'enabled'
    );

    const sortedPartialsToLoad = sortArray(filePaths, tokenSetOrder).filter(
      sortedFile =>
        partialsToLoad.includes(
          sortedFile
            .split('/')
            .pop()
            .replace('.json', '')
        )
    );

    return sortedPartialsToLoad.reduce(
      (acc, filePath) => merge(acc, files(filePath)),
      {}
    );
  } catch (e) {
    console.log('e', e);
  }

  return '';
};

export const getChameleonThemeNames = files => {
  const filePaths = files.keys();

  const themeFilePath = filePaths.find(filePath => filePath.includes('$theme'));

  const themeFile = files(themeFilePath);

  return themeFile.map(({ name }) => name);
};
