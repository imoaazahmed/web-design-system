import { colors } from '@tradeling/web-design-system';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

//css generator is not used for now we will keep types as any
interface ToCSSOptions {
  color: any;
  value?: string;
  hex: string;
}

const toCSS = (options: any) => {
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

function generateColors(outDir: any = 'output') {
  let out: any = '';

  for (const color in colors) {
    const colorObject = colors[color];

    if (typeof colorObject === 'string') {
      out += toCSS({ color, hex: colorObject });
      continue;
    }

    for (const value in colorObject) {
      const hex = colorObject[value];
      out += toCSS({ color, value, hex }) as any;
    }
  }
  const fileName = 'colors.css';
  const formatted: any = prettier.format(out, { parser: 'css' });

  const outputPath = path.resolve(outDir, fileName);
  fs.writeFileSync(outputPath, formatted);
  console.log('Generated Colors CSS successfully!');
}

export default generateColors;
