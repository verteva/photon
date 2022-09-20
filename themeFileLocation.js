export const getFiles = () =>
  require.context(BRANDING_PATH, true, /theme\.json$/i);
