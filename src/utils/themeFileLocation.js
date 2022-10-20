/* istanbul ignore file */
export const getFiles = () => {
  if (IS_BUILD) {
    return null;
  }
  if (!IS_BUILD) {
    return require.context(BRANDING_PATH, true, /theme\.json$/i);
  }
};

export default getFiles;
