export const getFiles = () =>
  require.context('<PATH_TO_BRANDING_FOLDER>', true, /theme\.json$/i);
