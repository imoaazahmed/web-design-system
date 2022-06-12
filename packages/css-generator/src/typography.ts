import path from 'path';
import fs from 'fs';
import {
  letterSpacings,
  lineHeights,
  fontSizes,
  fontWeights,
  fonts,
} from '@tradeling/web-design-system';
import prettier from 'prettier';

interface ToCSSOptions {
  classPrefix: string;
  property: string;
  key: string;
  value: string;
}

const toCSS = (options: ToCSSOptions) => {
  const { classPrefix, property, key, value } = options;

  return `
    .${classPrefix}-${key}{
        ${property}: ${value};
    }
    `;
};

const propertyMap = {
  fs: {
    property: 'font-size',
    values: fontSizes,
  },
  fw: {
    property: 'font-weight',
    values: fontWeights,
  },
};

function generateTypographyScale() {
  let result = '';

  for (const propertyKey in propertyMap) {
    const { property, values } = propertyMap[propertyKey];
    for (const key in values) {
      const value = values[key];
      result += toCSS({
        classPrefix: propertyKey,
        property,
        key,
        value,
      });
    }
  }

  return result;
}

function generateTextCSS() {
  const css = `
     [class^="text"] {
       font-family: '${fonts.body}';
       letter-spacing: ${letterSpacings.default};
       line-height: ${lineHeights.default};
     }
    
     .text-lg {
        font-size: ${fontSizes.lg};
        font-weight: ${fontWeights.bold}
     }
    
     .text-md {
        font-size: ${fontSizes.sm}
     }
    
     .text-sm {
        font-size: ${fontSizes.sm}
     }
    `;

  return css;
}

function generateHeadingCSS() {
  const cssString = `
    [class^='heading'] {
      font-family: '${fonts.body}';
      font-weight: ${fontWeights.bold};
      line-height: ${lineHeights.short};
      letter-spacing: ${letterSpacings.tighter};
    }

    .heading-lg {
      font-size: ${fontSizes['2xl']};
    }

    @media (min-width: 36rem) {
      .heading-lg {
        font-size: ${fontSizes['3xl']};
      }
    }

    .heading-md {
      font-size: ${fontSizes['xl']};
    }

    @media (min-width: 60em) {
      .heading-md {
        font-size: ${fontSizes['2xl']};
      }
    }

    .heading-sm {
      font-size: ${fontSizes['xl']};
    }
  `;

  return cssString;
}

const fileName = 'typography.css';

function generateTypography(outDir = 'output') {
  const scales = generateTypographyScale();
  const textCSS = generateTextCSS();
  const headingCSS = generateHeadingCSS();

  const final = scales + textCSS + headingCSS;
  const formatted = prettier.format(final, { parser: 'css' });

  try {
    const outputPath = path.resolve(outDir, fileName);
    fs.writeFileSync(outputPath, formatted);
    console.log('Generated Typography CSS successfully!');
  } catch (error) {
    console.log('Error generating Typography CSS');
  }
}

export default generateTypography;
