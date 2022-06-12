import path from 'path';
import { theme } from '@tradeling/web-design-system';
import prettier from 'prettier';

import fs from 'fs';
const {
  space,
  colors,
  shadows,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} = theme;

const { gray, red } = colors;

const fileName = 'input.css';

function generateInputCSS() {
  const cssString = `
    .input {
      font-size: ${fontSizes.md};
      line-height: ${lineHeights['default']};
      letter-spacing: ${letterSpacings['default']};
      padding-left: ${space['sm']};
      padding-top: ${space['sm']};
      padding-bottom: ${space['sm']};
      border: 1px solid;
      border-color: ${colors.gray['300']};
      height: 40px;
      border-radius: 4px;
      font-weight: ${fontWeights.bold};
      line-height: ${lineHeights.short};
      letter-spacing: ${letterSpacings.tighter};
    }

    .input:hover {
      border-color: ${gray['500']};
    }

    .input:focus {
      border-color: ${gray['500']};
      box-shadow: ${shadows['outline']};
    }

    .input::placeholder {
        color: ${gray['300']}
    }

    .input[disabled] {
      background: ${gray['50']};
      border-color: ${gray['50']};
      color: ${gray['400']};
    }

    .input[aria-invalid] {
      border-color: ${red['500']};
    }
  `;

  const formatted = prettier.format(cssString, { parser: 'css' });
  const outputPath = path.resolve('output', fileName);

  try {
    fs.writeFileSync(outputPath, formatted);
    console.log('Generated Input CSS successfully!');
  } catch (error) {
    console.log('Error generating Input CSS');
  }
}

export default generateInputCSS;
