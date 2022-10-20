import { injectThemeCssVariables } from '../injectThemeCssVariables';
import parsedTheme from './parsedTheme.json';

describe('injectThemeCssVariables.js', () => {
  it('injects the css into the dom', () => {
    injectThemeCssVariables(parsedTheme);
    expect(
      document.getElementById('theme-css-variables').textContent
    ).toMatchSnapshot();
  });
});
