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
      },
      type: 'composition',
    },
    danger: {
      value: {
        color: '{color.secondary}',
        borderWidth: '{borderWidth.secondary}',
      },
      type: 'composition',
    },
  },
};

export const boxShadowRoot = {
  boxShadow: {
    primary: {
      value: [
        {
          color: '#000000',
          type: 'dropShadow',
          x: '0',
          y: '0',
          blur: '0',
          spread: '0',
        },
      ],
      type: 'boxShadow',
    },
    secondary: {
      value: '{boxShadow.primary}',
      type: 'boxShadow',
    },
    tertiary: {
      value: [
        {
          color: '{color.primary}',
          type: 'dropShadow',
          x: '0',
          y: '0',
          blur: '0',
          spread: '0',
        },
      ],
      type: 'boxShadow',
    },
    danger: {
      value: [
        {
          color: '{color.secondary}',
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
      value: '{other.tertiary}',
      type: 'other',
    },
    tertiary: {
      value: '{other.primary}',
      type: 'fake',
    },
    quaternary: {
      value: '{other.tertiary}',
      swipe: 'no type value here!',
    },
    quinary: 0,
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
};

export const compositonRoots = {
  typographyRoot: {
    ...typographyRoot,
    ...fontFamiliesRoot,
    ...fontWeightsRoot,
  },
  compositionRoot: {
    ...colorRoot,
    ...borderWidthRoot,
    ...compositionRoot,
  },
};
