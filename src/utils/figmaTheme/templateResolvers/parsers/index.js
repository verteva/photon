import { boxShadowParser } from './boxShadowParser';
import { compositionParser } from './compositionParser';
import { basicParser } from './basicParser';
import { mathParser } from './mathParser';

const parsers = {
  composition: compositionParser,
  color: basicParser,
  spacing: mathParser,
  borderRadius: mathParser,
  borderWidth: mathParser,
  boxShadow: boxShadowParser,
  fontFamilies: basicParser,
  fontWeights: basicParser,
  typography: compositionParser,
  fontSizes: mathParser,
  lineHeights: mathParser,
  letterSpacing: mathParser,
  paragraphSpacing: mathParser,
  textCase: basicParser,
  textDecoration: basicParser,
  icon: basicParser,
  other: basicParser,
  basic: basicParser,
};

export default parsers;
