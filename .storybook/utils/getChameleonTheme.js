import merge from 'lodash.merge';

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

    const themesToLoad = themeFile.find(({ name }) => name === theme);

    console.log(themeFile);
    console.log(themesToLoad);

    const themeFilesToLoad = tokenSetOrder.filter(
      themeName => themesToLoad.selectedTokenSets[themeName] === 'enabled'
    );

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

    const sortedThemeFilesToLoad = sortArray(filePaths, tokenSetOrder).filter(
      sortedFile =>
        themeFilesToLoad.includes(
          sortedFile
            .split('/')
            .pop()
            .replace('.json', '')
        )
    );

    console.log(sortedThemeFilesToLoad);
    console.log(themeFilesToLoad);

    const filteredFiles = sortedThemeFilesToLoad.reduce(
      (acc, filePath) => merge(acc, files(filePath)),
      {}
    );

    console.log('filteredFiles', filteredFiles);

    return filteredFiles;
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
