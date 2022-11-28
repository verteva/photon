export const injectThemeCssVariables = (flattenedTheme) => {
  const headTag = document.getElementsByTagName('head')[0];
  const styleTag =
    document.getElementById('theme-css-variables') ||
    document.createElement('style');

  styleTag.id = 'theme-css-variables';

  const reducedStyles = Object.entries(flattenedTheme).reduce(
    (acc, [key, value]) => {
      return acc + `${key}: ${value};`;
    },
    ''
  );

  styleTag.innerHTML = `
    :root {
      ${reducedStyles}
    }
  `;
  headTag.appendChild(styleTag);
};
