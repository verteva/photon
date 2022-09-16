export const getFiles = () =>
  require.context(
    '/Users/zoechai/onboarding-web/branding',
    true,
    /theme\.json$/i
  );
