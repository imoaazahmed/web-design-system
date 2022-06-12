import path from 'path';
import { theme as chakraTheme } from '@chakra-ui/react';
import fs from 'fs';
import prettier from 'prettier';
import {
  button,
  theme,
  colors,
  spaces,
  fontSizes,
} from '@tradeling/web-design-system';

const { variants, sizes } = button;
const chakraRadii = chakraTheme.radii;

const getVariantColor = (colorString: string) => {
  const [color, value] = colorString.split('.');

  return color && value ? colors[color][value] : colorString;
};

const generateButtonVariants = (variant: string) => {
  const variantData = variants[variant] ?? {};
  const {
    bg,
    color,
    border,
    borderColor,
    fontWeight,
    padding,
    _hover = {},
    _active = {},
    _disabled = {},
  } = variantData;

  return `
      .button-${variant} {
        ${bg ? `background-color: ${getVariantColor(bg)};` : ''}
        ${color ? `color: ${getVariantColor(color)};` : ''}
        ${border ? `border: ${border};` : ''}
        ${borderColor ? `border-color: ${getVariantColor(borderColor)};` : ''}
        ${fontWeight ? `font-weight: ${fontWeight};` : ''}
        ${padding ? `padding: ${padding};` : ''}
      }
      ${
        Object.keys(_hover).length
          ? `
        .button-${variant}:hover {
          ${_hover.bg ? `background-color: ${getVariantColor(_hover.bg)};` : ''}
          ${
            _hover.textDecoration
              ? `text-decoration: ${_hover.textDecoration};`
              : ''
          }
        }
      `
          : ''
      }
      ${
        Object.keys(_active).length
          ? `
        .button-${variant}:active {
          ${
            _active.bg
              ? `background-color: ${getVariantColor(_active.bg)};`
              : ''
          }
          ${_active.color ? `color: ${getVariantColor(_active.color)};` : ''}
        }
      `
          : ''
      }
      ${
        Object.keys(_disabled).length
          ? `
        .button-${variant}:disabled {
          ${
            _disabled.bg
              ? `background-color: ${getVariantColor(_disabled.bg)};`
              : ''
          }
          ${_disabled.opacity ? `opacity: ${_disabled.opacity};` : ''}
          ${
            _disabled.color ? `color: ${getVariantColor(_disabled.color)};` : ''
          }
          ${
            _disabled.borderColor
              ? `border-color: ${getVariantColor(_disabled.borderColor)};`
              : ''
          }
        }
      `
          : ''
      }
  `;
};

function generateButtonCSS() {
  const css = `
     [class^="button"] {
        border-radius: ${chakraRadii['md']};
        font-weight: bold;
        color: white;
        line-height: normal;
        height: auto;
     }
     [class^="button"]:focus {
        box-shadow: ${theme.shadows['outline']};
     }
     ${generateButtonVariants('primary')}
     ${generateButtonVariants('primary-next')}
     ${generateButtonVariants('secondary-next')}
     ${generateButtonVariants('danger')}
     ${generateButtonVariants('warning')}
     ${generateButtonVariants('outline')}
     ${generateButtonVariants('ghost')}
     ${generateButtonVariants('link')}
    `;

  return css;
}

const generateButtonsSize = () => {
  let result = '';
  for (const propertyKey in sizes) {
    const { minWidth, fontSize, padding } = sizes[propertyKey];
    result += `
      .button-${propertyKey} {
        min-width: ${minWidth};
        font-size: ${fontSizes[fontSize]};
        padding: ${spaces[padding]};
      }
    `;
  }
  return result;
};

const fileName = 'buttons.css';

function generateButtons(outDir = 'output') {
  const outputPath = path.resolve(outDir, fileName);
  const result = generateButtonCSS() + generateButtonsSize();
  const formatted = prettier.format(result, { parser: 'css' });
  fs.writeFileSync(outputPath, formatted);
  console.log('Generated Button CSS successfully!');
}

export default generateButtons;
