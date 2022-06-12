import path from 'path';
import fs from 'fs';
import { theme } from '@tradeling/web-design-system';
import prettier from 'prettier';

const fileName = 'colors.css';
const outputPath = path.resolve('output', fileName);

interface ToCSSOptions {
  color: string;
  value?: string;
  hex: string;
}

const toCSS = (options: ToCSSOptions) => {
  const { color, value, hex } = options;
  const suffix = color + (value ? `-${value}` : '');

  return `.${suffix} {
        color: ${hex};
    }
    .bg-${suffix} {
        background-color: ${hex};
    }
    .border-${suffix} {
        border-color: ${hex};
    }`;
};

let out = '';

for (const color in theme.colors) {
  const colorObject = theme.colors[color];

  if (typeof colorObject === 'string') {
    out += toCSS({ color, hex: colorObject });
    continue;
  }

  for (const value in colorObject) {
    const hex = colorObject[value];
    out += toCSS({ color, value, hex });
  }
}

const formatted = prettier.format(out, { parser: 'css' });

fs.writeFileSync(outputPath, formatted);
