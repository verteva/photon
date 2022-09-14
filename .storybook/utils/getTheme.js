export const getTheme = async (files, theme = '') => {
  try {
    const filePaths = files.keys();
    const filteredFilePaths = filePaths.filter(filePath =>
      filePath.includes(theme)
    );

    return filteredFilePaths.reduce(
      (acc, filePath) => ({
        ...acc,
        ...files(filePath),
      }),
      {}
    );
  } catch (e) {
    console.log('e', e);
  }

  return '';
};
