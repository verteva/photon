import { boxShadowParser } from './boxShadowParser';
import { compositionParser } from './compositionParser';
import { basicParser } from './basicParser';
import { spacingParser } from './spacingParser';
import { typographyParser } from './typographyParser';

const parsers = {
  composition: compositionParser,
  color: basicParser,
  spacing: spacingParser,
  borderRadius: spacingParser,
  borderWidth: basicParser,
  boxShadow: boxShadowParser,
  fontFamilies: basicParser,
  fontWeights: basicParser,
  typography: typographyParser,
  other: basicParser,
};

export default parsers;
