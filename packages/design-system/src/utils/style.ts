export function toRem(pixel: number, rootFontSize = 16) {
  return `${pixel / rootFontSize}rem`;
}

export function getRandomBg(str: string, list: string[]) {
  let index = 0;
  if (str.length === 0) return list[0];
  for (let i = 0; i < str.length; i++) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = ((index % list.length) + list.length) % list.length;
  return list[index];
}
