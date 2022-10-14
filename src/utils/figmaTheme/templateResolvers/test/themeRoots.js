export const colorRoot = {
  color: {
    primary: {
      value: '#000000',
      type: 'color',
    },
    secondary: {
      value: '{color.primary}',
      type: 'color',
    },
    tertiary: {
      value: '{color.secondary} 50% {color.primary} 50%',
      type: 'color',
    },
    quaternary: {
      value: 'rgba({color.primary}, 0.5)',
      type: 'color',
    },
  },
};

export const borderWidthRoot = {
  borderWidth: {
    primary: {
      value: '2',
      type: 'borderWidth',
    },
    secondary: {
      value: '{borderWidth.primary}',
      type: 'borderWidth',
    },
  },
};

export const fontFamiliesRoot = {
  fontFamilies: {
    primary: {
      value: 'Helvetica',
      type: 'fontFamilies',
    },
    secondary: {
      value: '{fontFamilies.primary}',
      type: 'fontFamilies',
    },
  },
};

export const fontWeightsRoot = {
  fontWeights: {
    primary: {
      value: '400',
      type: 'fontWeights',
    },
    secondary: {
      value: '{fontWeights.primary}',
      type: 'fontWeights',
    },
  },
};

export const otherRoot = {
  other: {
    primary: {
      value: 'gradient(90deg, #000000, #ffffff)',
      type: 'other',
    },
    secondary: {
      value: '{other.primary}',
      type: 'other',
    },
  },
};

export const spacingRoot = {
  spacing: {
    primary: {
      value: '10',
      type: 'spacing',
    },
    secondary: {
      value: '{spacing.primary}',
      type: 'spacing',
    },
    tertiary: {
      value: '{spacing.secondary} * 2',
      type: 'spacing',
    },
  },
};

export const borderRadiusRoot = {
  borderRadius: {
    primary: {
      value: '5',
      type: 'borderRadius',
    },
    secondary: {
      value: '{borderRadius.primary}',
      type: 'borderRadius',
    },
  },
};

export const fontSizesRoot = {
  fontSizes: {
    primary: {
      value: '5',
      type: 'fontSizes',
    },
    secondary: {
      value: '{fontSizes.primary}',
      type: 'fontSizes',
    },
  },
};

export const lineHeightsRoot = {
  lineHeights: {
    primary: {
      value: '110%',
      type: 'lineHeights',
    },
    secondary: {
      value: '{lineHeights.primary}',
      type: 'lineHeights',
    },
  },
};

export const letterSpacingRoot = {
  letterSpacing: {
    primary: {
      value: '5',
      type: 'letterSpacing',
    },
    secondary: {
      value: '{letterSpacing.primary}',
      type: 'letterSpacing',
    },
  },
};

export const paragraphSpacingRoot = {
  paragraphSpacing: {
    primary: {
      value: '5',
      type: 'paragraphSpacing',
    },
    secondary: {
      value: '{paragraphSpacing.primary}',
      type: 'paragraphSpacing',
    },
  },
};

export const textCaseRoot = {
  textCase: {
    primary: {
      value: 'uppercase',
      type: 'textCase',
    },
    secondary: {
      value: '{textCase.primary}',
      type: 'textCase',
    },
  },
};

export const textDecorationRoot = {
  textDecoration: {
    primary: {
      value: 'underlined',
      type: 'textDecoration',
    },
    secondary: {
      value: '{textDecoration.primary}',
      type: 'textDecoration',
    },
  },
};

export const iconRoot = {
  icon: {
    primary: {
      value: 'airplane',
      type: 'icon',
    },
    secondary: {
      value: '{icon.primary}',
      type: 'icon',
    },
  },
};

export const typographyRoot = {
  typography: {
    primary: {
      value: {
        fontFamily: 'Helvetica',
        fontWeight: '400',
      },
      type: 'typography',
    },
    secondary: {
      value: '{typography.primary}',
      type: 'typography',
    },
    tertiary: {
      value: {
        fontFamily: '{fontFamilies.primary}',
        fontWeight: '{fontWeights.primary}',
      },
      type: 'typography',
    },
    danger: {
      value: {
        fontFamily: '{fontFamilies.secondary}',
        fontWeight: '{fontWeights.secondary}',
      },
      type: 'typography',
    },
  },
};

export const compositionRoot = {
  composition: {
    primary: {
      value: {
        color: '#000000',
        borderWidth: '2',
        spacing: '20',
      },
      type: 'composition',
    },
    secondary: {
      value: '{composition.primary}',
      type: 'composition',
    },
    tertiary: {
      value: {
        color: '{color.primary}',
        borderWidth: '{borderWidth.primary}',
        spacing: '{spacing.tertiary}',
      },
      type: 'composition',
    },
    danger: {
      value: {
        color: '{color.secondary}',
        borderWidth: '{borderWidth.secondary}',
        spacing: '20',
      },
      type: 'composition',
    },
  },
};

export const boxShadowRoot = {
  boxShadow: {
    primary: {
      value: {
        color: '#000000',
        type: 'dropShadow',
        x: '0',
        y: '0',
        blur: '0',
        spread: '0',
      },
      type: 'boxShadow',
    },
    secondary: {
      value: '{boxShadow.primary}',
      type: 'boxShadow',
    },
    tertiary: {
      value: {
        color: '{color.primary}',
        type: 'dropShadow',
        x: '0',
        y: '0',
        blur: '0',
        spread: '0',
      },
      type: 'boxShadow',
    },
    danger: {
      value: {
        color: '{color.secondary}',
        type: 'dropShadow',
        x: '0',
        y: '0',
        blur: '0',
        spread: '0',
      },
      type: 'boxShadow',
    },
    array: {
      value: [
        {
          color: 'red',
          type: 'dropShadow',
          x: '0',
          y: '0',
          blur: '0',
          spread: '0',
        },
        {
          color: 'blue',
          type: 'dropShadow',
          x: '0',
          y: '0',
          blur: '0',
          spread: '0',
        },
      ],
      type: 'boxShadow',
    },
  },
};

export const unknownRoot = {
  unknown: {
    primary: {
      value: 'unknown',
      type: 'unknown',
    },
    secondary: {
      value: '{unknown.primary}',
      type: 'unknown',
    },
  },
};

export const brokenRoot = {
  color: {
    primary: {
      value: '#000000',
      type: 'color',
    },
  },
  typography: {
    primary: {
      value: {
        fontFamily: 'Helvetica',
        fontWeight: '400',
      },
      type: 'typography',
    },
  },
  other: {
    primary: {
      value: '{typography.primary} {color.primary}',
      type: 'other',
    },
    secondary: {
      value: '{other.fake}',
      type: 'other',
    },
    tertiary: {
      value: '{other.primary}',
      swipe: 'no type value here!',
    },
    quaternary: 0,
  },
};

export const basicRoots = {
  colorRoot,
  borderWidthRoot,
  fontFamiliesRoot,
  fontWeightsRoot,
  otherRoot,
  spacingRoot,
  borderRadiusRoot,
  fontSizesRoot,
  lineHeightsRoot,
  letterSpacingRoot,
  paragraphSpacingRoot,
  textCaseRoot,
  textDecorationRoot,
  iconRoot,
  unknownRoot, // this defaults to basic parser. Unknown/New types.
};

export const compositionRoots = {
  typographyRoot: {
    ...typographyRoot,
    ...fontFamiliesRoot,
    ...fontWeightsRoot,
  },
  compositionRoot: {
    ...colorRoot,
    ...borderWidthRoot,
    ...compositionRoot,
    ...spacingRoot,
  },
};
