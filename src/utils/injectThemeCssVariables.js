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

/**
 * Inject the contents of a CSS file into Storybook
 */
export const injectThemeCSSVariablesFromFile = (css_file_href) => {
  const headTag = document.getElementsByTagName('head')[0];
  const styleTag =
    document.getElementById('theme-css-variables') ||
    document.createElement('style');

  console.log('Inserting CSS variables:', css_file_href);

  const request = new XMLHttpRequest();
  request.addEventListener('load', (e) => {
    if (request.status >= 200 && request.status < 400) {
      const data = request.response;

      styleTag.id = 'theme-css-variables';
      styleTag.rel = 'stylesheet';
      styleTag.type = 'text/css';
      styleTag.media = 'all';
      styleTag.innerHTML = data;

      headTag.appendChild(styleTag);
    } else {
      console.log('ERROR');
    }
  });

  request.open('GET', css_file_href);
  request.send();
};
