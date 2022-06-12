import path from 'path';
import fs from 'fs';
import fsUtils from 'fs-extra';
import prettier from 'prettier';

export const chakraMap = {
  w: { label: 'width', themeKey: 'space' },
  h: { label: 'height', themeKey: 'space' },
  bg: { label: 'background-color', themeKey: 'colors' },
  shadow: { label: 'box-shadow', themeKey: 'shadows' },
  p: { label: 'padding', themeKey: 'space' },
  pt: { label: 'padding-top', themeKey: 'space' },
  pr: { label: 'padding-right', themeKey: 'space' },
  pb: { label: 'padding-bottom', themeKey: 'space' },
  pl: { label: 'padding-left', themeKey: 'space' },
  m: { label: 'margin', themeKey: 'space' },
  mt: { label: 'margin-top', themeKey: 'space' },
  mr: { label: 'margin-right', themeKey: 'space' },
  mb: { label: 'margin-bottom', themeKey: 'space' },
  ml: { label: 'margin-left', themeKey: 'space' },
};

export function get(
  obj: Record<string, any>,
  key: any,
  fallback: any,
  p?: any
) {
  key = key.split ? key.split('.') : key;
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undefined;
  }
  return obj === undefined ? fallback : obj;
}

export function mergeCSSFiles(
  folder: string,
  output: string,
  shouldMinify = true
) {
  fsUtils.ensureFileSync(output);

  const fileArr = [];

  fs.readdirSync(folder).forEach(file => {
    if (file.endsWith('.css')) {
      fileArr.push(file);
    }
  });

  fileArr.forEach(file => {
    const p = path.resolve(folder, file);
    const buffer = fs.readFileSync(p);
    let bufferText = buffer.toString().replace(/\s/g, '');

    if (!shouldMinify) {
      bufferText = prettier.format(bufferText, { parser: 'css' });
    }
    fs.appendFileSync(output, bufferText);
  });
}
