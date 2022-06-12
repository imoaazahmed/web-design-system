import fs from 'fs';
import path from 'path';
import { spaces, theme } from '@tradeling/web-design-system';
import prettier from 'prettier';

interface ToCSSOptions {
  key: string;
  value: string;
  type?: 'margin' | 'padding';
}

interface ToDefaultCSSOptions extends ToCSSOptions {
  suffix?: string;
}

/*
 * Breakpoints array for responsive styles
 * Whatever we pass here will be converted into a media query
 * This values should also be defined in Design System breakpoints
 */
const breakpointsArr = ['sm', 'md', 'lg', 'xl'];

/*
 * Generate the default classes and responsive classes (if suffix is passed)
 */
const toDefaultCSS = (options: ToDefaultCSSOptions) => {
  const { key, value, type, suffix = '' } = options;
  const prefix = type === 'margin' ? 'm' : 'p';

  return `
    .${prefix}-${key}${suffix} {
        ${type}: ${value};
    }
    .${prefix}t-${key}${suffix} {
        ${type}-top: ${value};
    }
    .${prefix}b-${key}${suffix} {
        ${type}-bottom: ${value};
    }
    .${prefix}l-${key}${suffix} {
        ${type}-left: ${value};
    }
    .${prefix}r-${key}${suffix} {
        ${type}-right: ${value};
    }
    .${prefix}x-${key}${suffix} {
        ${type}-right: ${value};
        ${type}-left: ${value};
    }
    .${prefix}y-${key}${suffix} {
        ${type}-top: ${value};
        ${type}-bottom: ${value};
    }
  `;
};

/**
 * Iterates through the breakpoints array and generates responsive styles
 */
const toResponsiveCSS = (options: ToCSSOptions) => {
  let result = '';

  breakpointsArr.forEach(breakpoint => {
    const suffix = `-${breakpoint}`;
    result += `
      @media (min-width: ${theme.breakpoints[breakpoint]}) {
        ${toDefaultCSS({ ...options, suffix })}
      }
    `;
  });

  return result;
};

/*
 * Generates Margin Auto styles
 */
const toAutoCSS = (suffix = '') => {
  return `
    .m-auto${suffix} {
      margin: auto;
    }

    .mx-auto${suffix} {
      margin-left: auto;
      margin-right: auto;
    }

    .ml-auto${suffix} {
      margin-left: auto;
    }

    .mr-auto${suffix} {
      margin-right: auto;
    }
  `;
};

const toResponsiveAutoCSS = () => {
  let result = '';

  breakpointsArr.forEach(breakpoint => {
    const suffix = `-${breakpoint}`;
    result += `
      @media (min-width: ${theme.breakpoints[breakpoint]}) {
        ${toAutoCSS(suffix)}
      }
    `;
  });

  return result;
};

const toCSS = (options: ToCSSOptions) => {
  /* Generate Default Classes Here */
  let result = toDefaultCSS(options);

  /* Generate Responsive Classes Here */
  result += toResponsiveCSS(options);

  return result;
};

const fileName = 'spacing.css';

function generateSpacing(outDir = 'output') {
  let out = '';

  for (const space in spaces) {
    const value = spaces[space];
    out += toCSS({ key: space, value, type: 'margin' });
    out += toCSS({ key: space, value, type: 'padding' });
  }

  out += toAutoCSS();
  out += toResponsiveAutoCSS();

  const formatted = prettier.format(out, { parser: 'css' });

  const outputPath = path.resolve(outDir, fileName);
  fs.writeFileSync(outputPath, formatted);

  console.log('Generated Spacing CSS successfully!');
}

export default generateSpacing;
