import { boxShadowParser } from './boxShadowParser';
import { compositionParser } from './compositionParser';
import { basicParser } from './basicParser';

const parsers = {
  composition: compositionParser,
  color: basicParser,
  spacing: basicParser,
  borderRadius: basicParser,
  borderWidth: basicParser,
  boxShadow: boxShadowParser,
  fontFamilies: basicParser,
  fontWeights: basicParser,
  typography: compositionParser,
  other: basicParser,
  basic: basicParser,
};

export default parsers;
